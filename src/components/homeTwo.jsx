import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
const data = [
  {
    thumbnail:
      "https://www.glob-up.com/static/media/0.7554f1aee5c05cc8fef2.png",
    name: "Jarvis Jeong",
    belong: "Department of Electrical Engineering",
    position: "CEO",
    mail: "full.of.idea.1@gmail.com",
    github: "https://github.com/kuplace",
    title: "사업을 위해 한 몸 불살라보겠습니다.",
  },
  {
    thumbnail:
      "https://www.glob-up.com/static/media/0.12c301cf214897b07fbe.jpeg",
    name: "Charles Kim",
    belong: "Department of Business School",
    position: "CEO",
    mail: "kimcharesu@gamil.com",
    title: "사업을 위해 한 몸 불살라보겠습니다.",
  },
  {
    thumbnail:
      "https://www.glob-up.com/static/media/5.74aea8d90c887eca2921.jpg",
    name: "Zoe Shim",
    belong: "Department of Electrical Engineering",
    position: "Front End",
    mail: "alrbsshim14@gmail.com",
    github: "https://github.com/alrbs10",
    title: "내가 사용하기 위한, 프로젝트를 만들었습니다.",
  },

  {
    thumbnail:
      "https://www.glob-up.com/static/media/6.6020c2051351cd4f6fef.jpeg",
    name: "Jay Youn",
    belong: "Department of Electrical Engineering",
    position: "Back End",
    mail: "ghy200000@gmail.com",
    github: "https://github.com/larry1121",
    title: "맥북 저장공간을 확보하기 위해 많은 노력을 들였습니다ㅠㅠ",
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
        함께 만든 사람들👷‍♀️
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
