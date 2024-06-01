import React from 'react';
import { Form, Input, Row, Select } from "antd";
const { TextArea } = Input;
import CTModal from "../../components/CTModal/CTModal";

export default function ModalJustify({ open, close, record }) {
    const [form] = Form.useForm();

    React.useEffect(() => {
        if (record) {
            form.setFieldsValue({
                marking: record.date,
                hours: [
                    record.marking1.hour,
                    record.marking2.hour,
                    record.marking3.hour,
                    record.marking4.hour,
                ],
            });
        }
    }, [record, form]);

    return (
        <div>
            <CTModal
                open={open}
                onCancel={close}
                title={"Justificar"}
                btnTitleOk={"Adicionar"}
                btnTitleCancel={"Cancelar"}
            >
                <Form form={form} action="" method="post" layout='vertical'>
                    <Form.Item
                        name={'marking'}
                        label={'Marcação'}
                        rules={[
                            {
                                required: true,
                                message: 'Campo não preenchido!',
                            }
                        ]}
                    >
                        <Input size={'large'} disabled />
                    </Form.Item>
                    <Form.Item
                        name="hours"
                        label={'Horário'}
                    >
                        <Row align={'space-between'}>
                            <>
                                <Input
                                    style={{ width: '22%', color: record.marking1.isValid ? 'black' : 'red' }}
                                    size={'large'}
                                    value={record.marking1.hour}
                                    readOnly
                                />
                                <Input
                                    style={{ width: '22%', color: record.marking2.isValid ? 'black' : 'red' }}
                                    size={'large'}
                                    value={record.marking2.hour}
                                    readOnly
                                />
                                <Input
                                    style={{ width: '22%', color: record.marking3.isValid ? 'black' : 'red' }}
                                    size={'large'}
                                    value={record.marking3.hour}
                                    readOnly
                                />
                                <Input
                                    style={{ width: '22%', color: record.marking4.isValid ? 'black' : 'red' }}
                                    size={'large'}
                                    value={record.marking4.hour}
                                    readOnly
                                />
                            </>

                        </Row>
                    </Form.Item>
                    <Form.Item
                        name="justify"
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
    );
}

