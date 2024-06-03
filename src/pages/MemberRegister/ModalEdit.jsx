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
        const hour = hours.find(h => `${h.start} às ${h.end}` === `${data.hour.start} às ${data.hour.end}`);
        const role = roles.find(r => r.name === data.Role.name);

        form.setFieldsValue({
            name: data.name,
            hour: hour ? hour.id : null,
            role: role ? role.id : null
        });
    };

    useEffect(() => {
        if (userId) {
            actions.getUserById(userId).then((data) => {
                setFormValues(data);
            });
        }
    }, [userId, hours, roles]);

    const handleCancel = () => {
        form.resetFields();
        close();
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();

            setIsLoading(true);
            setRefresh(false);
            await actions.updateTeamUser(userId, values, message, status, enable, setIsLoading);
            setRefresh(true);
            setIsLoading(false);
            handleCancel();
        } catch (error) {
            console.error("Erro ao atualizar usuário", error);
        }
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
