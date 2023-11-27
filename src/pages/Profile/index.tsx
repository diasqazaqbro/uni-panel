import { Col, Image, Row } from "antd";
import styles from "./Profile.module.scss";
import Grades from "../../widgets/Grades";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.one}>
        <Row>
          <Col span={6}>
            {" "}
            <Image
              width={250}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col span={18}></Col>
        </Row>
      </div>
      <Row>
        <Col span={6}>
          <div className={styles.two}></div>
        </Col>
        <Col span={18}>
          <div className={styles.three}>
      <Grades/>

          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
