import React, { useState, useEffect } from 'react';
import { Form, Modal, TimePicker } from "antd";
import moment from 'moment';
import actions from './actions';

export default function ModalWorkedHours({ open, close, setRefresh, message, status, enable, record }) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (record) {
            form.setFieldsValue({
                start: moment(record.start, 'HH:mm:ss'),
                end: moment(record.end, 'HH:mm:ss'),
                lunchTime: moment(record.lunchTime, 'HH:mm:ss')
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
            const { start, end, lunchTime } = values;

            const formatTime = time => time.format('HH:mm:ss');

            const startTimeFormatted = formatTime(start);
            const endTimeFormatted = formatTime(end);
            const lunchTimeFormatted = formatTime(lunchTime);

            setIsLoading(true);
            setRefresh(false);
            if (record) {
                await actions.updateHourRegister(record.id, startTimeFormatted, endTimeFormatted, lunchTimeFormatted, message, status, enable, setIsLoading);
            } else {
                await actions.setHourRegister(startTimeFormatted, endTimeFormatted, lunchTimeFormatted, message, status, enable, setIsLoading);
            }
            setRefresh(true);
            setIsLoading(false);
            handleCancel();
        } catch (error) {
            console.error("Erro ao registrar horário", error);
            setIsLoading(false);
        }
    };

    const handleOpenChange = (open, field) => {
        if (open) {
            form.setFieldsValue({ [field]: null });
        }
    };

    return (
        <div>
            <Modal
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                title={record ? "Editar Horário" : "Registrar Horário"}
                okText={record ? "Salvar" : "Adicionar"}
                cancelText="Cancelar"
                confirmLoading={isLoading}
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
                        <TimePicker
                            size="large"
                            style={{ width: '100%' }}
                            format="HH:mm:ss"
                            onOpenChange={(open) => handleOpenChange(open, 'start')}
                        />
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
                        <TimePicker
                            size="large"
                            style={{ width: '100%' }}
                            format="HH:mm:ss"
                            onOpenChange={(open) => handleOpenChange(open, 'end')}
                        />
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
                        <TimePicker
                            size="large"
                            style={{ width: '100%' }}
                            format="HH:mm:ss"
                            onOpenChange={(open) => handleOpenChange(open, 'lunchTime')}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
