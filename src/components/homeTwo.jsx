import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
const data = [
  {
    thumbnail: "http://medicine.korea.ac.kr/html_portlet_repositories/6648.jpg",
    name: "Seung-Jong Kim",
    belong: "Department of Biomedical Engineering",
    position: "Professor, Ph.D",
    detail: "Biomedical Engineering",
    location: "제 1의학관 5층 5303호",
    tel: "02-2286-1457",
    mail: "sjkim586@korea.ac.kr",
    homepage: "https://bionics.tistory.com",
    symbol: "heart",
    iconPath: "/img/icon1_sample.png",
    title: "AI and Big Data based Robo-therapeutics",
    description:
      "In the Bionics Lab, we are conducting translational research on wearable robots to effectively assist, augment and rehabilitate human motor function. For that, we analyze human-robot interaction data for various tasks and try to understand the underlying mechanisms. The outcome will inform more improved wearable robot design and prescription.",
  },
  {
    thumbnail: "https://medicine.korea.ac.kr/html_portlet_repositories/144.jpg",
    name: "Yong-Doo Park",
    belong: "Department of Biomedical Engineering",
    position: "Professor, Ph.D",
    detail: "Biomedical Engineering",
    location: "제 1의학관 5층 5301호",
    tel: "02-2286-1458",
    mail: "ydpark67@korea.ac.kr",
    homepage: "http://cte.korea.ac.kr/",
    symbol: "knowdoctor",
    iconPath: "/img/icon2_sample.png",
    title: "Smart materials based morphogenic regeneration",
    description:
      "I am interested in regeneration of vital organs and its mechanism for morphogenesis in the adult. I try to find the basic mechanism for developmental process which can be implemented into adult regeneration.",
  },
  {
    thumbnail:
      "http://www.mdon.co.kr/data/photos/20200314/art_15856342023171_cf8e87.jpg",
    name: "Eun-Sun Kim",
    belong: "Department of Biomedical Engineering",
    position: "Professor, MD, Ph.D",
    detail: "Gastroenterology",
    location: "제 1의학관 5층 5301호",
    tel: "02-2286-1458",
    mail: "silverkes@naver.com",
    homepage: "https://www.knowingdoctor.com/",
    symbol: "robot",
    iconPath: "/img/icon3_sample.png",
    title: "AI based diagnosis for individualized treatment",
    description:
      "Eun Sun Kim(I) is a therapeutic endoscopist, gastroenterologist. I am CEO of peopleshealth.co.ltd, make a medical platform survice www.knowingdoctor.com  to connect medical user and problem solver.",
  },
];
export default function HomeTwo() {
  return (
    <Container style={{ marginBottom: "100px" }}>
      <h1
        style={{
          fontWeight: "700",
          marginBottom: "60px",
          marginTop: "15px",
        }}
      >
        Faculty Members
      </h1>
      {/* <Row style={{ gap: "0" }}> */}
      {data.map((e, i) => (
        // <Col key={i} sm={12} md={6} lg={4}>
        <Card key={i} data={e} />
        // </Col>
      ))}
      {/* </Row> */}
    </Container>
  );
}
