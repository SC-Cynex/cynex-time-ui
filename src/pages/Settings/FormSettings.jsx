import React from 'react';
import { Form, Button, Input, Select, Col, Row, Divider } from "antd";
import styles from "./FormSettings.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

export default function FormSettings() {
    return (
        <Form action="" method="post" layout='vertical' style={{ width: '70vw' }}>
            <div className={styles.general}>
                <div className={styles.formTitle}>
                    <FaUserAlt size={30} color='#001529' />
                    <h2>Dados Gerais</h2>
                </div>
                <Divider className={styles.divider} />
                <Row align="middle" gutter={20} >
                    <Col span={12}>
                        <Form.Item
                            name={'nome'}
                            label={'Nome'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size={'large'} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name={'email'}
                            label={'Email'}
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: "Campo não preenchido!",
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input size={'large'} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="horario"
                            label={'Horário'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                },
                            ]}
                        >
                            <Select size={'large'} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name={'password'}
                            label={'Senha'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                    min: 6
                                }
                            ]}
                        >
                            <Input.Password size={'large'} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name="cargo"
                            label={'Cargo'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                },
                            ]}
                        >
                            <Select size={'large'} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="departamento"
                            label={'Departamento'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                },
                            ]}
                        >
                            <Select size={'large'} />
                        </Form.Item>
                    </Col>
                </Row>
            </div>
            <div className={styles.general}>
                <div className={styles.formTitle}>
                    <FaLocationDot size={30} color='#001529' />
                    <h2>Endereço</h2>
                </div>
                <Divider className={styles.divider} />

                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name={'cidade'}
                            label={'Cidade'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size={'large'} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name={'estado'}
                            label={'Estado'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size={'large'} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name={'cep'}
                            label={'CEP'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size={'large'} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name={'rua'}
                            label={'Rua'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size={'large'} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="middle" gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            name={'bairro'}
                            label={'Bairro'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size={'large'} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name={'numero'}
                            label={'Número'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo não preenchido!',
                                }
                            ]}
                        >
                            <Input size={'large'} />
                        </Form.Item>
                    </Col>
                </Row>
            </div>
            <Form.Item>
                <Button type='primary' htmlType="submit" block size='large'>Salvar</Button>
            </Form.Item>
        </Form>
    )
}
