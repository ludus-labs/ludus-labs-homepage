import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Blank from "../images/lines.png";
import "../style/about.scss";
function About(props) {
  return (
    <Container className="about">
      <Row>
        <Col lg={7}>
          <img className="blank ani-1" src="/img/Icon_integrate.png" alt="" />
        </Col>
        <Col lg={5} className="welcome ani-2">
          <p>ABOUT US</p>
          <h1>
            Welcome to Department of Biomedical Engineering
          </h1>
          <h6>
            central core for innovative future medicine in personalized precision medicine.
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
