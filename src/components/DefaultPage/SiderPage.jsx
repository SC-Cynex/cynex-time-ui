import React, { useState } from "react";
import styles from './SiderPage.module.css';
import { Layout, Menu, Button, Divider } from "antd";
import { FaUserCog, FaUserClock, FaClock, FaAddressBook, FaUsers, FaUsersCog, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

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
  getItem("Equipe", "", <FaUsers size={20}/>, [
    getItem("Equipe", "/team", <FaUsers size={20}/>),
    getItem("Incluir Membro", "/member-register", <FaUserPlus size={20}/>),
    getItem("Gestão de Equipe", "/team-management", <FaUsersCog size={20}/>),
  ]),
  getItem("Registrar Membro", "/register", <FaAddressBook size={20}/>),
  getItem("Configurações", "/settings", <FaUserCog size={20}/>)
];

const SiderPage = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    navigate(key);
  };

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
        onClick={({ key }) => handleMenuClick(key)}
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
        items={items.map(item => ({
          ...item,
          onTitleClick: () => handleMenuClick(item.key),
        }))}
        theme={"dark"}
      />
    </Sider>
  );
};

export default SiderPage;
