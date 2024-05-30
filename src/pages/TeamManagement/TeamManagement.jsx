import React, { useState, useEffect } from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Button, Tabs, Table } from "antd";
import styles from "./TeamManagement.module.css";
import workedHoursData from "../../utils/workedHours";
import ModalWorkedHours from "./ModalWorkedHours";
import ModalPositions from "./ModalPositions";
import ModalTeams from "./ModalTeams";
import ModalDelete from "./ModalDelete";
import actions from './actions';
import CTMessage from "../../components/CTMessage/CTMessage";

export default function TeamManagement() {
    const [showWorkedHours, setShowWorkedHours] = useState(false);
    const [showPositions, setShowPositions] = useState(false);
    const [showTeams, setShowTeams] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [editRecord, setEditRecord] = useState(null);
    const [editType, setEditType] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const [status, setStatus] = useState(null);
    const [enable, setEnable] = useState(false);
    const [message, setMessage] = useState('');
    const [teamsData, setTeamsData] = useState([]);
    const [positionsData, setPositionsData] = useState([]);

    useEffect(() => {
        if (refresh) {
            actions.getTeamsRegister()
                .then(data => setTeamsData(data))
                .catch(error => console.error("Erro ao buscar as equipes:", error));
        }
    }, [refresh]);


    useEffect(() => {
        if (refresh) {
            actions.getRoleRegister()
                .then(data => setPositionsData(data))
                .catch(error => console.error("Erro ao buscar as equipes:", error));
        }
    }, [refresh]);

    const handleEdit = (type, record) => {
        setEditRecord(record);
        setEditType(type);
        if (type === 'workedHours') {
            setShowWorkedHours(true);
        } else if (type === 'positions') {
            setShowPositions(true);
        } else if (type === 'team') {
            setShowTeams(true);
        }
    };

    const handleDelete = (type, record) => {
        setEditRecord(record);
        setEditType(type);
        setShowDelete(true);
    };

    const generateColumns = (type, column) => [
        {
            title: type === 'workedHours' ? 'Horário de Trabalho' : type === 'positions' ? 'Cargo de Trabalho' : 'Equipe',
            dataIndex: column,
            key: column,
        },
        {
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
        },
    ];

    const createTabContent = (type, dataSource, modalSetter, column) => (
        <div>
            <Button type="primary" onClick={() => {
                setEditRecord(null);
                setEditType(type);
                modalSetter(true);
            }}>
                {`Adicionar ${type === 'workedHours' ? 'Horário' : type === 'positions' ? 'Cargos' : 'Equipe'}`}
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
    ];

    return (
        <DefaultPage>
            <div className={styles.team}>
                <h1>Gestão de Equipe</h1>
                <div className={styles.collapse}>
                    <Tabs defaultActiveKey="1" items={items} />
                </div>
            </div>
            <ModalWorkedHours
                open={showWorkedHours}
                close={() => setShowWorkedHours(false)}
            />
            <ModalPositions
                open={showPositions}
                close={() => setShowPositions(false)}
                setRefresh={setRefresh}
                message={setMessage}
                status={setStatus}
                enable={setEnable}
            />
            <ModalTeams
                open={showTeams}
                close={() => setShowTeams(false)}
                setRefresh={setRefresh}
                message={setMessage}
                status={setStatus}
                enable={setEnable}
            />
            <ModalDelete
                open={showDelete}
                close={() => setShowDelete(false)}
                type={editType}
            />
        </DefaultPage>
    );
}
