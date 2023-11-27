import React, { ReactNode, useState } from "react";
import {
  HomeOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import { ROUTERS_CONSTANTS } from "../../shared/config/routes";
import Float from "../../widgets/Float";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
interface LayoutComponentProps {
  children: ReactNode;
}
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

const items: MenuItem[] = [
  getItem(<Link to="/">Главная Панель</Link>, "1", <HomeOutlined />),
  getItem(<Link to={ROUTERS_CONSTANTS.NOTIFICATION}>Уведомление</Link>, "2", <SmileOutlined />),
  getItem("Для студентов", "sub1", <UserOutlined />, [
    getItem(<Link to={ROUTERS_CONSTANTS.STUDENTS}>Список студентов</Link>, "3"),
    getItem(<Link to={ROUTERS_CONSTANTS.GROUPS}>Группы</Link>, "4"),
    getItem(<Link to={ROUTERS_CONSTANTS.SCHEDULE}>Расписание</Link>, "5"),
  ]),
];

const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
        style={{
          marginTop: '150px'
        }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
        <Float/>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
