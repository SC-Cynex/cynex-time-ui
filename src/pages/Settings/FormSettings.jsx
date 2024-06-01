import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Col, Row } from "antd";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import actions_settings from './actions_settings';
import styles from "./FormSettings.module.css";

export default function FormSettings() {
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);

    const setFormValues = (data) => {
        form.setFieldsValue({
            name: data.name,
            email: data.email,
            hour: `${data.hour.start} - ${data.hour.end}`,
            password: '',
            role: data.Role.name,
            department: data.Department.name,
            city: data.address.city,
            state: data.address.state,
            zipCode: data.address.zipCode,
            street: data.address.street,
            neighborhood: data.address.neighborhood,
            number: data.address.number
        });
    };

    useEffect(() => {
        actions_settings.getUserById().then((data) => {
            setFormValues(data);
        });
    }, [form]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        actions_settings.getUserById().then((data) => {
            setFormValues(data);
        });
    };

    const handleSave = (values) => {
        setIsEditing(false);
    };

    return (
        <Form
            form={form}
            layout='vertical'
            style={{ width: '70vw' }}
            onFinish={handleSave}
        >
            <div className={styles.general}>
                <div className={styles.formTitle}>
                    <FaUserAlt size={30} color='#193f6d' />
                    <h2 style={{ color: '#193f6d' }}>Dados Gerais</h2>
                </div>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Nome"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo é obrigatório!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: "Campo é obrigatório!",
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input size="large" disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={8}>
                        <Form.Item
                            name="hour"
                            label="Horário de Trabalho"
                        >
                            <Input size="large" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="role"
                            label="Cargo"
                        >
                            <Input size="large" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            name="department"
                            label="Departamento"
                        >
                            <Input size="large" disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <div className={styles.formTitle}>
                    <FaMapMarkerAlt size={30} color='#193f6d' />
                    <h2 style={{ color: '#193f6d' }}>Endereço</h2>
                </div>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="city"
                            label="Cidade"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo é obrigatório!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="state"
                            label="Estado"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo é obrigatório!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="zipCode"
                            label="CEP"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo é obrigatório!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="street"
                            label="Rua"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo é obrigatório!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="neighborhood"
                            label="Bairro"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo é obrigatório!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="number"
                            label="Número"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo é obrigatório!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                </Row>
            </div>
            <Form.Item>
                {isEditing ? (
                    <Row gutter={20}>
                        <Col span={12}>
                            <Button type="primary" htmlType="submit" block size="large">Salvar</Button>
                        </Col>
                        <Col span={12}>
                            <Button block size="large" onClick={handleCancel}>Cancel</Button>
                        </Col>
                    </Row>
                ) : (
                    <Button type="primary" block size="large" onClick={handleEdit}>Editar</Button>
                )}
            </Form.Item>
        </Form>
    );
}
