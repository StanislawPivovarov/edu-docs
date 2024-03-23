import React from "react";
import { Button, Col, Row } from "antd";
import Image from "next/image";

import Header from "../../Header";
import styles from './styles.module.scss'
import student from '@/app/assets/Images/Intro/student.png'
import back from '@/app/assets/Images/Intro/background.png'
import Script from "next/script";

const Intro = () => {
 return(
  <div className={styles.background} style={{backgroundImage: `url(/background.png)`}}>
   <Header/>
   <Row justify={'center'}>
   <Col xs={23} lg={20}>
    <Row justify={'center'}>
     <Col span={12}>
      <h1 className={styles.header}>EduDocs — система управления учебными материалами</h1>
      <Button className={styles.buy}>Купить</Button>
     </Col>
     <Col span={12}>
      <Image className={styles.student} src={student} alt="student"/>
     </Col>
    </Row>
    </Col>
   </Row>
  </div>
 )
}

export default Intro;
