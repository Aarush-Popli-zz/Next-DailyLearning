import React from "react";
import Footer from "../components/Footer";
import a from '../styles/About.module.css'

const About = () => {
  return (
    <>
      <div className={a.container}>
        <h1 className={a.heading}>Daily Learning</h1>
        <p className={a.text}>In this blog I post about my daily learnings.</p>
      </div>
      
      <Footer />
    </>
  );
};

export default About;
