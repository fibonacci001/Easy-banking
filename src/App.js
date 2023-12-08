import logo from './logo.svg';
import React, { useState, useEffect, useRef } from "react";
import Nav from './component/Nav';
import Main from './component/Main';
import Section from './component/Section';
import Articles from './component/Articles';
import Footer from './component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';


function App() {
  useEffect(()=>{
AOS.init(
  {
    useClassNames: true,
    once: true,
    
    


  }
  );
  },[])
 
  

  return (
    <div className="App">
      
      <Nav Aos= {AOS} />
      
      <Main Aos= {AOS}/>
      <Section Aos= {AOS} />
      <Articles Aos= {AOS} />
      
      <Footer Aos= {AOS} />
      
      
    </div>
  );
}

export default App;
