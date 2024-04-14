import React from "react";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { Form, Button, Input } from "antd";
import styles from "./Login.module.css";
import stylesAuth from "../Auth.module.css";
import actions from "./actions.js";

export default function Login() {
  return (
    <div>
      <section className={stylesAuth.sectionLeft}>
        <div className={stylesAuth.divLeftTitle}>
          <h1 className={stylesAuth.title}>CynexTime</h1>
          <h4 className={stylesAuth.subTitle}>Time is Work</h4>
        </div>
        <h1 className={styles.titleForms}>Login</h1>
        <Form
          action=""
          method="post"
          style={{ width: "300px" }}
          onFinish={actions.signIn}
          className={styles.form}
        >
          <Form.Item
            name={"email"}
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
            <Input
              placeholder={"Email"}
              prefix={<MdEmail className={stylesAuth.iconInput} />}
              size={"large"}
            />
          </Form.Item>
          <Form.Item
            name={"password"}
            rules={[
              {
                required: true,
                message: "",
                min: 6,
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder={"Senha"}
              prefix={<FaKey className={stylesAuth.iconInput} />}
              size={"large"}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Entrar
            </Button>
          </Form.Item>
          <a href="/redefine-password" style={{ textAlign: "center" }}>
            Esqueceu sua senha?
          </a>
        </Form>
      </section>
      <section className={stylesAuth.sectionRight}>
        <div className={stylesAuth.divTitle}>
          <h1 className={stylesAuth.title}>CynexTime</h1>
          <h4 className={stylesAuth.subTitle}>Time is Work</h4>
        </div>
      </section>
    </div>
  );
}
