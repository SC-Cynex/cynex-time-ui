import React, { useEffect, useState } from 'react';
import { Form, Select } from "antd";
import CTModal from "../../components/CTModal/CTModal";

export default function ModalRegister({ open, close }) {

    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/user/team/null")
            .then((res) => res.json())
            .then((data) => setListUser(data))
    }, [])

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
                        />
                    </Form.Item>
                </Form>
            </CTModal>
        </div>
    )
}