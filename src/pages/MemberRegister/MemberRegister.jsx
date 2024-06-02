import React, { useState, useEffect } from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Collapse, Space, Avatar, Row, Col, Button, ConfigProvider, Tooltip } from "antd";
import actions from "../PointRegister/actions";
import actionsTeam from "./actions";
import {
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
  BellOutlined,
  PlusCircleFilled
} from "@ant-design/icons";
import { FaUsersRectangle } from "react-icons/fa6";
import styles from "./MemberRegister.module.css";
import ModalRegister from "./ModalRegister";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
import ModalPoints from "./ModalPoints";
import CTMessage from "../../components/CTMessage/CTMessage";

export default function MemberRegister() {
  const [showRegister, setShowRegister] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showPoints, setShowPoints] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [data, setData] = useState([]);
  const [listPointsByUser, setListPointsByUser] = useState({});
  const teamId = localStorage.getItem("team");
  const [refresh, setRefresh] = useState(true);
  const [status, setStatus] = useState(null);
  const [enable, setEnable] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchUsersTeam() {
      const response = await fetch(`http://localhost:3000/user/team/${teamId}`);
      const data = await response.json();
      setData(data);

      data.forEach((user) => {
        actions.getPointRegisterByUser(user.id).then((points) => {
          setListPointsByUser((prevPoints) => ({
            ...prevPoints,
            [user.id]: points,
          }));
        });
      });
    }

    if (refresh) {
      fetchUsersTeam()
    }
  }, [refresh]);

  const memberInfo = (position, id) => {
    const listPoint = listPointsByUser[id] || [];

    return (
      <div>
        <p className={styles.titleInfo}>Últimas Marcações</p>
        <Row className={styles.rowPointer}>
          <Col>
            <Space size={40} className={styles.spacePointer}>
              {listPoint && Array.isArray(listPoint) && listPoint.length > 0 ? (
                listPoint.slice(0, 8).map((item, i) => (
                  <div key={i} className={styles.pointers}>
                    <p className={styles.hours}>{item.horas}</p>
                    <p className={styles.date}>{item.data}</p>
                  </div>
                ))
              ) : (
                <p>Não há marcações</p>
              )}
            </Space>
          </Col>
          <Col>
            <Button
              onClick={() => {
                setSelectedUserId(id);
                setShowPoints(true);
              }}
              type="link"
            >
              Ver mais
            </Button>
          </Col>
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
          </Row>
        </div>
      </div>
    );
  };

  const genExtra = (name, id) => (
    <div>
      <Tooltip title={`Você tem marcações de ${name} para aprovar`}>
        <span style={{ marginRight: '10px' }}>
          <BellOutlined
            style={{ fontSize: '20px' }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </span>
      </Tooltip>

      <Tooltip title={'Editar membro'}>
        <span style={{ marginRight: '10px' }}>
          <EditOutlined
            style={{ fontSize: '20px' }}
            onClick={(event) => {
              event.stopPropagation();
              setSelectedUserId(id);
              setShowEdit(true);
            }}
          />
        </span>
      </Tooltip>

      <Tooltip title={'Remover membro da equipe'}>
        <span style={{ marginRight: '10px' }}>
          <DeleteOutlined
            style={{ fontSize: '20px' }}
            onClick={(event) => {
              event.stopPropagation();
              setSelectedUserId(id);
              setShowDelete(true);
            }}
          />
        </span>
      </Tooltip>
    </div>
  );

  return (
    <DefaultPage>
      <div className={styles.team}>
        <h1>Equipe</h1>
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
          {enable && (
            <div style={{ marginBottom: '20px'}}>
              <CTMessage message={message} type={status} enable={setEnable} />
            </div>
          )}

          {data ? data.map((member) => (
            <Collapse
              key={member.id}
              items={[
                {
                  key: member.id,
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
                    member.Role.name,
                    member.id
                  ),
                  extra: genExtra(member.name, member.id),
                },
              ]}
              expandIconPosition={"end"}
              className={styles.userCollapse}
              size="large"
            />
          )) : ""}
        </div>
        {showRegister && <ModalRegister
          open={showRegister}
          close={() => setShowRegister(false)}
          setRefresh={setRefresh}
          message={setMessage}
          status={setStatus}
          enable={setEnable}
        />}
        {showDelete && <ModalDelete
          open={showDelete}
          close={() => setShowDelete(false)}
        />}
        {showEdit && <ModalEdit
          open={showEdit}
          close={() => setShowEdit(false)}
          userId={selectedUserId}
          setRefresh={setRefresh}
          message={setMessage}
          status={setStatus}
          enable={setEnable}
        />}
        {showPoints && <ModalPoints
          open={showPoints}
          close={() => setShowPoints(false)}
          userId={selectedUserId}
        />}
      </div>
    </DefaultPage>
  );
}
