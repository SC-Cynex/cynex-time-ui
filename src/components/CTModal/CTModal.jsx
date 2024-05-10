import { Button, Modal, Row, Col } from 'antd';
const CTModal = ({ open, title, children, btnTitleOk, btnTitleCancel, onOk, onCancel }) => {
  return (
    <>
      <Modal
        open={open}
        title={title}
        onOk={onOk}
        onCancel={onCancel}
        footer={() => (
          <>
            <Row justify='center' gutter={20}>
              <Col span={6}>
                <Button block>{btnTitleOk}</Button>
              </Col>
              <Col span={6}>
                <Button block danger>{btnTitleCancel}</Button>
              </Col>
            </Row>
          </>
        )}
      >
        {children}
      </Modal>
    </>
  );
};
export default CTModal;