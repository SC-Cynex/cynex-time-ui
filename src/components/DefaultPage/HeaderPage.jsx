import React from "react";
import { Layout } from "antd";
const { Header } = Layout;
import styles from "./HeaderPage.module.css";
import { FaBell } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Divider } from "antd";
import { Dropdown } from 'antd';
import { CiLogout } from "react-icons/ci";

const user = [
  {
    key: '1',
    label: (
      <div className={styles.logout}>
        <CiLogout /><span>Sair</span>
      </div>
    ),
  }
];

export default function HeaderPage() {
  return (
    <Header className={styles.header}>
        <div className={styles.icons}>
          <Dropdown
            menu={{
              items: user,
            }}
            trigger={['click']}
            placement="bottomRight"
            className={styles.user}
          >
            <FaUserAlt size={20}/>
          </Dropdown>
          <Divider type="vertical" className={styles.divider} />
          <FaBell size={20}/>
        </div>
        <h1>Cynextime</h1>
    </Header>
  );
}
