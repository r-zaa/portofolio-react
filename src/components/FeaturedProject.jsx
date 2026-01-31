import { motion as Motion } from "framer-motion";

export default function FeaturedProject() {
  return (
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
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="./images/new.png"
              alt="Cinematic Portfolio Preview"
            />
          </Motion.div>

          {/* CONTENT */}
          <Motion.div
            className="featured-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3>Portofolio Web Sinematik</h3>

            <p>
              Sinematik React portfolio yang dirancang sebagai media utama
              personal branding, menampilkan animasi halus, parallax scrolling,
              dan aksen 3D untuk menciptakan pengalaman visual yang imersif dan
              profesional.
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
  );
}
