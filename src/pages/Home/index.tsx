import styles from "./Home.module.scss";
import { Col, Row } from "antd";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Row>
          <Col span={20}>
            <h3>Welcome John!👋🏼</h3>
            <h4>May 28, 2020</h4>
          </Col>
          <Col span={4}>
            
          </Col>
        </Row>
      </div>
      
     
    </div>
  );
};

export default Home;
