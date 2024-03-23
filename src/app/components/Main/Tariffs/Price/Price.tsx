import React from "react";
import { Row, Col, Button } from "antd";

import styles from './style.module.scss'
import price1 from '@/app/assets/Images/Prices/1.svg'
import price2 from '@/app/assets/Images/Prices/2.svg'
import price3 from '@/app/assets/Images/Prices/3.svg'
import Image from "next/image";

const Price = (props: any) => {
var icon
  if (props.position === 1) {
   icon = price1
  } else if (props.position === 2) {
   icon = price2
  } else {
   icon = price3
  }


 return (
  <div className={styles.wrapper}>
   <div className={styles.header} style={{ backgroundColor: `${props.headerColor}` }}>
    <p className={styles.header_text}>{props.text}</p>
    <Image src={icon} alt="position" className={styles.header_img} />
   </div>
   <div className={styles.body} style={{ backgroundColor: `${props.bodyColor}` }}>
    <ul className={styles.list} style={{margin: 0}}>
     {props.advantages.map((items: any) => {
      return(
       <li key={items.id}>{items}</li>
      )
     })}
    </ul>
     <div>
     <p className={styles.price}>{props.price} ₽/мес</p>
     <Button className={styles.buy}>Купить</Button>
     </div>
   </div>
  </div>
 )
}

export default Price;
