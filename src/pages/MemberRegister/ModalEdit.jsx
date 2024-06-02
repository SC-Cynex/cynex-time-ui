import React, { useState, useEffect } from 'react';
import { Form, Input, Modal, Select } from "antd";
import actions from './actions';

export default function ModalEdit({ open, close, userId, setRefresh, message, status, enable }) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [hours, setHours] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        actions.getHourRegister().then((data) => {
            setHours(data);
        });

        actions.getRoleRegister().then((data) => {
            setRoles(data);
        });
    }, []);

    const setFormValues = (data) => {
        form.setFieldsValue({
            name: data.name,
            hour: `${data.hour.start} - ${data.hour.end}`,
            role: data.Role.name
        });
    };

    useEffect(() => {
        actions.getUserById(userId).then((data) => {
            setFormValues(data);
        });
    }, [form]);

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
                    <Input size="large" disabled />
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
                    <Select
                        size="large"
                        options={roles.map(item => ({ label: item.name, value: item.id }))}
                    />
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
                    <Select
                        size="large"
                        options={hours.map(item => ({ label: `${item.start} às ${item.end}`, value: item.id }))}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}
