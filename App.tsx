import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import EducationSection from "./components/EducationSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeCopySection from "./components/ResumeCopySection";
import ScrollToTop from "react-scroll-to-top";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop
        color="white"
        smooth="true"
        viewBox="0 0 150 280"
        style={{ backgroundColor: "#4f46e5" }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationSection />
        <ResumeCopySection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
