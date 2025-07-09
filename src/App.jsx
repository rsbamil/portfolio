import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Element } from "react-scroll"; // ✅ Add this

const App = () => {
  return (
    <div className="bg-gradient-to-b from-violet-900 to-black">
      <Header />
      <Element name="home">
        <HeroSection />
      </Element>
      <CustomCursor />
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
