import React, { useState, useEffect } from 'react';
import DefaultPage from '../../components/DefaultPage/DefaultPage';
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Select, Input, Table, Button } from 'antd';
import styles from "./Historic.module.css";
import months from "../../utils/months";

export default function Historic() {
  const [user, setUser] = useState({});
  const [bankHours, setBankHours] = useState(0);
  const [data, setData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const userId = localStorage.getItem('id');

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/point/historic/${userId}/${currentMonth}`)
    .then(response => response.json())
    .then(data => {
      let gridData = data.historic.map((item) => {
        const date = new Date(item.createdAt);
        const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        return {
          key: item.id,
          date: formattedDate,
          marking: item.hour,
        };
      });
      setData(gridData);
      setBankHours(data.bankHours);
    });
  }, [setCurrentMonth, currentMonth]);

  function getCurrentMonth() {
    const currentDate = new Date();
    return currentDate.getMonth() + 1;
  }

  const itens = months.map((month) => ({
    value: month.key,
    label: month.month,
  }));

  const columns = [
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Marcação',
      dataIndex: 'marking',
      key: 'marking',
    },
    {
      title: 'Ocorrência',
      key: 'occurrence',
      render: () => (
        <Button type='primary' danger>
          Justificar
        </Button>
      ),
    },
  ];

  return (
    <DefaultPage>
      <div className={styles.historic}>
        <h1>Acerto de Ponto</h1>
        <div>
          <Row className={styles.userHistoric}>
            <Col style={{ marginRight: '30px' }}>
              <Avatar size={64} icon={<UserOutlined />} />
            </Col>
            <Col style={{ marginRight: '50px' }}>
              <h2>{user.name}</h2>
              <p style={{ marginTop: '10px' }}>{user.position}</p>
            </Col>
            <Col>
              <h3>Escala</h3>
              <p style={{ marginTop: '10px' }}>{user.hour}</p>
            </Col>
          </Row>
        </div>
        <Row gutter={16} style={{ marginTop: '40px' }}>
          <Col className={styles.info}>
            <p>Mês</p>
            <Select
              style={{
                width: '100%',
              }}
              placeholder={'Mês'}
              options={itens}
              defaultValue={currentMonth}
              size="large"
              onChange={setCurrentMonth}
            />
          </Col>
          <Col className={styles.info}>
            <p>Banco de Horas</p>
            <Input size="large" value={bankHours} suffix={"horas"} readOnly />
          </Col>
        </Row>
        <Table columns={columns} dataSource={data} style={{ marginTop: '40px' }} />
      </div>
    </DefaultPage>
  );
}