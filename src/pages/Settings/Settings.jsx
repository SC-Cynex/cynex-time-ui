import React from 'react';
import DefaultPage from '../../components/DefaultPage/DefaultPage';
import { FaUserAlt } from "react-icons/fa";
import FormSettings from './FormSettings';
import styles from './Settings.module.css';


export default function Settings() {
  return (
    <DefaultPage>
      <div className={styles.settings}>
        <h1>Meus dados</h1>
        <FaUserAlt size={65} />
          <div className={styles.form_settings}>
            <FormSettings />
          </div>
          </div>

      {/* <div>Settings</div> */}
    </DefaultPage>
  )
}

