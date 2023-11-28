import React, { useState } from "react";
import { Col, Row, Table, Select } from "antd";
import { ColumnsType } from "antd/es/table";
import styles from "./Home.module.scss";

interface Lesson {
  key: string;
  day: string;
  time: string;
  subject: string;
  teacher: string;
}

const Home: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>("");

  const columns: ColumnsType<Lesson> = [
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

  const lessons: Lesson[] = [
    {
      key: "1",
      day: "Понедельник",
      time: "10:00 - 11:00",
      subject: "Введение в программирование",
      teacher: "Е.Р.Чинибаев",
    },
    {
      key: "2",
      day: "Понедельник",
      time: "11:00 - 12:00",
      subject: "Введение в программирование",
      teacher: "Е.Р.Чинибаев",
    },
    {
      key: "3",
      day: "Понедельник",
      time: "12:00 - 14:00",
      subject: "Свободное время",
      teacher: "",
    },
    {
      key: "4",
      day: "Понедельник",
      time: "14:00 - 15:00",
      subject: "ИКТ",
      teacher: "Е.Р.Чинибаев",
    },
    {
      key: "5",
      day: "Вторник",
      time: "12:00 - 13:00",
      subject: "Математика",
      teacher: "Иванов",
    },
    {
      key: "6",
      day: "Вторник",
      time: "13:00 - 14:00",
      subject: "Английский язык",
      teacher: "Jeff Bezos",
    },
    {
      key: "7",
      day: "Вторник",
      time: "14:00 - 15:00",
      subject: "Английский язык",
      teacher: "Jeff Bezos",
    },
    {
      key: "8",
      day: "Среда",
      time: "10:00 - 11:00",
      subject: "Физика",
      teacher: "Александрова М.",
    },
    {
      key: "9",
      day: "Среда",
      time: "11:00 - 12:00",
      subject: "Химия",
      teacher: "Петров В.",
    },
    {
      key: "10",
      day: "Среда",
      time: "12:00 - 13:00",
      subject: "История",
      teacher: "Сидоров А.",
    },
    {
      key: "11",
      day: "Четверг",
      time: "09:00 - 10:00",
      subject: "Биология",
      teacher: "Иванова И.",
    },
    {
      key: "12",
      day: "Четверг",
      time: "10:00 - 11:00",
      subject: "География",
      teacher: "Кузнецов Д.",
    },
    {
      key: "13",
      day: "Четверг",
      time: "11:00 - 12:00",
      subject: "Литература",
      teacher: "Смирнова О.",
    },
    {
      key: "14",
      day: "Пятница",
      time: "10:00 - 11:00",
      subject: "Искусство",
      teacher: "Краснова Л.",
    },
    {
      key: "15",
      day: "Пятница",
      time: "11:00 - 12:00",
      subject: "Физкультура",
      teacher: "Зайцев М.",
    },
    {
      key: "16",
      day: "Пятница",
      time: "12:00 - 13:00",
      subject: "Информатика",
      teacher: "Белов П.",
    },
  ];

  const filteredData = selectedDay
    ? lessons.filter((lesson) => lesson.day === selectedDay)
    : lessons;

  const handleDayChange = (value: string) => {
    setSelectedDay(value);
  };

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Row>
          <Col span={20}>
            <Select
              style={{ width: 200, marginBottom: 20 }}
              placeholder="Выберите день"
              onChange={handleDayChange}
              allowClear
            >
              <Select.Option value="Понедельник">Понедельник</Select.Option>
              <Select.Option value="Вторник">Вторник</Select.Option>
              <Select.Option value="Среда">Среда</Select.Option>
              <Select.Option value="Четверг">Четверг</Select.Option>
              <Select.Option value="Пятница">Пятница</Select.Option>
            </Select>
            <Table
              columns={columns}
              dataSource={filteredData}
              pagination={false}
            />
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
