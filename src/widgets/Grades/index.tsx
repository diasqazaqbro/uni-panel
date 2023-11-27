import { Table } from "antd";

const Grades = () => {
  const dataSource = [
    {
      key: "1",
      subject: 'Введение в программирований',
      grade: 90,
      teacher: "Адилов Диас",
    },
    {
      key: "2",
      subject: 'Введение в программирований',
      grade: 100,
      teacher: "Адилов Диас",
    },
    {
      key: "3",
      subject: 'Икт',
      grade: 69,
      teacher: "Калманбетов Данияр",
    },

  ];

  const columns = [
    {
      title: "Предмет",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Оценка",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Имя преподавателя",
      dataIndex: "teacher",
      key: "teacher",
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Grades;
