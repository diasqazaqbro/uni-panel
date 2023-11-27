import { GreenArrow, TestIcon } from "../../shared/ui/Icon";
import { ChartArea } from "../../widgets/Chart/ChartArea";
import styles from "./Home.module.scss";
import { Col, Input, Progress, Row } from "antd";

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
            <Input.Search
              placeholder="Search"
              onSearch={() => console.log("yo")}
            />
          </Col>
        </Row>
      </div>
      <div className={styles.dashboard}>
        <Row>
          <Col span={8}>
            <Row>
              <Col>
                <TestIcon />
              </Col>
              <Col className={styles.item}>
                <h5>Earning</h5>
                <h2>$198k</h2>
                <h4>
                  <GreenArrow /> <span>37.8%</span>this month
                </h4>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <TestIcon />
              </Col>
              <Col className={styles.item}>
                <h5>Earning</h5>
                <h2>$198k</h2>
                <h4>
                  <GreenArrow /> <span>37.8%</span>this month
                </h4>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <Col>
                <TestIcon />
              </Col>
              <Col className={styles.item}>
                <h5>Earning</h5>
                <h2>$198k</h2>
                <h4>
                  <GreenArrow /> <span>37.8%</span>this month
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className={styles.charts}>
        <div className={styles.item}>
          <ChartArea />
        </div>
      </div>
      <div className={styles.circule}>
        <Row>
          <Col span={12}>
            <div className={styles.item}>
              <Row>
                <Col span={12}>
                  <Progress
                    size={250}
                    type="circle"
                    percent={70}
                    status="exception"
                  />
                  <h3>dsadas</h3>
                  <h5>dasdas</h5>
                </Col>
                <Col span={12}>
                  <Progress size={250} type="circle" percent={100} />
                  <h3>dsadas</h3>
                  <h5>dasdas</h5>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.item}></div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
