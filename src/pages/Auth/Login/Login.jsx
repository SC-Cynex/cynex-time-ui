import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { Form, Button, Input } from "antd";
import styles from "./Login.module.css";
import actions from './actions.js';

export default function Login() {
  return (
    <div>
      <section className={styles.sectionLeft}>
        <div className={styles.divLeftTitle}>
          <h1 className={styles.title}>CynexTime</h1>
          <h4 className={styles.subTitle}>Time is Work</h4>
        </div>
        <h1 id={styles.h1Login}>Login</h1>
        <Form action="" method="post" style={{ width: '300px' }} onFinish={actions.signIn} className={styles.form}>
          <Form.Item
            name={'email'}
            rules={[
              {
                required: true,
                type: "email",
                message: "",
                whitespace: true,
              },
            ]}
            hasFeedback
          >
            <Input placeholder={'Email'} prefix={<MdEmail className={styles.iconInput} />} size={'large'} />
          </Form.Item>
          <Form.Item
            name={'password'}
            rules={[
              {
                required: true,
                message: '',
                min: 6
              }
            ]}
            hasFeedback

          >
            <Input.Password placeholder={'Senha'} prefix={<FaKey className={styles.iconInput} />} size={'large'} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType="submit" block size='large'>Entrar</Button>
          </Form.Item>
          <a href="/redifine-password" style={{ textAlign: 'center' }}>Esqueceu sua senha?</a>
        </Form>
      </section>
      <section className={styles.sectionRight}>
        <div className={styles.divTitle}>
          <h1 className={styles.title}>CynexTime</h1>
          <h4 className={styles.subTitle}>Time is Work</h4>
        </div>
      </section>
    </div>
  )
}
