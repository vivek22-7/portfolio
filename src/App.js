import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import './App.css';
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  

  return(
    <>
    <Navbar/>
    <div className="container">
      {/* <Router>
        <Routes>
          <Route path="/" element = {<Hero/>}/>
          <Route path="/" element = {<Skills/>}/>
          <Route path="/" element = {<Projects/>}/>
          <Route path="/" element = {<ContactMe/>}/>
        </Routes>
      </Router>  */}  
      <Hero/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
    <Footer/>    
    </>
  )
}

export default App