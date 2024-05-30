import React, { useRef, useState } from 'react';
import { Form, Input, Select, Modal } from "antd";
import actions from './actions';

const { Option } = Select;

const roleOptions = [
  { value: 'EMPLOYEE', label: 'Colaborador' },
  { value: 'MANAGER', label: 'Gestor' },
  { value: 'ADMIN', label: 'Admin' }
];

export default function ModalPositions({ open, close, setRefresh, message, status, enable }) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = () => {
    form.resetFields();
    close();
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const { name, accessLevel } = values;

      setIsLoading(true);
      setRefresh(false);
      await actions.setRoleRegister(name, accessLevel, message, status, enable, setIsLoading);
      setRefresh(true);
      setIsLoading(false);
      handleCancel();
    } catch (error) {
      console.error("Erro ao registrar cargo", error);
    }
  };

  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      title={"Registrar"}
      okText={"Adicionar"}
      cancelText={"Cancelar"}
      confirmLoading={isLoading}
    >
      <Form
        form={form}
        layout='vertical'
      >
        <Form.Item
          name={'name'}
          label={'Cargo'}
          rules={[
            {
              required: true,
              message: 'Campo não preenchido!',
            }
          ]}
        >
          <Input size={'large'} />
        </Form.Item>
        <Form.Item
          name={'accessLevel'}
          label={'Nível de Acesso'}
          rules={[
            {
              required: true,
              message: 'Campo não preenchido!',
            }
          ]}
        >
          <Select size={'large'} placeholder="Selecione um nível de acesso">
            {roleOptions.map(option => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
