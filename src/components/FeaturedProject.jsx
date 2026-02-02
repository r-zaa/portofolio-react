import { motion as Motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";

export default function FeaturedProject() {
  const { t } = useLanguage();

  return (
    <section className="section story-visual" id="featured">
      <div className="container">
        <h2 className="section-title">{t.featuredProject.title}</h2>

        <div className="featured-grid">
          <Motion.div
            className="featured-image glass"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="./images/pgift.gif"
              alt={t.featuredProject.projectTitle}
            />
          </Motion.div>

          <Motion.div
            className="featured-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3>{t.featuredProject.projectTitle}</h3>

            <p>{t.featuredProject.description}</p>

            <ul className="feature-points">
              {t.featuredProject.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {t.featuredProject.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
