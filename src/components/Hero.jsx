import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroOrb from "./HeroOrb";
import { heroTextContainer, heroItem } from "../animations/variants";
import { FiMail } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";
import { useLanguage } from "../context/useLanguage";

export default function Hero() {
  const { t } = useLanguage();
// const { t, lang } = useLanguage();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={heroRef} id="home" className="hero hero-cinematic">
      <Motion.div className="hero-aurora" style={{ y: bgY }} />

      <Motion.div
        className="container hero-inner split"
        style={{ y: textY, opacity }}
      >
        <Motion.div
          variants={heroTextContainer}
          initial="hidden"
          animate="visible"
        >
          <Motion.h1 className="hero-title" variants={heroItem}>
            {t.hero.title1} | <br />
            <span className="gradient-text">{t.hero.title2}</span>
          </Motion.h1>

          <br />

          <Motion.p className="hero-subtitle" variants={heroItem}>
            {t.hero.subtitle}{" "}
            <b>{t.hero.subtitleBold1}</b>,{" "}
            <b>{t.hero.subtitleBold2}</b>, dan{" "}
            <b>{t.hero.subtitleBold3}</b>.
          </Motion.p>

          <br />

          {/* <Motion.div className="btn-group" variants={heroItem}>
            <div className="cta-actions" style={{ display: "flex", gap: "12px" }}>
              <a
                href="mailto:mfahreza889@gmail.com"
                className="btn ghost email-btn"
              >
                <FiMail className="email-icon" />
                {t.hero.email}
              </a>

              <a
                href={
                  lang == "en"
                    ? "./document/cv_dev_en.pdf"
                    : "./document/cv_dev.pdf"
                }


                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost resume-btn"
              >
                <AiOutlineFilePdf className="resume-icon" />
                {t.hero.resume}
              </a>
            </div>
          </Motion.div> */}
        </Motion.div>

        <div className="hero-3d">
          <HeroOrb />
        </div>
      </Motion.div>
    </section>
  );
}
