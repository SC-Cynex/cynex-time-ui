// CTModal.js
import React from 'react';
import { Button, Modal, Row, Col } from 'antd';

const CTModal = ({ open, title, children, btnTitleOk, btnTitleCancel, onOk, onCancel }) => {
  return (
    <Modal
      open={open}
      title={title}
      onCancel={onCancel}
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
