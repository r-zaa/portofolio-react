import { motion as Motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
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

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <Motion.div
        className="container timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="timeline-line" />

        {t.experience.items.map((item, index) => (
          <Motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="timeline-dot" />
            <div className="experience-card glass lift">
              <span className="experience-line" />
              <h3>
                {item.title} | {item.period}
              </h3>
              <span>{t.experience.features}</span>
              <ul>
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}
