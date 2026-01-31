import { useState } from "react";
import useCursor from "./hooks/useCursor";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
export default function App() {
  const [dark, setDark] = useState(true);
  useCursor();

  return (
    <div className={dark ? "dark" : "light"}>
      <div className="cursor" />
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProject />
      <Projects />
      <Footer />
    </div>
  );
}
