import { motion as Motion } from "framer-motion";
import { useLanguage } from "../context/useLanguage";
import { projects } from "../data/project";

const projectsContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};


const projectItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const { t, lang } = useLanguage();
  
console.log("LANG:", lang);
  return (
    <section id="projects" className="section">
      <Motion.div
        className="container"
        variants={projectsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="section-title">{t.projects.title}</h2>

        <div className="projects-grid perspective">
          {projects.map((p, i) => (
            <Motion.div
              key={i}
              className="project-card glass project-tilt"
              variants={projectItem}
              whileHover={{ rotateX: -6, rotateY: 6, scale: 1.03 }}
            >
              <div className="project-glow-layer" />

              <div className="project-content">
                <h3>{p.title}</h3>

                <p className="project-desc">
                  <span className="label">
                    {t.projects.problemLabel}:
                  </span>{" "}
                  {p.problem[lang]}
                </p>

                <p className="project-desc">
                  <span className="label">
                    {t.projects.solutionLabel}:
                  </span>{" "}
                  {p.solution[lang]}
                </p>

                <div className="tech-stack">
                  {p.tech.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-media">
                <img
                  src={p.image}
                  alt={p.title}
                  className="project-icon"
                />
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
