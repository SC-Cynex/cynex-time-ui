import React, { useState, useEffect } from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Button, Row, Col, Form } from "antd";
import  styles  from './PointRegister.module.css';
import actions from "./actions";

export default function PointRegister() {
  const [hours, setHours] = useState(actions.currentHours());
  const [date, setDate] = useState(actions.currentDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHours(actions.currentHours());
      setDate(actions.currentDate());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
              <Button block size="large">Registrar</Button>
            </Form.Item>
          </Col>
        </Row>
      </div>
    </DefaultPage>
  );
}
