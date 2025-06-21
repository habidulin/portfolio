import { projects } from "./components/Projects";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
// import Love from "./components/Love";
import ProjectDetails from "./components/ProjectDetails";
import "./i18n";

const App = () => {
  return (
    <>
      <Menu />
      <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/love" element={<Love />} /> */}
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;