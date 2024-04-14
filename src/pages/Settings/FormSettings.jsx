import React from 'react';
import { Form, Button, Input, Select, Col, Row } from "antd";

export default function FormSettings() {
    return (
        <Form action="" method="post" layout='vertical' style={{width: '850px'}}>
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
            <Form.Item>
                <Button type='primary' htmlType="submit" block size='large'>Salvar</Button>
            </Form.Item>
        </Form>
    )
}
