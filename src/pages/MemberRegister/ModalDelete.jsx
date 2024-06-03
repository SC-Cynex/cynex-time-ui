import React, { useState } from 'react';
import { Modal, Row } from "antd";
import actions from './actions';

export default function ModalDelete({ open, close, userId, setRefresh, message, status, enable }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = () => {
        close();
    };

    const handleOk = async () => {
        try {

            setIsLoading(true);
            setRefresh(false);
            await actions.removeUserTeam(userId, message, status, enable, setIsLoading);
            setRefresh(true);
            setIsLoading(false);
            handleCancel();
        } catch (error) {
            console.error("Erro ao remover usuário da equipe", error);
        }
    };

    return (
        <div>
            <Modal
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                title={"Excluir"}
                okText={"Confirmar"}
                cancelText={"Cancelar"}
                confirmLoading={isLoading}
            >
                <Row align={'center'}>
                    <h3>Tem certeza que deseja remover o usuário da equipe?</h3>
                </Row>
            </Modal>
        </div>
    )
}
