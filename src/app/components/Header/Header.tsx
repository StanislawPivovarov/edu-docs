import { Col, Row } from "antd";
import React from "react";
import Image from "next/image";

import Logo from '@/app/assets/Images/Header/Logo.svg'
import styles from './styles.module.scss'
import Link from "next/link";


const Header = () => {
 return (
  <Row justify={'center'} className={styles.header}>
   <Col xs={23} lg={20}>
    <Link href={'/'}>
    <Image src={Logo} alt="logo" />
    </Link>
   </Col>
  </Row>
 )
}

export default Header;
