import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Love from "./components/Love"; // Импорт компонента Love

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/love" element={<Love />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
};

export default App;
