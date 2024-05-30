import React from 'react';
import { Button, Modal, Row, Col } from 'antd';

const CTModal = ({ open, title, children, btnTitleOk, btnTitleCancel, onOk, onCancel, isLoading }) => {
  return (
    <Modal
      onOk={onOk}
      open={open}
      title={title}
      onCancel={onCancel}
      confirmLoading={isLoading}
      footer={
        <Row justify='center' gutter={20}>
          <Col span={6}>
            <Button block htmlType="submit" type="primary">{btnTitleOk}</Button>
          </Col>
          <Col span={6}>
            <Button block danger onClick={onCancel}>{btnTitleCancel}</Button>
          </Col>
        </Row>
      }
    >
      {children}
    </Modal>
  );
};

export default CTModal;
