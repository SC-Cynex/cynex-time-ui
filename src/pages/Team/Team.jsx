import React from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Collapse, Space, Avatar, Dropdown, Row, Col, Tooltip } from "antd";
import members from "../../utils/members";
import actions from "../PointRegister/actions";
import {
  UserOutlined,
  UnorderedListOutlined,
  EditOutlined,
  DeleteOutlined,
  BellOutlined
} from "@ant-design/icons";
import { FaUsersRectangle } from "react-icons/fa6";
import styles from "./Team.module.css";

export default function Team() {
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

  const itens = [
    {
      key: "1",
      label: (
        <div>
          <EditOutlined />
          <span style={{ marginLeft: "10px" }}>Editar</span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          <DeleteOutlined />
          <span style={{ marginLeft: "10px" }}>Excluir</span>
        </div>
      ),
    },
  ];

  const genExtra = (name) => (
    <div>
      <Tooltip title={`Você tem marcações de ${name} para aprovar`}>
        <span style={{ marginRight: '10px' }}>
          <BellOutlined 
            style={{ fontSize: '20px' }} 
            onClick={(event) => {
              event.stopPropagation(); //Impede que o abra o Collapse
            }}  
          />
        </span>
      </Tooltip>
      <Dropdown
        menu={{
          items: itens,
        }}
        trigger={["click"]}
        placement="bottomRight"
      >
        <UnorderedListOutlined
          style={{ fontSize: '20px' }}
          onClick={(event) => {
            event.stopPropagation(); //Impede que o abra o Collapse
          }}
        />
      </Dropdown>
    </div>
  );

  return (
    <DefaultPage>
      <div className={styles.team}>
        <h1>Equipe</h1>
        <div className={styles.collapse}>
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
                  extra: genExtra(member.name),
                },
              ]}
              expandIconPosition={"end"}
              className={styles.userCollapse}
              size="large"
            />
          ))}
        </div>
      </div>
    </DefaultPage>
  );
}
