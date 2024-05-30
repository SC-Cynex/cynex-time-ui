import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Select, Col, Row } from "antd";
import styles from "./Register.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import action_register from './action_register';

export default function FormRegister() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [hours, setHours] = useState([]);
    const [roles, setRoles] = useState([]);
    const [addressFieldsDisabled, setAddressFieldsDisabled] = useState(true);

    useEffect(() => {
        action_register.getHourRegister().then((data) => {
            setHours(data);
        })

        action_register.getRoleRegister().then((data) => {
            setRoles(data);
        })
    }, [])

    const onSearch = async (value) => {
        try {
            setLoading(true);
            const addressData = await action_register.fetchAddress(value);
            form.setFieldsValue({
                city: addressData.city,
                state: addressData.state,
                neighborhood: addressData.neighborhood,
                street: addressData.street,
            });
            setAddressFieldsDisabled(false);
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (values) => {
        try {
            action_register.registerUser(values).then((data) => {
                console.log(data);
            });
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
        }
    };

    return (
        <Form
            form={form}
            layout='vertical'
            style={{ width: '70vw' }}
            onFinish={handleRegister}
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
                            hasFeedback
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
                            hasFeedback
                        >
                            <Input size="large" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="hour"
                            label="Horário de Trabalho"
                            rules={[
                                {
                                    required: true,
                                    message: 'Escolha um horário de trabalho!'
                                }
                            ]}
                            hasFeedback
                        >
                            <Select size="large"
                                options={
                                    hours.map(item => (
                                        {
                                            label: item.start + ' às ' + item.end,
                                            value: item.id
                                        }
                                    ))
                                }
                            />
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
                                },
                                {
                                    min: 6,
                                    message: 'Mínimo 6 caracteres!',
                                },
                            ]}
                            hasFeedback
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
                            hasFeedback
                        >
                            <Select size="large"
                                options={
                                    roles.map(item => (
                                        {
                                            label: item.name,
                                            value: item.id
                                        }
                                    ))
                                }
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="department"
                            label="Departamento"
                            hasFeedback
                        >
                            <Select size="large" />
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
                            name="cep"
                            label="CEP"
                            rules={[
                                {
                                    required: true,
                                    min: 8,
                                    message: 'Por favor, insira o CEP válido!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Search
                                allowClear={() => {
                                    se
                                }}
                                onSearch={onSearch}
                                loading={loading}
                                size='large'
                            />
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="state"
                            label="Estado"
                            rules={[
                                {
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                            hasFeedback
                        >
                            <Input size="large" disabled={addressFieldsDisabled} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="city"
                            label="Cidade"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                            hasFeedback
                        >
                            <Input size="large" disabled={addressFieldsDisabled} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="street"
                            label="Rua"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                            hasFeedback
                        >
                            <Input size="large" disabled={addressFieldsDisabled} />
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
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                            hasFeedback
                        >
                            <Input size="large" disabled={addressFieldsDisabled} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="number"
                            label="Número"
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                            hasFeedback
                        >
                            <Input size="large" disabled={addressFieldsDisabled} />
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
