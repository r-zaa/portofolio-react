import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
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

export default function Hero() {
  const heroRef = useRef(null);

  /* 🔒 SAFE useScroll (PRODUCTION READY) */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
    layoutEffect: false, // ⬅️ WAJIB biar gak crash di build
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  /* ANIMATION VARIANTS */
  const heroContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const heroItem = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const base = import.meta.env.BASE_URL; // ⬅️ GITHUB PAGES SAFE

  return (
    <section ref={heroRef} className="hero hero-cinematic">
      <Motion.div className="hero-aurora" style={{ y: bgY }} />

      <Motion.div
        className="container hero-inner split"
        style={{ y: textY, opacity }}
      >
        {/* ===== TEXT ===== */}
        <Motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <Motion.h1 className="hero-title" variants={heroItem}>
            Full Stack Developer <br />
            <span className="gradient-text">Web Developer</span>
          </Motion.h1>

          <Motion.p className="hero-subtitle" variants={heroItem}>
            Berfokus pada pengembangan aplikasi web yang
            <b> efisien</b>, <b>terstruktur</b>, dan
            <b> scalable</b>.
          </Motion.p>

          <Motion.div className="btn-group" variants={heroItem}>
            <div className="cta-actions" style={{ display: "flex", gap: "12px" }}>
              <a
                href="mailto:mfahreza889@gmail.com"
                className="btn ghost"
              >
                <FiMail size={18} />
                Email Me
              </a>

              <a
                href={`${base}document/cv_dev.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost"
              >
                <AiOutlineFilePdf size={18} />
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
  );
}
