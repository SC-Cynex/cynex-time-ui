import React, { useEffect, useState } from 'react';
import { Form, Select, Modal } from "antd";
import actions from './actions';

export default function ModalRegister({ open, close, setRefresh, message, status, enable }) {
    const [listUser, setListUser] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();
    const teamId = localStorage.getItem("team");

    useEffect(() => {
        fetch("http://localhost:3000/user/team/null")
            .then((res) => res.json())
            .then((data) => setListUser(data));
    }, []);

    const handleCancel = () => {
        form.resetFields();
        close();
    };

    const handleOk = async () => {
        try {
            setIsLoading(true);
            setRefresh(false);
            await actions.addTeamUser(selectedUserId, teamId, message, status, enable, setIsLoading);
            setRefresh(true);
            setIsLoading(false);
            handleCancel();
        } catch (error) {
            console.error("Erro ao registrar usuário", error);
            setIsLoading(false);
        }
    };

    const handleUserChange = (value) => {
        setSelectedUserId(value);
    };

    return (
        <div>
            <Modal
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                title="Adicionar usuário a equipe"
                okText="Adicionar"
                cancelText="Cancelar"
                confirmLoading={isLoading}
            >
                <Form form={form} layout='vertical'>
                    <Form.Item
                        name={'users'}
                        label={'Usuários'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            }
                        ]}
                    >
                        <Select size={'large'}
                            options={
                                listUser.map((user) => (
                                    { label: user.name + ' - ' + user.email, value: user.id }
                                ))
                            }
                            onChange={handleUserChange}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
