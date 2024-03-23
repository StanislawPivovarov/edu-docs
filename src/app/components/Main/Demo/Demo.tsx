"use client"

import { Row, Col, Button } from "antd";
import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

import styles from './styles.module.scss'
import thumbnail from '@/app/assets/Images/Demo/Thumbnail.png'
import play from '@/app/assets/Images/Demo/Icon/Outlined/PlayCircle.svg'
const Demo = () => {
 return (
  <div className={styles.back} style={{ backgroundImage: 'url(/backgroundDemo.png)' }}>
   <Row justify={'center'}>
    <Col xs={23} lg={20}>

     <Row align={'middle'}>
      <Col span={14}>
       <div className={styles.player_container}>
        <ReactPlayer
         light
         url={'https://www.youtube.com/watch?v=yplMmObpSf0&ab_channel=ShMpOLanD'} />
       </div>
      </Col>
      <Col span={10}>
       <div className={styles.description_box}>
       <p className={styles.description}>Воспользуйтесь <br />
        демо-версией, чтобы ознакомиться с системой</p>

       <Button className={styles.watch}>Смотреть демо</Button>
       </div>

      </Col>
     </Row>
    </Col>
   </Row>
  </div>
 )
}

export default Demo;
