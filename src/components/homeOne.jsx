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
      <h1 className="title">What we made</h1>
      <h6 className="description">
        <span className="red">목표</span> : 가볍지만 즐거운, 그러한 아이템을
        제작합니다.
      </h6>
      <div className="directions row">
        <div className="direction d1 col-lg-4">
          <div className="d-flex">
            <div className="color-bar therapeutics"></div>
            <h4 className="dTitle">불필요한 톡방, 이제 그만!</h4>
          </div>
          <img src="img/capture.png" alt="" />
        </div>
        <div className="direction d2 col-lg-4">
          <div className="d-flex">
            <div className="color-bar morphogenic"></div>
            <h4 className="dTitle">직관적이고, 누구보다 빠르게</h4>
          </div>
          <img src="img/emoticon.png" alt="" />
        </div>
        <div className="direction d3 col-lg-4">
          <div className="d-flex">
            <div className="color-bar knowingdoctor"></div>
            <h4 className="dTitle">밀도 100% 소통!</h4>
          </div>
          <img src="img/receive.png" alt="" />
        </div>
      </div>
    </Container>
  );
}
