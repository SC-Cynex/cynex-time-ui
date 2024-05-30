import React from "react";
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import { Result } from "antd";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div>
      <Result
        status="error"
        title="Falha no envio"
        subTitle="Verifique e modifique as informações a seguir antes de reenviar."
        className={styles.result}
      >
      </Result>
    </div>
  )
}
