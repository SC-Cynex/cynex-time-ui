import React from 'react';
import { Modal, Row } from "antd";

export default function ModalDelete({ open, close }) {
    const handleCancel = () => {
        close();
    };

    const handleOk = async () => {
        
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
            >
                <Row align={'center'}>
                    <h3>Tem certeza que deseja deletar este registro?</h3>
                </Row>
            </Modal>
        </div>
    )
}
