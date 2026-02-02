import { useState } from "react"
import { useLanguage } from "../context/useLanguage";
import { FiMoon, FiSun } from "react-icons/fi";
export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleLanguage, t } = useLanguage();


  return (
    <nav className="nav cinematic-nav fixed top-0 left-0 w-full z-50">
      <h3 className="logo gradient-text">Muhammad Fahreza Saidasmawan</h3>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>{t.nav.home}</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>{t.nav.experience}</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>{t.nav.skills}</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>{t.nav.projects}</a>
        {/* <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a> */}
      </div>

      <div className="nav-actions">
        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
        >
          {dark ? <FiMoon /> : <FiSun />}
        </button>

        <button
          onClick={toggleLanguage}
          className="lang-btn"
        >
          {t.language}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
