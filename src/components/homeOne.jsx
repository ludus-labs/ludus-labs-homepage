import React from "react";
import { Container } from "react-bootstrap";
import "../style/homeOne.scss";
export default function HomeOne() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "80px",
      }}
    >
      <h1 className="title">우리가 만든 프로젝트</h1>
      <h6 className="description">
        <span className="red">목표</span> : 가볍지만 즐거운, 그러한 아이템을
        제작합니다.
      </h6>
      <div className="directions row">
        <div className="direction d1 col-lg-4">
          <div className="d-flex">
            <div className="color-bar therapeutics"></div>
            <h4 className="dTitle">AI and Big Data based Robo-therapeutics</h4>
          </div>
          <img src="img/thera_orange.png" alt="" />
        </div>
        <div className="direction d2 col-lg-4">
          <div className="d-flex">
            <div className="color-bar morphogenic"></div>
            <h4 className="dTitle">
              Smart material based morphogenic regeneration
            </h4>
          </div>
          <img src="img/heart_orange.png" alt="" />
        </div>
        <div className="direction d3 col-lg-4">
          <div className="d-flex">
            <div className="color-bar knowingdoctor"></div>
            <h4 className="dTitle">
              AI based diagnosis for individualized treatment
            </h4>
          </div>
          <img src="img/아는의사_수정.png" alt="" />
        </div>
      </div>
    </Container>
  );
}
