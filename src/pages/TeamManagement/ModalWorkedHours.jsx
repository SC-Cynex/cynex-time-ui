import React, { useState } from 'react';
import { Form, Modal, TimePicker } from "antd";
import actions from './actions';

export default function ModalWorkedHours({ open, close, setRefresh, message, status, enable }) {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

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
            await actions.setHourRegister(startTimeFormatted, endTimeFormatted, lunchTimeFormatted, message, status, enable, setIsLoading);
            setRefresh(true);
            setIsLoading(false);
            handleCancel();
        } catch (error) {
            console.error("Erro ao registrar horário", error);
        }
    };

    return (
        <div>
            <Modal
    open={open}
    onOk={handleOk}
    onCancel={handleCancel}
    title="Registrar"
    okText="Adicionar"
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
            <TimePicker size="large" style={{ width: '100%' }} />
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
            <TimePicker size="large" style={{ width: '100%' }} />
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
            <TimePicker size="large" style={{ width: '100%' }} />
        </Form.Item>
    </Form>
</Modal>

        </div>
    )
}