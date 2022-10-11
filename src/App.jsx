import React, { useState, useEffect, useRef } from "react";
import About from "./components/About";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeOne from "./components/homeOne";
import HomeTwo from "./components/homeTwo";
import { ScrollingProvider, Section } from "react-scroll-section";

function App(props) {
  // const [navActive, setNavActive] = useState(1)
  // const [sAbout,setSAbout] = useState(0)
  // const [shomeone,setShomeone] = useState(0)
  // const [shometwo,setShometwo] = useState(0)
  // const about = useRef(null)
  // const homeone = useRef(null)
  // const hometwo = useRef(null)
  // const getwindowScroll = () =>{
  //   if(window.scrollY){

  //   }

  // }
  // useEffect(()=>{
  //   getwindowScroll()
  //   setSAbout(about.current.clientHeight)
  //   setShomeone(homeone.current.clientHeight)
  //   setShometwo(hometwo.current.clientHeight)
  // })
  // useEffect(()=>{
  //   console.log(sAbout, shomeone, shometwo)
  // })
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
