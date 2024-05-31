import React from 'react';
import DefaultPage from '../../../components/DefaultPage/DefaultPage';
import FormRegister from './FormRegister';
import styles from './Register.module.css';

export default function Register() {
    return (
        <DefaultPage>
            <div className={styles.register}>                
                <FormRegister />
            </div>
        </DefaultPage>
    );
}
