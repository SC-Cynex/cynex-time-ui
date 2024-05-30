import React from 'react';
import { Form, Input, Row } from "antd";
import CTModal from "../../components/CTModal/CTModal";

export default function ModalDelete({ open, close }) {
    return (
        <div>
            <CTModal
                open={open}
                onCancel={close}
                title={"Excluir"}
                btnTitleOk={"Confirmar"}
                btnTitleCancel={"Cancelar"}
            >
                <Row align={'center'}>
                    <h3>Deseja confirmar a exclusão?</h3>
                </Row>
            </CTModal>
        </div>
    )
}