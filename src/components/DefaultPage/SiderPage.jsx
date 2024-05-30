import React, { useState } from "react";
import styles from './SiderPage.module.css';
import { Layout, Menu, Button, Divider } from "antd";
import { FaUserCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaUserClock } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";


import { FaUsersCog } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Registrar Ponto", "/point-register", <FaClock size={20}/>),
  getItem("Histórico", "/historic", <FaUserClock size={20}/>),
  getItem("Incluir Membro", "/member-register", <FaUserPlus size={20}/>),
  getItem("Gestão de Equipe", "/team-management", <FaUsersCog size={20}/>),
  getItem("Equipe", "/team", <FaUsers size={20}/>),
  getItem("Registrar Membro", "/register", <FaAddressBook  size={20}/>),
  getItem("Configurações", "/settings", <FaUserCog size={20}/>)
];

const SiderPage = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  return (
    <Sider
      style={{
        position: "fixed",
        height: "100%",
        zIndex: "1000",
      }}
      collapsible
      collapsed={collapsed}
      trigger={null}
    >
      <div className={collapsed ? styles.btn_menu_center : styles.btn_menu_start}>
        <Button
          type="text"
          icon={<FiMenu size={20}/>}
          onClick={() => setCollapsed(!collapsed)}
          style={{color: 'white'}}
        />
        {!collapsed && <span className={styles.menu}>Menu</span>}
      </div>
      <Divider className={styles.divider}/>
      <Menu
        onClick={({ key }) => {
            navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
        items={items}
        theme={"dark"}
      />
    </Sider>
  );
};

export default SiderPage;
