import React from 'react';
import { Form, Input, TimePicker } from "antd";
import CTModal from "../../components/CTModal/CTModal";

export default function ModalWorkedHours({ open, close }) {
    const [form] = Form.useForm();
    
    return (
        <div>
            <CTModal
                open={open}
                onCancel={close}
                title={"Registrar"}
                btnTitleOk={"Adicionar"}
                btnTitleCancel={"Cancelar"}
            >
                <Form form={form} layout='vertical'>
                    <Form.Item
                        name={'start'}
                        label={'Horário de Entrada'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            }
                        ]}
                    >
                        <TimePicker  />
                    </Form.Item>
                    <Form.Item
                        name={'end'}
                        label={'Horário de Saída'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            }
                        ]}
                    >
                        <TimePicker  />
                    </Form.Item>
                    <Form.Item
                        name={'lunchTime'}
                        label={'Tempo de Almoço'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            }
                        ]}
                    >
                        <TimePicker  />
                    </Form.Item>
                </Form>
            </CTModal>
        </div>
    )
}