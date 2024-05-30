import React from 'react';
import { Form, Input, Select, Button, Modal } from "antd";

const { Option } = Select;

const roleOptions = [
  { value: 'EMPLOYEE', label: 'Colaborador' },
  { value: 'MANAGER', label: 'Gestor' },
  { value: 'ADMIN', label: 'Admin' }
];

export default function ModalPositions({ open, close }) {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:3000/role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        // Handle success
        console.log('Success:', response);
        close(); // Close the modal on success
      } else {
        // Handle error
        console.error('Error:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Modal
      visible={open}
      onCancel={close}
      title={"Registrar"}
      okText={"Adicionar"}
      cancelText={"Cancelar"}
      onOk={() => form.submit()}
    >
      <Form
        form={form}
        layout='vertical'
        onFinish={handleSubmit}
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