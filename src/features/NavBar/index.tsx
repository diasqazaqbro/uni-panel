import { Link } from "react-router-dom";
import { Menu, type MenuProps } from "antd";
import { ROUTERS_CONSTANTS } from "../../shared/config/routes";
import { HomeOutlined, SmileOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const itemsForStudent: MenuItem[] = [
  getItem(<Link to="/">Главная страница</Link>, "1", <HomeOutlined />),
  getItem(
    <Link to={ROUTERS_CONSTANTS.SCHEDULE}>Успеваемость</Link>,
    "2",
    <SmileOutlined />
  ),
  getItem(
    <Link to={ROUTERS_CONSTANTS.PROFILE}>Профиль</Link>,
    "3",
    <SmileOutlined />
  ),
];

const itemsForTeacher: MenuItem[] = [
  getItem(<Link to="/">Главная страница</Link>, "1", <HomeOutlined />),
  getItem(
    <Link to={ROUTERS_CONSTANTS.STUDENTS}>Студенты</Link>,
    "2",
    <SmileOutlined />
  ),
  getItem(
    <Link to={ROUTERS_CONSTANTS.GROUPS}>Группы</Link>,
    "3",
    <SmileOutlined />
  ),
];
const NavBar = () => {
  const role = useSelector((state: any) => state.role.userRole);
  console.log(role);
  
  return (
    <>
      {role === "student" ? (
        <Menu
          style={{
            marginTop: "150px",
          }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={itemsForStudent}
        />
      ) : (
        ""
      )}
      {role === "teacher" ? (
        <Menu
          style={{
            marginTop: "150px",
          }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={itemsForTeacher}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
