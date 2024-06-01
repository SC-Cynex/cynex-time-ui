import React from 'react';
import { Modal, Row } from "antd";
import actions from './actions';

export default function ModalDelete({ open, close, type, record, setRefresh, message, status, enable }) {
    const handleCancel = () => {
        close();
    };

    const handleOk = async () => {
        try {
            if (type === 'workedHours') {
                await actions.deleteHourRegister(record.id, message, status, enable);
            } else if (type === 'positions') {
                await actions.deleteRoleRegister(record.id, message, status, enable);
            } else if (type === 'team') {
                await actions.deleteTeamRegister(record.id, message, status, enable);
            } else if (type === 'department') {
                await actions.deleteDepartment(record.id, message, status, enable);
            }

            setRefresh(true);
            handleCancel();
        } catch (error) {
            console.error("Erro ao deletar registro", error);
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
            >
                <Row align={'center'}>
                    <h3>Tem certeza que deseja deletar este registro?</h3>
                </Row>
            </Modal>
        </div>
    )
}
