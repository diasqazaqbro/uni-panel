import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Avatar, Card, Col, Row, Skeleton, Switch } from "antd";
import styles from "./Groups.module.scss";
const { Meta } = Card;

const Groups: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  return (
    <div className={styles.groups}>
      <h3>Welcome John!👋🏼</h3>
      <h4>May 28, 2020</h4>
      <Switch checked={!loading} onChange={onChange} />

      <Row className={styles.block}>
        <Col span={8} style={{margin: '20px 0'}}>
          <Card
            style={{ margin: '0 10px' }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                }
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </Card>
        </Col>
        <Col span={8} style={{margin: '20px 0'}}>
          <Card
            style={{ margin: '0 10px' }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                }
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </Card>
        </Col>
        <Col span={8} style={{margin: '20px 0'}}>
          <Card
            style={{ margin: '0 10px' }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                }
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </Card>
        </Col>
        <Col span={8} style={{margin: '20px 0'}}>
          <Card
            style={{ margin: '0 10px' }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                }
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </Card>
        </Col>
        <Col span={8} style={{margin: '20px 0'}}>
          <Card
            style={{ margin: '0 10px' }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                }
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </Card>
        </Col>
        <Col span={8} style={{margin: '20px 0'}}>
          <Card
            style={{ margin: '0 10px' }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                }
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Groups;
