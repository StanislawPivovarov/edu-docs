import React from "react";
import { Row, Col, Button } from "antd";

import style from './styles.module.scss'

const About = () => {
 return(
  <Row justify={'center'}>
  <Col xs={23} lg={20}>
  <p className={style.header}>EduDocs упрощает работу с учебной документацией.
 Мы предоставляет удобный инструмент для организации списков специалистов и создания для них документов.</p>
  <p className={style.what_we_do}>EduDocs создаёт</p>
  <div className={style.button_group}>
   <Button>Протоколы</Button>
   <Button>Удостоверения</Button>
   <Button>Документация<br />  для Минтруда</Button>
  </div>
 </Col>
 </Row>
 )
}

export default About;
