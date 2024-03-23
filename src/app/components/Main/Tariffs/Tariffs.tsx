import { Row, Col } from "antd";
import React from "react";

import styles from './styles.module.scss'
import Price from "./Price";

const Tariffs = () => {

 const adv1 = [
  "Техническая поддержка",
  "Использование готовых шалонов документов",
  "Внедрение обновлений"
 ]

 const adv2 = [
  "Техническая поддержка",
  "Использование готовых шалонов документов",
  "Внедрение обновлений",
  "Подготовка индивидуальных шаблонов документов",
  "Реестр выданных документов (архив)",
 ]

 const adv3 = [
  "Техническая поддержка",
  "Использование готовых шалонов документов",
  "Внедрение обновлений",
  "Подготовка индивидуальных шаблонов документов",
  "Реестр выданных документов (архив)",
  "Модернизация функционала под индивидуальные рабочие процессы"
 ]

 return (
  <Row justify={'center'} className={styles.wrapper}>
   <Col xs={23} lg={20}>
    <p className={styles.header}>Выберите подходящий Вам тариф</p>
    <div className={styles.tariffs}>
     <Price
     position={1}
     advantages={adv1}
     text={"Базовый"}
     bodyColor={"rgba(83, 86, 116, 0.5)"}
     headerColor={"#35374B"}
     price={'10 000'}
     />
     <Price
     position={2}
     advantages={adv2}
     text={"Страртный "}
     bodyColor={"rgba(52, 73, 85, 0.5)"}
     headerColor={"#344955"}
     price={'15 000'}
     />
     <Price
     position={3}
     advantages={adv3}
     text={"Полный"}
     bodyColor={"rgba(80, 114, 123, 0.5)"}
     headerColor={"#50727B"}
     price={'20 000'}
     />

    </div>
   </Col>
  </Row>
 )
}

export default Tariffs;
