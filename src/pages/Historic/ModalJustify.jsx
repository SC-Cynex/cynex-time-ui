import React from 'react';
import { Form, Input, Row, Select } from "antd";
const { TextArea } = Input;
import CTModal from "../../components/CTModal/CTModal";

export default function ModalJustify({ open, close }) {
    return (
        <div>
            <CTModal
                open={open}
                onCancel={close}
                title={"Justificar"}
                btnTitleOk={"Adicionar"}
                btnTitleCancel={"Cancelar"}
            >
                <Form action="" method="post" layout='vertical'>
                    <Form.Item
                        name={'marcacao'}
                        label={'Marcação'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            }
                        ]}
                    >
                        <Input size={'large'} />
                    </Form.Item>
                    <Form.Item
                        name="horario"
                        label={'Horário'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            },
                        ]}
                    >
                        <Row align={'space-between'}>
                            <Input style={{ width: '22%' }} size={'large'} />
                            <Input style={{ width: '22%' }} size={'large'} />
                            <Input style={{ width: '22%' }} size={'large'} />
                            <Input style={{ width: '22%' }} size={'large'} />
                        </Row>
                    </Form.Item>
                    <Form.Item
                        name="tipoJustificativa"
                        label={'Tipo de Justificativa'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            },
                        ]}
                    >
                        <Select size={'large'} />
                    </Form.Item>
                    <Form.Item
                        name="justificativa"
                        label={'Justificativa'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            },
                        ]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                </Form>
            </CTModal>
        </div>
    )
}