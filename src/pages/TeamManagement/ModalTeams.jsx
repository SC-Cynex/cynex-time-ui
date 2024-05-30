import React, { useRef, useState } from 'react';
import { Input, Modal, message as antdMessage } from "antd";
import actions from './actions';

export default function ModalTeams({ open, close, setRefresh }) {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [enable, setEnable] = useState(false);
    const [message, setMessage] = useState('');


    const handleCancel = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
        close();
    };

    const handleOk = async () => {
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const name = formData.get('name');

            try {
                setRefresh(false);
                await actions.setTeamRegister(name, setMessage, setStatus, setEnable, setIsLoading);
                setRefresh(true);
                antdMessage.success("Registro adicionado com sucesso!");
                handleCancel();
            } catch (error) {
                antdMessage.error("Erro ao registrar equipe");
            }
        }
    };



    return (
        <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            title="Registrar"
            okText="Adicionar"
            cancelText="Cancelar"
            confirmLoading={isLoading}
        >
            <form ref={formRef}>
                <div className="form-item">
                    <label htmlFor="name">Equipe</label>
                    <Input id="name" name="name" size="large" required />
                </div>
            </form>
        </Modal>
    );
}
