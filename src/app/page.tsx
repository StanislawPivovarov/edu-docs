import Image from "next/image";
import styles from "./page.module.scss";
import { Col, Row } from "antd";
import Intro from "./components/Main/Intro";
import About from "./components/Main/About";
import Demo from "./components/Main/Demo";
import Tariffs from "./components/Main/Tariffs";

export default function Home() {
  return (
    <>
    <Intro/>
    <About/>
    <Demo/>
    <Tariffs/>
    </>
  );
}
