import React from "react";
import { Alert, Space } from "antd";

const CTMessage = ({ title, message, type, enable }) => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert
      style={{ fontSize: "16px" }}
      message={title}
      description={message}
      type={type}
      showIcon
      closable
      onClose={() => {
        enable(false);
      }}
    />
  </Space>
);
export default CTMessage;
