import { useState } from "react"
export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav cinematic-nav">
      <h3 className="logo gradient-text">Muhammad Fahreza Saidasmawan</h3>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div className="nav-actions">
        <button
          className="theme-btn"
          onClick={() => setDark(!dark)}
        >
          {dark ? "🌙" : "☀️"}
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
