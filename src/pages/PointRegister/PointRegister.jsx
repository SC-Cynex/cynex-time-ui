import React, { useState, useEffect } from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Button, Row, Col, Form, Space } from "antd";
import styles from './PointRegister.module.css';
import actions from "./actions";
import { useLocation } from "react-router";

export default function PointRegister() {
  const [hours, setHours] = useState(actions.currentHours());
  const [date, setDate] = useState(actions.currentDate());
  const [listPoint, setListPoint] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setListPoint(actions.getPointRegister());
    const intervalId = setInterval(() => {
      setHours(actions.currentHours());
      setDate(actions.currentDate());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [listPoint, location.key]);

  return (
    <DefaultPage>
      <div className={styles.body}>
        <Row justify={'center'}>
          <Col>
            <h1 className={styles.hours}>{hours}</h1>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col>
            <p className={styles.date}>{date}</p>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col span={4}>
            <Form.Item>
              <Button className={styles.btnRegister} onClick={() => { actions.setPointRegister(hours, date) }} type="primary" block size="large">Registrar</Button>
            </Form.Item>
          </Col>
        </Row>
        <div className={styles.tablePoint}>
          <Row justify={'center'}>
            <span>Últimas Marcações</span>
          </Row>
          <Row justify={'center'}>
            <Space size={[80]}>
            {
                Array.isArray(listPoint) && listPoint.map(item => (
                  <div className={styles.listPoint}>
                    <p>{item.horas}</p>
                    <p>{item.data}</p>
                  </div>
                ))
            }
            </Space>
          </Row>
        </div>
      </div>
    </DefaultPage>
  );
}
