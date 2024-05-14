import React, { useState } from "react";
import DefaultPage from "../../components/DefaultPage/DefaultPage";
import { Button, Tabs, Table } from "antd";
import styles from "./TeamManagement.module.css";
import workedHoursData from "../../utils/workedHours";
import positionsData from "../../utils/positions";
import teamData from "../../utils/team";
import ModalWorkedHours from "./ModalWorkedHours";
import ModalPositions from "./ModalPositions";
import ModalTeams from "./ModalTeams";

function TeamManagement() {
    const [showWorkedHours, setShowWorkedHours] = useState(false);
    const [showPositions, setShowPositions] = useState(false);
    const [showTeams, setShowTeams] = useState(false);


    const workedHours = () => {
        const columns = [
            {
                title: 'Horário de Trabalho',
                dataIndex: 'workedHours',
                key: 'workedHours',
            },
            {
                title: 'Ações',
                key: 'actions',
                render: () => (
                    <div>
                        <Button type='primary' style={{marginRight: '20px'}}>
                            Editar
                        </Button>
                        <Button type='primary' danger>
                            Deletar
                        </Button>
                    </div>
                ),
                width: 250
            }
        ];

        return (
            <div>
                <Button type="primary" onClick={() => setShowWorkedHours(true)}>
                    Adicionar Horário
                </Button>
                <Table columns={columns} dataSource={workedHoursData} style={{ marginTop: '40px' }} />
            </div>
        )
    }

    const positions = () => {
        const columns = [
            {
                title: 'Cargo de Trabalho',
                dataIndex: 'positions',
                key: 'positions',
            },
            {
                title: 'Ações',
                key: 'actions',
                render: () => (
                    <div>
                        <Button type='primary' style={{marginRight: '20px'}}>
                            Editar
                        </Button>
                        <Button type='primary' danger>
                            Deletar
                        </Button>
                    </div>
                ),
                width: 250
            }
        ];

        return (
            <div>
                <Button type="primary" onClick={() => setShowPositions(true)}>
                    Adicionar Cargos
                </Button>
                <Table columns={columns} dataSource={positionsData} style={{ marginTop: '40px' }} />
            </div>
        )
    }

    const teams = () => {
        const columns = [
            {
                title: 'Equipe',
                dataIndex: 'team',
                key: 'team',
            },
            {
                title: 'Ações',
                key: 'actions',
                render: () => (
                    <div>
                        <Button type='primary' style={{marginRight: '20px'}}>
                            Editar
                        </Button>
                        <Button type='primary' danger>
                            Deletar
                        </Button>
                    </div>
                ),
                width: 250
            }
        ];

        return (
            <div>
                <Button type="primary" onClick={() => setShowTeams(true)}>
                    Adicionar Equipe
                </Button>
                <Table columns={columns} dataSource={teamData} style={{ marginTop: '40px' }} />
            </div>
        )
    }

    const items = [
        {
            key: '1',
            label: 'Horários de trabalho',
            children: workedHours(),
        },
        {
            key: '2',
            label: 'Cargos',
            children: positions(),
        },
        {
            key: '3',
            label: 'Equipes',
            children: teams(),
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
            />
            <ModalTeams
                open={showTeams}
                close={() => setShowTeams(false)}
            />
        </DefaultPage>
    );
}

export default TeamManagement