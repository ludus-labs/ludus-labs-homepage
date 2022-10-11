import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";
import KoreaLogo from "../images/logo/koreaBme.png";
import "../style/footer.scss";
import { useScrollSection } from "react-scroll-section";
export default function Header() {
  const aboutSection = useScrollSection("1");
  const educateSection = useScrollSection("2");
  const professorSection = useScrollSection("3");
  const [nav, setNav] = useState(false);
  return (
    <>
      <Navbar expand="lg" sticky="top" style={{ backgroundColor: "white" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={KoreaLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setNav(!nav)}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                onClick={aboutSection.onClick}
                selected={aboutSection.selected}
                style={{ fontSize: "14px" }}
                content={"About Us"}
              ></Link>
              <Link
                onClick={educateSection.onClick}
                selected={educateSection.selected}
                style={{ fontSize: "14px" }}
                content={"Research in BME"}
              ></Link>
              <Link
                onClick={professorSection.onClick}
                selected={professorSection.selected}
                style={{ fontSize: "14px" }}
                content={"Faculty Members"}
              ></Link>
            </Nav>
          </Navbar.Collapse>
          {nav ? <div className="overlay" /> : <div className="fade-out" />}
        </Container>
      </Navbar>
    </>
  );
}
const Link = (props) => {
  return (
    <a
      onClick={props.onClick}
      style={{
        color: `${props.selected ? "#8b0026" : "inherit"}`,
        fontWeight: `${props.selected ? "700" : "400"}`,
      }}
    >
      {props.content}
    </a>
  );
};
