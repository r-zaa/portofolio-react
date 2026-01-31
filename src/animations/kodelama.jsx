import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import { useRef, useState, useEffect } from "react";
import "./App.css";

import { skills } from "./data/skills";
import { projects } from "./data/project";
import { FiMail } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";
/* ===== 3D HERO ORB ===== */
function HeroOrb() {
  return (
    <Canvas camera={{ position: [0, 4, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 0, 4]} intensity={2} />
      <Float speed={2} rotationIntensity={3.2} floatIntensity={3}>
        <mesh>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial
            metalness={0.4}
            roughness={0.5}
            color="#38bdf8"
          />
        </mesh>
      </Float>
    </Canvas>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  /* CUSTOM CURSOR */
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const move = (e) => {
      if (!cursor) return;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* HERO PARALLAX */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const heroTextContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const heroItem = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const aboutContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const aboutItem = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const projectsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const projectItem = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };



  return (
    <div className={dark ? "dark" : "light"}>
      <div className="cursor" />

      {/* NAVBAR */}
      <nav className="nav cinematic-nav ">
        <h3 className="logo gradient-text">
          Muhammad Fahreza Saidasmawan
        </h3>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? "🌙" : "☀️"}
          </button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="hero hero-cinematic">
        <Motion.div className="hero-aurora" style={{ y: bgY }} />

        <Motion.div
          className="container hero-inner split"
          style={{ y: textY, opacity }}
        >
          {/* ===== TEXT ===== */}
          <Motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
          >
            <Motion.h1
              className="hero-title"
              variants={heroItem}
            >
              Full Stack Developer | <br />
              <span className="gradient-text">Web Developer</span>
            </Motion.h1>
            <br />
            <Motion.p
              className="hero-subtitle"
              variants={heroItem}
            >
              Berfokus pada pengembangan aplikasi web yang
              <b> efisien</b>, <b>terstruktur</b>, dan
              <b> scalable</b>.
            </Motion.p>

            <Motion.div
              className="btn-group"
              variants={heroItem}
            >
              <div className="cta-actions" style={{ display: "flex", gap: "12px" }}>
                <a
                  href="mailto:mfahreza889@gmail.com"
                  className="btn ghost"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    border: "2px solid #38bdf8",
                    borderRadius: "8px",
                    color: "#38bdf8",
                    textDecoration: "none",
                    fontWeight: "100",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FiMail size={20} color="#908cff" />
                  Email Me
                </a>

                <a
                  href="/documents/cv_dev.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn ghost"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    border: "2px solid #38bdf8",
                    borderRadius: "8px",
                    color: "#38bdf8",
                    textDecoration: "none",
                    fontWeight: "100",
                    transition: "all 0.3s ease",
                  }}
                >
                  <AiOutlineFilePdf size={20} color="#ff0000" />
                  View Resume
                </a>
              </div>
            </Motion.div>
          </Motion.div>

          {/* ===== 3D ===== */}
          <div className="hero-3d">
            <HeroOrb />
          </div>
        </Motion.div>
      </section>


      {/* ABOUT */}
      <section id="about" className="section">
        <Motion.div
          className="container"
          variants={aboutContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,   // ⬅️ animasi ulang saat scroll balik
            amount: 0.4
          }}
        >
          <Motion.h2
            className="section-title"
            variants={aboutItem}
          >
            About Me
          </Motion.h2>

          <Motion.p variants={aboutItem}>
            Saya merupakan junior Full Stack Web Developer yang tertarik pada pengembangan
            aplikasi web dari sisi frontend maupun backend. Berpengalaman mengerjakan
            proyek nyata menggunakan CodeIgniter , dan aktif mengeksplorasi teknologi
            modern seperti Laravel dan React melalui project pribadi. Saya senang
            mempelajari hal baru dan terus meningkatkan kualitas kode serta pengalaman
            pengguna.
          </Motion.p>
        </Motion.div>
      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <Motion.div
          className="container timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title">Experience</h2>

          {/* TIMELINE LINE */}
          <div className="timeline-line" />

          {/* ===== ITEM 1 ===== */}
          <Motion.div
            className="timeline-item left"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="timeline-dot" />
            <div className="experience-card glass lift">
              <span className="experience-line" />

              <h3>ERP Software – Project Nyata (Tim) | 2024 – 2025</h3>
              <span>
                Mengembangkan aplikasi ERP berbasis web dalam tim pengembangan.
                <br />Fitur utama:
              </span>

              <ul>
                <li>Manajemen proyek</li>
                <li>Pengelolaan penjualan & pembelian</li>
                <li>Inventory</li>
                <li>Laporan real-time</li>
              </ul>
            </div>
          </Motion.div>

          {/* ===== ITEM 2 ===== */}
          <Motion.div
            className="timeline-item right"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="timeline-dot" />
            <div className="experience-card glass lift">
              <span className="experience-line" />

              <h3>
                Sistem Manajemen PAUD & Monitoring Anak – Final Project
                (CodeIgniter) | 2025
              </h3>
              <span>
                Sistem manajemen sekolah PAUD berbasis web.
                <br />Fitur utama:
              </span>

              <ul>
                <li>Dashboard grafik perkembangan anak</li>
                <li>Manajemen siswa, guru & user</li>
                <li>Sistem penilaian perkembangan</li>
                <li>Kehadiran & jadwal kegiatan</li>
                <li>Laporan bulanan & tahunan</li>
                <li>Role & permission</li>
              </ul>
            </div>
          </Motion.div>

          {/* ===== ITEM 3 ===== */}
          <Motion.div
            className="timeline-item left"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="timeline-dot" />
            <div className="experience-card glass lift">
              <span className="experience-line" />

              <h3>
                Admin Pembelian & Chatbot AI – Project Pribadi (Node.js) | 2025
              </h3>
              <span>
                Sistem admin pembelian dengan integrasi Chatbot AI.
                <br />Fitur utama:
              </span>

              <ul>
                <li>CRUD produk & stok</li>
                <li>Input & pembatalan pembelian otomatis</li>
                <li>Riwayat pembelian MySQL</li>
                <li>Chatbot AI (Ollama)</li>
                <li>REST API & backend modular</li>
              </ul>
            </div>
          </Motion.div>

          {/* ===== ITEM 4 ===== */}
          <Motion.div
            className="timeline-item right"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="timeline-dot" />
            <div className="experience-card glass lift">
              <span className="experience-line" />

              <h3>Activity Dashboard – Project Pribadi (Laravel) | 2025</h3>
              <span>
                Dashboard interaktif untuk monitoring aktivitas pengguna.
                <br />Fitur utama:
              </span>

              <ul>
                <li>Filter aktivitas berdasarkan tanggal & aksi</li>
                <li>Grafik aktivitas harian</li>
                <li>Top 5 user paling aktif</li>
                <li>Optimasi query & integrasi backend–frontend</li>
              </ul>
            </div>
          </Motion.div>
        </Motion.div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="section dark-panel">
        <div className="container">
          <h2 className="section-title text-center mb-10">Tech Stack</h2>
          <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {skills.map((s, i) => (
              <Motion.div
                key={s.name}
                // PERUBAHAN DISINI:
                // 1. w-32 h-32 : Memaksa ukuran kotak fix (agar rounded-full jadi bulat sempurna)
                // 2. skill-card : Class custom untuk efek neon (opsional, ganti 'glass' jika perlu)
                className="skill-card w-5 h-5 rounded-full flex items-center justify-center p-8"

                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }} // Framer motion hover effect
              >
                {/* Gambar ikon */}
                <img
                  src={s.icon}
                  alt={s.name}
                  className="w-5 h-5 object-contain mb-2" // Ukuran icon diperjelas
                />

                {/* Opsional: Menampilkan nama skill kecil di bawah ikon */}
                <span className="text-xs text-gray-300 font-medium">{s.name}</span>

              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="section story-visual">
        <div className="container">
          <h2 className="section-title">Featured Project</h2>

          <div className="featured-grid">
            {/* IMAGE */}
            <Motion.div
              className="featured-image glass"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/new.png"
                alt="Cinematic Portfolio Preview"
              />
            </Motion.div>

            {/* CONTENT */}
            <Motion.div
              className="featured-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Portofolio Web Sinematik</h3>

              <p>
                Sinematik React portfolio yang dirancang sebagai media utama personal branding,
                menampilkan animasi halus, parallax scrolling, dan aksen 3D
                untuk menciptakan pengalaman visual yang imersif dan profesional.
              </p>

              <ul className="feature-points">
                <li>Fokus pada UI/UX modern & storytelling visual</li>
                <li>Animasi interaktif dengan Framer Motion</li>
                <li>Struktur komponen rapi & scalable</li>
                <li>Representasi kualitas kerja frontend</li>
              </ul>

              <div className="tech-stack">
                <span>React</span>
                <span>Framer Motion</span>
                <span>Tailwind</span>
                <span>Vite</span>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <Motion.div
          className="container"
          variants={projectsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.3,
          }}
        >
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid perspective">
            {projects.map((p, i) => (
              <Motion.div
                key={i}
                className="project-card glass project-tilt"
                variants={projectItem}
                whileHover={{ rotateX: -6, rotateY: 6, scale: 1.03 }}
              >
                <div className="project-glow-layer" />

                {/* TEXT CONTENT */}
                <div className="project-content">
                  <h3>{p.title}</h3>

                  <p className="project-desc">
                    <span className="label">Problem:</span> {p.problem}
                  </p>

                  <p className="project-desc">
                    <span className="label">Solution:</span> {p.solution}
                  </p>

                  <div className="tech-stack">
                    {p.tech.map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* IMAGE OVERLAY */}
                <div className="project-media">
                  <img src={p.image} alt="" className="project-icon" />
                </div>
              </Motion.div>

            ))}
          </div>
        </Motion.div>
      </section>


      {/* CTA */}

      {/* <section id="contact" className="cta-cinematic">
        <Motion.div
          className="cta-bg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <Motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="cta-title">
            Let’s Build Something Impactful
          </h2>

          <p className="cta-text">
            Saya terbuka untuk kesempatan <b>internship, freelance, maupun full-time</b>
            sebagai Web Developer dengan fokus pada frontend, UI/UX, dan performa aplikasi web.
          </p>

          <div className="cta-actions" style={{ display: "flex", gap: "12px" }}>
            <a
              href="mailto:mfahreza889@gmail.com"
              className="btn ghost"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                border: "2px solid #38bdf8",
                borderRadius: "8px",
                color: "#38bdf8",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
            >
              <FiMail size={25} color="#908cff" />
              Email Me
            </a>

            <a
              href="/documents/cv_dev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                border: "2px solid #38bdf8",
                borderRadius: "8px",
                color: "#38bdf8",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
            >
              <AiOutlineFilePdf size={25} color="#ff0000" />
              View Resume
            </a>
          </div>

          <span className="cta-note">
            Available for remote & on-site opportunities.
          </span>
        </Motion.div>
      </section> */}



      <footer>
        © 2026 Fahreza Saidasmawan — Full Stack Developer
      </footer>
    </div >
  );
}









