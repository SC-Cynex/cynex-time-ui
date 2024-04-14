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
          <div>{children}</div>
        </Layout>
      </Layout>
    </Layout>
  );
}
