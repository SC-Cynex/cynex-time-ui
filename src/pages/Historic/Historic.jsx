import React, { useState } from 'react'
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Select, Input, Space, Table, Button } from 'antd';
import styles from "./Historic.module.css";
import months from "../../utils/months";
import data from "../../utils/historic";

export default function Historic() {
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
      title: 'Horas Trabalhadas',
      dataIndex: 'worked',
      key: 'worked',
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
              <h2>Alexandre Martins da Silva</h2>
              <p style={{ marginTop: '10px' }}>Gerente de Recursos Humanos</p>
            </Col>
            <Col>
              <h3>Escala</h3>
              <p style={{ marginTop: '10px' }}>08:00 12:00 13:30 18:00</p>
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
              defaultValue={getCurrentMonth()}
              size="large"
            />
          </Col>
          <Col className={styles.info}>
            <p>Banco de Horas</p>
            <Input size="large" value={13} suffix={"horas"} />
          </Col>
        </Row>
        <Table columns={columns} dataSource={data} style={{ marginTop: '40px' }} />
      </div>
    </DefaultPage>
  )
}
