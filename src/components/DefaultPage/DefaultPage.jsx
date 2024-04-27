import React from "react";
import { Layout } from "antd";
import HeaderPage from "./HeaderPage";
import SiderPage from "./SiderPage";

export default function DefaultPage({ children }) {
  return (
    <Layout>
      <SiderPage />
      <Layout>
        <HeaderPage />
        <Layout>
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
}
