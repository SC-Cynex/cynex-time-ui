import React, { useState, useEffect } from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Button, Tabs, Table } from "antd";
import styles from "./TeamManagement.module.css";
import ModalWorkedHours from "./ModalWorkedHours";
import ModalPositions from "./ModalPositions";
import ModalTeams from "./ModalTeams";
import ModalDelete from "./ModalDelete";
import actions from './actions';
import CTMessage from "../../components/CTMessage/CTMessage";
import ModalDepartment from "./ModalDepartment";

export default function TeamManagement() {
    const [showWorkedHours, setShowWorkedHours] = useState(false);
    const [showPositions, setShowPositions] = useState(false);
    const [showTeams, setShowTeams] = useState(false);
    const [showDepartments, setShowDepartments] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [editRecord, setEditRecord] = useState(null);
    const [editType, setEditType] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const [status, setStatus] = useState(null);
    const [enable, setEnable] = useState(false);
    const [message, setMessage] = useState('');
    const [teamsData, setTeamsData] = useState([]);
    const [positionsData, setPositionsData] = useState([]);
    const [workedHoursData, setWorkedHoursData] = useState([]);
    const [departmentsData, setDepartmentsData] = useState([]);

    useEffect(() => {
        if (refresh) {
            actions.getTeamsRegister()
                .then(data => setTeamsData(data))
                .catch(error => console.error("Erro ao buscar as equipes:", error));
            setRefresh(false);
        }
    }, [refresh]);

    useEffect(() => {
        if (refresh) {
            actions.getRoleRegister()
                .then(data => setPositionsData(data))
                .catch(error => console.error("Erro ao buscar os cargos:", error));
            setRefresh(false);
        }
    }, [refresh]);

    useEffect(() => {
        if (refresh) {
            actions.getHourRegister()
                .then(data => {
                    const newData = data.map(item => {
                        const workHours = calculateWorkHours(item.start, item.end, item.lunchTime);
                        return { ...item, workHours };
                    });
                    setWorkedHoursData(newData);
                })
                .catch(error => console.error("Erro ao buscar os horários:", error));
            setRefresh(false);
        }
    }, [refresh]);

    useEffect(() => {
        if (refresh) {
            actions.getDepartments()
                .then(data => setDepartmentsData(data))
                .catch(error => console.error("Erro ao buscar os departamentos:", error));
            setRefresh(false);
        }
    }, [refresh]);

    const calculateWorkHours = (startString, endString, lunchTimeString) => {
        const [startHours, startMinutes, startSeconds] = startString.split(':').map(Number);
        const [endHours, endMinutes, endSeconds] = endString.split(':').map(Number);
        const [lunchHours, lunchMinutes, lunchSeconds] = lunchTimeString.split(':').map(Number);

        const startTimeInMinutes = startHours * 60 + startMinutes;
        const endTimeInMinutes = endHours * 60 + endMinutes;
        const lunchTimeInMinutes = lunchHours * 60 + lunchMinutes;

        const workTimeInMinutes = endTimeInMinutes - startTimeInMinutes - lunchTimeInMinutes;

        const workHours = (workTimeInMinutes / 60).toFixed(2);

        return parseFloat(workHours) + 'h';
    };

    const handleEdit = (type, record) => {
        setEditRecord(record);
        setEditType(type);
        if (type === 'workedHours') {
            setShowWorkedHours(true);
        } else if (type === 'positions') {
            setShowPositions(true);
        } else if (type === 'team') {
            setShowTeams(true);
        } else if (type === 'department') {
            setShowDepartments(true);
        }
    };

    const handleDelete = (type, record) => {
        setEditRecord(record);
        setEditType(type);
        setShowDelete(true);
    };

    const resetMessage = () => {
        setEnable(false);
        setMessage('');
        setStatus(null);
    };

    const generateColumns = (type, column) => {
        let columns = [];

        if (type === 'workedHours') {
            columns = [
                {
                    title: 'Entrada',
                    dataIndex: 'start',
                    key: 'start',
                },
                {
                    title: 'Saída',
                    dataIndex: 'end',
                    key: 'end',
                },
                {
                    title: 'Hora do Almoço',
                    dataIndex: 'lunchTime',
                    key: 'lunchTime',
                },
                {
                    title: 'Carga Horária',
                    dataIndex: 'workHours',
                    key: 'workHours',
                },
            ];
        } else if (type === 'department') {
            columns.push({
                title: 'Departamento',
                dataIndex: column,
                key: column,
            });
        } else {
            columns.push({
                title: type === 'positions' ? 'Cargo de Trabalho' : 'Equipe',
                dataIndex: column,
                key: column,
            });
        }

        columns.push({
            title: 'Ações',
            key: 'actions',
            render: (text, record) => (
                <div>
                    <Button type="primary" style={{ marginRight: '20px' }} onClick={() => handleEdit(type, record)}>
                        Editar
                    </Button>
                    <Button type="primary" danger onClick={() => handleDelete(type, record)}>
                        Deletar
                    </Button>
                </div>
            ),
            width: 250,
        });

        return columns;
    };

    const createTabContent = (type, dataSource, modalSetter, column) => (
        <div>
            <Button type="primary" onClick={() => {
                setEditRecord(null);
                setEditType(type);
                modalSetter(true);
            }}>
                {`Adicionar ${type === 'workedHours' ? 'Horário' : type === 'positions' ? 'Cargos' : type === 'department' ? 'Departamento' : 'Equipe'}`}
            </Button>

            {enable && (
                <div className={styles.feedback}>
                    <CTMessage message={message} type={status} enable={setEnable} />
                </div>
            )}

            <Table columns={generateColumns(type, column)} dataSource={dataSource} style={{ marginTop: '20px' }} />
        </div>
    );

    const items = [
        {
            key: '1',
            label: 'Horários de trabalho',
            children: createTabContent('workedHours', workedHoursData, setShowWorkedHours, 'name'),
        },
        {
            key: '2',
            label: 'Cargos',
            children: createTabContent('positions', positionsData, setShowPositions, 'name'),
        },
        {
            key: '3',
            label: 'Equipes',
            children: createTabContent('team', teamsData, setShowTeams, 'name'),
        },
        {
            key: '4',
            label: 'Departamento',
            children: createTabContent('department', departmentsData, setShowDepartments, 'name'),
        }
    ];

    return (
        <DefaultPage>
            <div className={styles.team}>
                <h1>Gestão de Equipe</h1>
                <div className={styles.collapse}>
                    <Tabs defaultActiveKey="1" items={items} onChange={resetMessage} />
                </div>
            </div>
            {showWorkedHours && <ModalWorkedHours
                open={showWorkedHours}
                close={() => setShowWorkedHours(false)}
                setRefresh={setRefresh}
                message={setMessage}
                status={setStatus}
                enable={setEnable}
                record={editRecord}
            />}
            {showPositions && <ModalPositions
                open={showPositions}
                close={() => setShowPositions(false)}
                setRefresh={setRefresh}
                message={setMessage}
                status={setStatus}
                enable={setEnable}
                record={editRecord}
            />}
            {showTeams && <ModalTeams
                open={showTeams}
                close={() => setShowTeams(false)}
                setRefresh={setRefresh}
                message={setMessage}
                status={setStatus}
                enable={setEnable}
                record={editRecord} // Passar o registro a ser editado
            />}
            {showDepartments && <ModalDepartment
                open={showDepartments}
                close={() => setShowDepartments(false)}
                setRefresh={setRefresh}
                message={setMessage}
                status={setStatus}
                enable={setEnable}
                record={editRecord} // Passar o registro a ser editado
            />}
            {showDelete && <ModalDelete
                open={showDelete}
                close={() => setShowDelete(false)}
                type={editType}
                record={editRecord}
                setRefresh={setRefresh}
                message={setMessage}
                status={setStatus}
                enable={setEnable}
            />}
        </DefaultPage>
    );
}
