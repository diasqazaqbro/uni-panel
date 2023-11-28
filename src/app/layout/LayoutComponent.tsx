import React, { ReactNode, useEffect, useState } from "react";
import { Layout, theme } from "antd";
import Float from "../../widgets/Float";
import NavBar from "../../features/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { userFC } from "../../features/NavBar/roleSlice";

const { Content, Footer, Sider } = Layout;

interface LayoutComponentProps {
  children: ReactNode;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.role.isAuth);
  const user = useSelector((state: any) => state.role.user);

  if (!isAuth) {
    window.location.replace("https://samigroup.kz");
  }
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  console.log(user);

  useEffect(() => {
    localStorage.setItem("token", token);

    fetch("https://pixel2protocolv1-production-c8ac.up.railway.app/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(userFC(data));
      })
      .catch((error) => {
        console.error("Ошибка запроса:", error);
      });
  }, []);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <NavBar />
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
        <Float />
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
