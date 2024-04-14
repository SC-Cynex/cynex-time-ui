import React from 'react';
import { Alert, Space } from 'antd';
import { CloseSquareFilled } from '@ant-design/icons';

const Message = ({title, message, type}) => (
  <Space
    direction="vertical"
    style={{
      position: 'fixed',
      bottom: '10px'
    }}
  >
    <Alert
      message={title}
      description={message}
      type={type}
      showIcon
      closable
    />
  </Space>
);
export default Message;