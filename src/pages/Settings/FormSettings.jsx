import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Col, Row, Divider } from "antd";
import styles from "./FormSettings.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import actions_settings from './actions_settings';

export default function FormSettings() {
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        actions_settings.getUserById().then((data) => {
            form.setFieldsValue(data);
            console.log(data);
        });
    }, [form]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        actions_settings.getUserById().then((data) => {
            form.setFieldsValue(data);
        });
    };

    const handleSave = (values) => {
        console.log('Form values:', values);
        setIsEditing(false);
    };

    return (
        <Form
            form={form}
            action=""
            method="post"
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
                                    message: 'Campo não preenchido!',
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
                                    message: "Campo não preenchido!",
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input size="large" disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="hour"
                            label="Horário"
                        >
                            <Input size="large" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="password"
                            label="Senha"
                        >
                            <Input.Password size="large" disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="role"
                            label="Cargo"
                        >
                            <Input size="large" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="department"
                            label="Departamento"
                        >
                            <Input size="large" disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <div className={styles.formTitle}>
                    <FaLocationDot size={30} color='#193f6d' />
                    <h2 style={{ color: '#193f6d' }}>Endereço</h2>
                </div>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="cidade"
                            label="Cidade"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="estado"
                            label="Estado"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
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
                            name="cep"
                            label="CEP"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="rua"
                            label="Rua"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
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
                            name="bairro"
                            label="Bairro"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size="large" disabled={!isEditing} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="numero"
                            label="Número"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
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
                            <Button block size="large" onClick={handleCancel}>Cancelar</Button>
                        </Col>
                    </Row>
                ) : (
                    <Button type="primary" block size="large" onClick={handleEdit}>Alterar Cadastro</Button>
                )}
            </Form.Item>
        </Form>
    );
}
