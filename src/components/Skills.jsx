import { motion as Motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section dark-panel">
      <div className="container">
        <h2 className="section-title text-center mb-10">Tech Stack</h2>

        <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((s, i) => (
            <Motion.div
              key={s.name}
              className="skill-card w-20 h-20 rounded-full flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={s.icon}
                alt={s.name}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xs text-gray-300 font-medium mt-2">
                {s.name}
              </span>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
