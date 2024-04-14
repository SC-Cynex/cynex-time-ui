import React from "react";
import { MdEmail } from "react-icons/md";
import { Form, Button, Input } from "antd";
import styles from "./RedefinePassword.module.css";
import stylesAuth from "../Auth.module.css";
import actions from "./actions.js";
import { RiMailSendLine } from "react-icons/ri";
export default function RedefinePassword() {
  return (
    <div>
      <section className={stylesAuth.sectionLeft}>
        <div className={styles.divTitleForms}>
          <RiMailSendLine size={120} color="3F8FDA" style={{marginBottom: "10px"}}/>
          <h1 className={styles.titleForms}>Redefinir Senha</h1>
          <p className={styles.subTitleForms}>
            Informe seu e-mail para qual deseja redefinir a senha.
          </p>
        </div>
        <Form
          action=""
          method="post"
          style={{ width: "300px" }}
          onFinish={actions.redefinePassword}
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
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" >Entrar</Button>
          </Form.Item>
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
