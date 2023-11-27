import { Button, Col, Modal, Row, Spin } from "antd";
import styles from "./Gpt.module.scss";
import { useState } from "react";
const messageHistory = [
  {
    role: "user",
    content:
      "привет, давай так я буду кидать тебе цифры, это оценки, и информацию по типу он грантник или нет. а ты просто говоришь что по типу у тебя очень плохие оценки и тебе нужно как то хорошо учиться, а то ты потеряешь грант (ну если у него она есть) и т.д",
  },
  { role: "user", content: "грантник да, 40 100 39 70 90 " },
];
const Gpt = () => {
  const [visible, setVisible] = useState(false);
  const [answer, setAnswer] = useState("loading");

  const showModal = () => {
    setVisible(true);
    fetch("http://localhost:3001/getChatResponse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messageHistory }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAnswer(data.response);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div className={styles.gpt}>
      <Modal
        title="UniBot"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {answer == "loading" ? (
            <Spin style={{ padding: "40px" }} tip="Loading" size="large" />
          ) : (
            answer
          )}
        </div>
      </Modal>
      <div className={styles.item}>
        <Row>
          <Col xs={24} sm={20}>
            <h3>Привет, Диас. При нажатий на кнопку ниже</h3>
            <h4>вам покажут вашу успеваемость</h4>
          </Col>
          <Col xs={24} sm={4}>
            <Button onClick={showModal} type="primary" size={"large"}>
              Узнать оценку
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Gpt;
