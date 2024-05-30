import React from 'react';
import { Form, Button, Input, Col, Row } from "antd";
import styles from "./Register.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

export default function FormRegister() {
    const [form] = Form.useForm();

    const handleSave = (values) => {
        console.log('Form values:', values);
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
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size="large" />
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
                                    message: "Email inválido!",
                                },
                            ]}
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="hour"
                            label="Horário"
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="password"
                            label="Senha"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input.Password size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="role"
                            label="Cargo"
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="department"
                            label="Departamento"
                        >
                            <Input size="large" />
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
                            <Input size="large" />
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
                            <Input size="large" />
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
                                    pattern: /^[0-9]{5}-[0-9]{3}$/,
                                    message: 'CEP inválido!',
                                }
                            ]}
                        >
                            <Input size="large" />
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
                            <Input size="large" />
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
                            <Input size="large" />
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
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                </Row>
            </div>
            <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">Registrar</Button>
            </Form.Item>
        </Form>
    );
}
