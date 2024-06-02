import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Modal } from "antd";
import actions from './actions';

const { Option } = Select;

const roleOptions = [
  { value: 'EMPLOYEE', label: 'Colaborador' },
  { value: 'MANAGER', label: 'Gestor' },
  { value: 'ADMIN', label: 'Admin' }
];

export default function ModalPositions({ open, close, setRefresh, message, status, enable, record }) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        name: record.name,
        accessLevel: record.accessLevel
      });
    } else {
      form.resetFields();
    }
  }, [record, form]);

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
      
      if (record) {
        await actions.updateRoleRegister(record.id, name, accessLevel, message, status, enable, setIsLoading);
      } else {
        await actions.setRoleRegister(name, accessLevel, message, status, enable, setIsLoading);
      }
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
      title={record ? "Editar Cargo" : "Registrar Cargo"}
      okText={record ? "Salvar" : "Adicionar"}
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
