import { Button, Col, Modal, Row, Spin } from "antd";
import styles from "./Gpt.module.scss";
import { useState } from "react";
const Gpt = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
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
        title="Заголовок модального окна"
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
          <Spin style={{ padding: "40px" }} tip="Loading" size="large" />
        </div>
      </Modal>
      <Row>
        <Col span={20}>
          <div className={styles.item}>
            <Row>
              <Col span={20}>
                <h3>Привет, Диас. При нажатий на кнопку ниже</h3>
                <h4>вам покажут вашу успеваемость</h4>
              </Col>
              <Col span={4}>
                <Button onClick={showModal} type="primary" size={"large"}>
                  Узнать оценку
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4}>
          <div className={styles.item}></div>
        </Col>
      </Row>
    </div>
  );
};

export default Gpt;
