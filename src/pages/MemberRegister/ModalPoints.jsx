import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Select, Table } from "antd";
import months from '../../utils/months';

export default function ModalPoints({ open, close, userId }) {
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function fetchUser() {
            const res = await fetch("http://localhost:3000/user/" + userId);
            if (!res.ok) {
                throw new Error("Erro ao buscar os dados do usuário!");
            }
            const data = await res.json();
            setUser(data);
        }
        fetchUser();
    }, []);

    useEffect(() => {
        if (!userId) return;
        async function fetchHistoric() {
            const response = await fetch(`http://localhost:3000/point/historic/${userId}/${currentMonth}`);
            const data = await response.json();
            const groupedData = groupDataByDate(data.historic);
            setData(groupedData);
        }
        fetchHistoric();
    }, [currentMonth, userId]);

    function getCurrentMonth() {
        const currentDate = new Date();
        return currentDate.getMonth() + 1;
    }

    function groupDataByDate(data) {
        const grouped = data.reduce((acc, item) => {
            const date = new Date(item.createdAt);
            const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
            if (!acc[formattedDate]) {
                acc[formattedDate] = [];
            }
            acc[formattedDate].push(item.hour);
            return acc;
        }, {});

        const rows = [];
        const { start, end } = user.hour || { start: '', end: '' };

        Object.entries(grouped).forEach(([date, markings]) => {
            let needsJustification = false;
            const validatedMarkings = markings.map(marking => {
                const validation = validateMarking(marking, start, end);
                if (!validation.isValid) {
                    needsJustification = true;
                }
                return validation;
            });

            if (markings.length > 4) {
                needsJustification = true;
            }

            validatedMarkings.sort((a, b) => a.hour.localeCompare(b.hour));
            for (let i = 0; i < validatedMarkings.length; i += 4) {
                rows.push({
                    key: `${date}-${i}`,
                    date,
                    marking1: validatedMarkings[i] || { hour: '', isValid: true },
                    marking2: validatedMarkings[i + 1] || { hour: '', isValid: true },
                    marking3: validatedMarkings[i + 2] || { hour: '', isValid: true },
                    marking4: validatedMarkings[i + 3] || { hour: '', isValid: true },
                    needsJustification,
                });
            }
        });

        return rows;
    }

    function validateMarking(marking, start, end) {
        if (!marking) return { hour: '', isValid: true };
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);
        const [markHour, markMinute] = marking.split(':').map(Number);

        const isValid =
            (markHour > startHour || (markHour === startHour && markMinute >= startMinute)) &&
            (markHour < endHour || (markHour === endHour && markMinute <= endMinute));

        return { hour: marking, isValid };
    }

    const items = months.map((month) => ({
        value: month.key,
        label: month.month,
    }));

    const handleCancel = () => {
        close();
    };

    const columns = [
        {
            title: 'Data',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Marcação 1',
            dataIndex: 'marking1',
            key: 'marking1',
            render: (marking) => (
                <span style={{ color: marking.isValid ? 'black' : 'red' }}>{marking.hour}</span>
            ),
        },
        {
            title: 'Marcação 2',
            dataIndex: 'marking2',
            key: 'marking2',
            render: (marking) => (
                <span style={{ color: marking.isValid ? 'black' : 'red' }}>{marking.hour}</span>
            ),
        },
        {
            title: 'Marcação 3',
            dataIndex: 'marking3',
            key: 'marking3',
            render: (marking) => (
                <span style={{ color: marking.isValid ? 'black' : 'red' }}>{marking.hour}</span>
            ),
        },
        {
            title: 'Marcação 4',
            dataIndex: 'marking4',
            key: 'marking4',
            render: (marking) => (
                <span style={{ color: marking.isValid ? 'black' : 'red' }}>{marking.hour}</span>
            ),
        }
    ];

    return (
        <Modal
            open={open}
            onCancel={handleCancel}
            title="Horário de marcações"
            width={1000}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    Fechar
                </Button>
            ]}
        >
            <Row>
                <div style={{ width: '100%'}}>
                <p>Mês</p>
                <Select
                    style={{
                        width: '50%',
                    }}
                    placeholder={'Mês'}
                    options={items}
                    defaultValue={currentMonth}
                    size="large"
                    onChange={setCurrentMonth}
                />
                </div>
                <Table columns={columns} dataSource={data} style={{ marginTop: '40px', width: '100%' }} />
            </Row>
        </Modal>
    );
}
