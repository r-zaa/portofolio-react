import { motion as Motion } from "framer-motion";

/* ===== ANIMATION VARIANTS ===== */
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
  return (
    <section id="experience" className="section">
      <Motion.div
        className="container timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="section-title">Experience</h2>

        {/* TIMELINE LINE */}
        <div className="timeline-line" />

        {/* ===== ITEM 1 ===== */}
        <Motion.div
          className="timeline-item left"
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="timeline-dot" />
          <div className="experience-card glass lift">
            <span className="experience-line" />
            <h3>ERP Software – Project Nyata (Tim) | 2024 – 2025</h3>
            <span>Fitur utama:</span>
            <ul>
              <li>Manajemen proyek</li>
              <li>Pengelolaan penjualan & pembelian</li>
              <li>Inventory</li>
              <li>Laporan real-time</li>
            </ul>
          </div>
        </Motion.div>

        {/* ===== ITEM 2 ===== */}
        <Motion.div
          className="timeline-item right"
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="timeline-dot" />
          <div className="experience-card glass lift">
            <span className="experience-line" />
            <h3>
              Sistem Manajemen PAUD & Monitoring Anak – Final Project
              (CodeIgniter) | 2025
            </h3>
            <span>Fitur utama:</span>
            <ul>
              <li>Dashboard grafik perkembangan anak</li>
              <li>Manajemen siswa, guru & user</li>
              <li>Sistem penilaian perkembangan</li>
              <li>Kehadiran & jadwal kegiatan</li>
              <li>Laporan bulanan & tahunan</li>
              <li>Role & permission</li>
            </ul>
          </div>
        </Motion.div>

        {/* ===== ITEM 3 ===== */}
        <Motion.div
          className="timeline-item left"
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="timeline-dot" />
          <div className="experience-card glass lift">
            <span className="experience-line" />
            <h3>
              Admin Pembelian & Chatbot AI – Project Pribadi (Node.js) | 2025
            </h3>
            <span>Fitur utama:</span>
            <ul>
              <li>CRUD produk & stok</li>
              <li>Input & pembatalan pembelian otomatis</li>
              <li>Riwayat pembelian MySQL</li>
              <li>Chatbot AI (Ollama)</li>
              <li>REST API & backend modular</li>
            </ul>
          </div>
        </Motion.div>

        {/* ===== ITEM 4 ===== */}
        <Motion.div
          className="timeline-item right"
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="timeline-dot" />
          <div className="experience-card glass lift">
            <span className="experience-line" />
            <h3>Activity Dashboard – Project Pribadi (Laravel) | 2025</h3>
            <span>Fitur utama:</span>
            <ul>
              <li>Filter aktivitas berdasarkan tanggal & aksi</li>
              <li>Grafik aktivitas harian</li>
              <li>Top 5 user paling aktif</li>
              <li>Optimasi query & integrasi backend–frontend</li>
            </ul>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
}
