import React from 'react';
import { Form, Input, Select } from "antd";
import CTModal from "../../components/CTModal/CTModal";

export default function ModalTeams({ open, close }) {
    return (
        <div>
            <CTModal
                open={open}
                onCancel={close}
                title={"Registrar"}
                btnTitleOk={"Adicionar"}
                btnTitleCancel={"Cancelar"}
            >
                <Form action="" method="post" layout='vertical'>
                    <Form.Item
                        name={'equipe'}
                        label={'Equipe'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            }
                        ]}
                    >
                        <Input size={'large'} />
                    </Form.Item>
                </Form>
            </CTModal>
        </div>
    )
}