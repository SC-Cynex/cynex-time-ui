import React, { useState } from "react";
import styles from './SiderPage.module.css';
import { Layout, Menu, Button, Divider } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GiStopwatch } from "react-icons/gi";
import { LuHistory } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";

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
  getItem("Registrar Ponto", "/point-register", <GiStopwatch size={20}/>),
  getItem("Histórico", "/historic", <LuHistory size={20}/>),
  getItem("Registrar Membro", "/member-register", <IoDocumentTextOutline size={20}/>),
  getItem("Equipe", "/team", <FaUserGroup size={20}/>),
  getItem("Configurações", "/settings", <IoSettingsOutline size={20}/>)
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
