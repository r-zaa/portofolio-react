import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <Motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="section-title">About Me</h2>

        <p >
          Saya merupakan junior Full Stack Web Developer yang tertarik pada
          pengembangan aplikasi web dari sisi frontend maupun backend.
          Berpengalaman mengerjakan proyek nyata menggunakan CodeIgniter, dan
          aktif mengeksplorasi teknologi modern seperti Laravel dan React melalui
          project pribadi.
        </p>
      </Motion.div>
    </section>
  );
}
