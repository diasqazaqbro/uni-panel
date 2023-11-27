import React from "react";
import styles from "./Home.module.scss";
import { Col, Row, Table } from "antd";

const Home = () => {
  // Define the columns for the timetable
  const columns = [
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Teacher",
      dataIndex: "teacher",
      key: "teacher",
    },
  ];

  // Define the data for the timetable
  const data = [
    {
      key: "1",
      day: "Понедельник",
      time: "10:00 - 11:00",
      subject: "Введение в программирование",
      teacher: "Чинибаев",
    },
    // ... more lesson entries
  ];

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Row>
          <Col span={20}>
            <Table
              columns={columns}
              dataSource={data}
              virtual
              scroll={{ x: 1000, y: 500 }}
            />
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
