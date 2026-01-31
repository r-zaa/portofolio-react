import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroOrb from "./HeroOrb";
import { heroTextContainer, heroItem } from "../animations/variants";
import { FiMail } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={heroRef} className="hero hero-cinematic">
      <Motion.div className="hero-aurora" style={{ y: bgY }} />

      <Motion.div className="container hero-inner split" style={{ y: textY, opacity }}>
        <Motion.div variants={heroTextContainer} initial="hidden" animate="visible">
          <Motion.h1 className="hero-title" variants={heroItem}>
            Full Stack Developer | <br />
            <span className="gradient-text">Web Developer</span>
          </Motion.h1>
          <br/>
          <Motion.p
              className="hero-subtitle"
              variants={heroItem}
            >
              Berfokus pada pengembangan aplikasi web yang
              <b> efisien</b>, <b>terstruktur</b>, dan
              <b> scalable</b>.
            </Motion.p>
            <br/>

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
                  href="./document/cv_dev.pdf"
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

        <div className="hero-3d">
          <HeroOrb />
        </div>
      </Motion.div>
    </section>
  );
}
