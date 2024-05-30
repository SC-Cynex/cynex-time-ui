import React, { useState } from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Collapse, Space, Avatar, Row, Col, Button, ConfigProvider, Tooltip } from "antd";
import members from "../../utils/members";
import actions from "../PointRegister/actions";
import {
  UserOutlined,
  PlusCircleFilled
} from "@ant-design/icons";
import { FaUsersRectangle } from "react-icons/fa6";
import styles from "./MemberRegister.module.css";
import ModalRegister from "./ModalRegister";

export default function MemberRegister() {
  const [showRegister, setShowRegister] = useState(false);

  const memberInfo = (position, workload, compTime) => {
    const listPoint = actions.getPointRegister();

    return (
      <div>
        <p className={styles.titleInfo}>Últimas Marcações</p>
        <Row className={styles.rowPointer}>
          <Space size={40} className={styles.spacePointer}>
            {Array.isArray(listPoint) &&
              listPoint.slice(0, 8).map((item, i) => (
                <div key={i} className={styles.pointers}>
                  <p className={styles.hours}>{item.horas}</p>
                  <p className={styles.date}>{item.data}</p>
                </div>
              ))}
          </Space>
        </Row>

        <div style={{ marginTop: '20px' }}>
          <Row>
            <Col style={{ marginRight: '30px' }}>
              <Avatar size={64} icon={<UserOutlined />} />
            </Col>
            <Col style={{ marginRight: '30px' }}>
              <p className={styles.titleMore}>Cargo</p>
              <span className={styles.aboutMember}>{position}</span>
            </Col>
            <Col style={{ marginRight: '30px' }}>
              <p className={styles.titleMore}>Carga Horária</p>
              <span className={styles.aboutMember}>{workload}</span>
            </Col>
            <Col style={{ marginRight: '30px' }}>
              <p className={styles.titleMore}>Banco de Horas</p>
              <span className={styles.aboutMember}>{compTime}</span>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

  return (
    <DefaultPage>
      <div className={styles.team}>
        <h1>Registrar Membro</h1>
        <div className={styles.collapse}>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: '#1F497D',
                  colorPrimaryHover: '#1F497D',
                  colorPrimaryActive: '#1F497D ',
                  defaultColor: 'white',
                  defaultBg: '#1F497D',
                  defaultHoverBg: '#1F497D',
                  defaultHoverColor: 'white',
                  defaultActiveBg: '#EFEFEF',
                  defaultActiveBorderColor: '#d9d9d9'
                },
              },
            }}
          >
            <Tooltip title="Registre um novo membro aqui" placement="bottom">
              <Button 
                size="large" 
                className={styles.register}
                onClick={() => setShowRegister(true)}
              >
                <PlusCircleFilled style={{ fontSize: '25px' }} />
              </Button>
            </Tooltip>
          </ConfigProvider>

          {members.map((member) => (
            <Collapse
              items={[
                {
                  key: member.code,
                  label: (
                    <span className={styles.avartarUser}>
                      <FaUsersRectangle
                        size={20}
                        style={{ marginRight: "10px" }}
                      />
                      {member.name}
                    </span>
                  ),
                  children: memberInfo(
                    member.position,
                    member.workload,
                    member.compTime
                  ),
                },
              ]}
              expandIconPosition={"end"}
              className={styles.userCollapse}
              size="large"
            />
          ))}
        </div>
        <ModalRegister
          open={showRegister}
          close={() => setShowRegister(false)}
        />
      </div>
    </DefaultPage>
  );
}
