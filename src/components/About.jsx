import { motion as Motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
export default function About() {
   const { t } = useLanguage();
  return (
    <section id="about" className="section">
      <Motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="section-title">{t.about.title}</h2>

        <p >
          {t.about.description}
        </p>
      </Motion.div>
    </section>
  );
}
