import React, { useState, useEffect, useRef } from "react";
import About from "./components/About";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeOne from "./components/homeOne";
import HomeTwo from "./components/homeTwo";
import { ScrollingProvider, Section } from "react-scroll-section";

function App() {
  return (
    <ScrollingProvider scrollBehavior="smooth">
      <div>
        <Header />
        <Section id="1">
          <About />
        </Section>
        <Section style={{ paddingTop: "74px" }} id="2">
          <HomeOne />
        </Section>
        <Section style={{ paddingTop: "74px" }} id="3">
          <HomeTwo />
        </Section>
        <Footer />
      </div>
    </ScrollingProvider>
  );
}

export default App;
