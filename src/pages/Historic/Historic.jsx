import React, { useState, useEffect } from 'react';
import DefaultPage from '../../components/DefaultPage/DefaultPage';
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Row, Col, Select, Input, Table, Button, Tooltip } from 'antd';
import styles from "./Historic.module.css";
import months from "../../utils/months";
import ModalJustify from "./ModalJustify";
import actions from './actions';

export default function Historic() {
  const [showJustify, setShowJustify] = useState(false);
  const [invalidMarking, setInvalidMarking] = useState(null);

  const [user, setUser] = useState({});
  const [bankHours, setBankHours] = useState(0);
  const [data, setData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const userId = localStorage.getItem('id');

  useEffect(() => {
    async function fetchUser() {
      const data = await actions.getUserById();
      setUser(data);
    }
    fetchUser();
  }, []);

  useEffect(() => {
    if (!user.id) return;
    async function fetchHistoric() {
      const response = await fetch(`http://localhost:3000/point/historic/${userId}/${currentMonth}`);
      const data = await response.json();
      const groupedData = groupDataByDate(data.historic);
      setData(groupedData);
      setBankHours(data.bankHours);
    }
    fetchHistoric();
  }, [currentMonth, userId, user.id]);

  function getCurrentMonth() {
    const currentDate = new Date();
    return currentDate.getMonth() + 1;
  }

  function groupDataByDate(data) {
    const grouped = data.reduce((acc, item) => {
      const date = new Date(item.createdAt);
      const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(item.hour);
      return acc;
    }, {});

    const rows = [];
    const { start, end } = user.hour || { start: '', end: '' };

    Object.entries(grouped).forEach(([date, markings]) => {
      let needsJustification = false;
      const validatedMarkings = markings.map(marking => {
        const validation = validateMarking(marking, start, end);
        if (!validation.isValid) {
          needsJustification = true;
        }
        return validation;
      });

      if (markings.length > 4) {
        needsJustification = true;
      }

      validatedMarkings.sort((a, b) => a.hour.localeCompare(b.hour));
      for (let i = 0; i < validatedMarkings.length; i += 4) {
        rows.push({
          key: `${date}-${i}`,
          date,
          marking1: validatedMarkings[i] || { hour: '', isValid: true },
          marking2: validatedMarkings[i + 1] || { hour: '', isValid: true },
          marking3: validatedMarkings[i + 2] || { hour: '', isValid: true },
          marking4: validatedMarkings[i + 3] || { hour: '', isValid: true },
          needsJustification,
        });
      }
    });

    return rows;
  }

  function validateMarking(marking, start, end) {
    if (!marking) return { hour: '', isValid: true };
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
    const [markHour, markMinute] = marking.split(':').map(Number);

    const isValid =
      (markHour > startHour || (markHour === startHour && markMinute >= startMinute)) &&
      (markHour < endHour || (markHour === endHour && markMinute <= endMinute));

    return { hour: marking, isValid };
  }

  const items = months.map((month) => ({
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
      title: 'Marcação 1',
      dataIndex: 'marking1',
      key: 'marking1',
      render: (marking) => (
        <span style={{ color: marking.isValid ? 'black' : 'red' }}>{marking.hour}</span>
      ),
    },
    {
      title: 'Marcação 2',
      dataIndex: 'marking2',
      key: 'marking2',
      render: (marking) => (
        <span style={{ color: marking.isValid ? 'black' : 'red' }}>{marking.hour}</span>
      ),
    },
    {
      title: 'Marcação 3',
      dataIndex: 'marking3',
      key: 'marking3',
      render: (marking) => (
        <span style={{ color: marking.isValid ? 'black' : 'red' }}>{marking.hour}</span>
      ),
    },
    {
      title: 'Marcação 4',
      dataIndex: 'marking4',
      key: 'marking4',
      render: (marking) => (
        <span style={{ color: marking.isValid ? 'black' : 'red' }}>{marking.hour}</span>
      ),
    },
    {
      title: 'Ocorrência',
      key: 'occurrence',
      render: (_, record) => (
        record.marking1.isValid && record.marking2.isValid && record.marking3.isValid && record.marking4.isValid ? null : (
          <Button
            type='primary'
            danger
            onClick={() => {
              setInvalidMarking(record);
              setShowJustify(true);
            }}
          >
            Justificar
          </Button>
        )
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
              <p style={{ marginTop: '10px' }}>{user && user.Role ? user.Role.name : ''}</p>
            </Col>
            <Col>
              <h3>Escala</h3>
              <Tooltip placement="bottom" title={user && user.hour ? "Com " + user.hour.lunchTime + " hora de almoço" : ''}><p style={{ marginTop: '10px' }}>{user && user.hour ? user.hour.start + " às " + user.hour.end : ''}</p></Tooltip>
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
              options={items}
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
        {showJustify && <ModalJustify
          open={showJustify}
          close={() => setShowJustify(false)}
          record={invalidMarking}
        />}
      </div>
    </DefaultPage>
  );
}
