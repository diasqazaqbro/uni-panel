import React, { ReactNode, useState } from "react";
import { Layout,  theme } from "antd";
import Float from "../../widgets/Float";
import NavBar from "../../features/NavBar";

const { Content, Footer, Sider } = Layout;

interface LayoutComponentProps {
  children: ReactNode;
}



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
