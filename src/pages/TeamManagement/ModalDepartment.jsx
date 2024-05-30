import React, { useState } from 'react';
import { Form, Input, Modal } from "antd";
import actions from './actions';

export default function ModalDepartment({ open, close, setRefresh, message, status, enable }) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = () => {
        form.resetFields();
        close();
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const { name } = values;

            setIsLoading(true);
            setRefresh(false);
            await actions.setDepartmentsRegister(name, message, status, enable, setIsLoading);
            setRefresh(true);
            setIsLoading(false);
            handleCancel();
        } catch (error) {
            console.error("Erro ao registrar equipe", error);
        }
    };

    return (
        <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            title="Registrar"
            okText="Adicionar"
            cancelText="Cancelar"
            confirmLoading={isLoading}
        >
            <Form
                form={form}
                layout='vertical'
            >
                <Form.Item
                    name="name"
                    label="Departamento"
                    rules={[
                        {
                            required: true,
                            message: 'Campo não preenchido!',
                        }
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
            </Form>
        </Modal>
    );
}
