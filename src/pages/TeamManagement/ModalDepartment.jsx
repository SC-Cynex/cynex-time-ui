import React, { useState, useEffect } from 'react';
import { Form, Input, Modal } from "antd";
import actions from './actions';

export default function ModalDepartment({ open, close, setRefresh, message, status, enable, record }) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (record) {
            form.setFieldsValue({
                name: record.name,
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
            const { name } = values;

            setIsLoading(true);
            setRefresh(false);
            if (record) {
                await actions.updateDepartmentRegister(record.id, name, message, status, enable, setIsLoading);
            } else {
                await actions.setDepartmentsRegister(name, message, status, enable, setIsLoading);
            }
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
            title={record ? "Editar Departamento" : "Registrar Departamento"}
            okText={record ? "Salvar" : "Adicionar"}
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
