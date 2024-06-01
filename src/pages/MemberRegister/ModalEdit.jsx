import React, { useState } from 'react';
import { Form, Input, Modal, Select } from "antd";

export default function ModalEdit({ open, close }) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = () => {
        form.resetFields();
        close();
    };

    const handleOk = async () => {
        
    };

    return (
        <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            title="Editar"
            okText="Salvar"
            cancelText="Cancelar"
            confirmLoading={isLoading}
        >
            <Form
                form={form}
                layout='vertical'
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Campo não preenchido!',
                        }
                    ]}
                >
                    <Input size="large" disabled/>
                </Form.Item>
                <Form.Item
                    name="role"
                    label="Cargo"
                    rules={[
                        {
                            required: true,
                            message: 'Campo não preenchido!',
                        }
                    ]}
                >
                    <Select size="large" />
                </Form.Item>
                <Form.Item
                    name="hour"
                    label="Horário de trabalho"
                    rules={[
                        {
                            required: true,
                            message: 'Campo não preenchido!',
                        }
                    ]}
                >
                    <Select size="large" />
                </Form.Item>
            </Form>
        </Modal>
    );
}
