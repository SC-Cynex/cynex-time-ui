import React from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Collapse, Space, Avatar, Dropdown, Row, Col } from "antd";
import members from "../../utils/members";
import actions from "../PointRegister/actions";
import { UserOutlined, UnorderedListOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { FaUsersRectangle } from "react-icons/fa6";
import styles from "./Team.module.css";

export default function Team() {
  const memberInfo = (position, workload, compTime) => {
    const listPoint = actions.getPointRegister();

    return (
      <div className={styles.infoMember}>
        <p className={styles.titleInfo}>Últimas Marcações</p>
        <Row gutter={16} className={styles.rowPointer}>
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
        <Row gutter={16} className={styles.moreInfo}>
          <Col>
            <Avatar size={64} icon={<UserOutlined />} />
          </Col>
          <Col span={2}>
            <p className={styles.titleMore}>Cargo</p>
            <span className={styles.aboutMember}>{position}</span>
          </Col>
          <Col span={2}>
            <p className={styles.titleMore}>Carga Horária</p>
            <span className={styles.aboutMember}>{workload}</span>
          </Col>
          <Col span={2}>
            <p className={styles.titleMore}>Banco de Horas</p>
            <span className={styles.aboutMember}>{compTime}</span>
          </Col>
        </Row>
      </div>
    );
  };

  const itens = [
    {
      key: '1',
      label: (
        <div>
          <EditOutlined /><span style={{marginLeft: '10px'}}>Editar</span>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div>
          <DeleteOutlined /><span style={{marginLeft: '10px'}}>Excluir</span>
        </div>
      ),
    }
  ];

  const genExtra = () => (
    <Dropdown
      menu={{
        items: itens,
      }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <UnorderedListOutlined size={20}/>
    </Dropdown>
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
                  children: memberInfo(member.position, member.workload, member.compTime),
                  showArrow: false,
                  extra: genExtra(),
                },
              ]}
              className={styles.userCollapse}
            />
          ))}
        </div>
      </div>
    </DefaultPage>
  );
}
