import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
// import useCursor from "./hooks/useCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
export default function App() {
  const [dark, setDark] = useState(true);
  // useCursor();

  return (
    <div className={dark ? "dark" : "light"}>
      {/* <div className="cursor" /> */}
      <div/>
      <LanguageProvider>
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  );
}
