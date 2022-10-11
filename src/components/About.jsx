import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Blank from "../images/lines.png";
import "../style/about.scss";
function About(props) {
  return (
    <Container className="about">
      <Row>
        <Col lg={7}>
          <img
            className="blank ani-1"
            src="https://www.glob-up.com/static/media/gogo_icon.be0aea50efa112d413da.png"
            alt=""
          />
        </Col>
        <Col lg={5} className="welcome ani-2">
          <p>ABOUT US</p>
          <h1>우리는 재미있는 걸 만드는 연구소입니다.</h1>
          <h6>ㄱ?라는 이모티콘 기반 메신저 어플을 출시했습니다.</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
