const BASE = import.meta.env.BASE_URL;

export const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      skills: "Kemampuan",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      title1: "Full Stack Developer",
      title2: "Web Developer",
      subtitle: "Berfokus pada pengembangan aplikasi web yang",
      subtitleBold1: "efisien",
      subtitleBold2: "terstruktur",
      subtitleBold3: "scalable",
      email: "Email Saya",
      resume: "Lihat CV",
    },
    about: {
      title: "Tentang Saya",
      description:
        "Saya merupakan junior Full Stack Web Developer yang tertarik pada pengembangan aplikasi web dari sisi frontend maupun backend. Berpengalaman mengerjakan proyek nyata menggunakan CodeIgniter, dan aktif mengeksplorasi teknologi modern seperti Laravel dan React melalui project pribadi.",
    },
    experience: {
      title: "Pengalaman",
      features: "Fitur utama:",
      items: [
        {
          title: "ERP Software – Project Nyata (Tim)",
          period: "2024 – 2025",
          features: [
            "Manajemen proyek",
            "Pengelolaan penjualan & pembelian",
            "Inventory",
            "Laporan real-time",
          ],
        },
        {
          title:
            "Sistem Manajemen PAUD & Monitoring Anak – Final Project (CodeIgniter)",
          period: "2025",
          features: [
            "Dashboard grafik perkembangan anak",
            "Manajemen siswa, guru & user",
            "Sistem penilaian perkembangan",
            "Kehadiran & jadwal kegiatan",
            "Laporan bulanan & tahunan",
            "Role & permission",
          ],
        },
        {
          title:
            "Admin Pembelian & Chatbot AI – Project Pribadi (Node.js)",
          period: "2025",
          features: [
            "CRUD produk & stok",
            "Input & pembatalan pembelian otomatis",
            "Riwayat pembelian MySQL",
            "Chatbot AI (Ollama)",
            "REST API & backend modular",
          ],
        },
        {
          title: "Activity Dashboard – Project Pribadi (Laravel)",
          period: "2025",
          features: [
            "Filter aktivitas berdasarkan tanggal & aksi",
            "Grafik aktivitas harian",
            "Top 5 user paling aktif",
            "Optimasi query & integrasi backend–frontend",
          ],
        },
      ],
    },
    featuredProject: {
      title: "Project Unggulan",
      projectTitle: "Portofolio Web Sinematik",
      description:
        "Portofolio React bergaya sinematik yang dirancang sebagai media utama personal branding. Menghadirkan animasi halus, parallax scrolling, dan aksen visual modern untuk menciptakan pengalaman yang profesional dan imersif.",
      points: [
        "Fokus pada UI/UX modern & storytelling visual",
        "Animasi interaktif menggunakan Framer Motion",
        "Struktur komponen rapi & scalable",
        "Merepresentasikan kualitas kerja frontend",
      ],
      tech: ["React", "Framer Motion", "Tailwind", "Vite"],
    },
    projects: {
      title: "Proyek",
      problemLabel: "Masalah",
      solutionLabel: "Solusi",
    },
    contact: {
      title: "Hubungi Saya",
    },

    language: "ID",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title1: "Full Stack Developer",
      title2: "Web Developer",
      subtitle: "Focused on building web applications that are",
      subtitleBold1: "efficient",
      subtitleBold2: "well-structured",
      subtitleBold3: "scalable",
      email: "Email Me",
      resume: "View Resume",
    },
    about: {
      title: "About Me",
      description:
        "I am a junior Full Stack Web Developer with a strong interest in building web applications from both frontend and backend perspectives. I have experience working on real-world projects using CodeIgniter and actively explore modern technologies such as Laravel and React through personal projects.",
    },
    experience: {
      title: "Experience",
      features: "Key features:",
      items: [
        {
          title: "ERP Software – Real Project (Team)",
          period: "2024 – 2025",
          features: [
            "Project management",
            "Sales & purchase management",
            "Inventory system",
            "Real-time reports",
          ],
        },
        {
          title:
            "PAUD Management System & Child Monitoring – Final Project (CodeIgniter)",
          period: "2025",
          features: [
            "Child development dashboard with charts",
            "Student, teacher & user management",
            "Development assessment system",
            "Attendance & activity scheduling",
            "Monthly & yearly reports",
            "Role & permission system",
          ],
        },
        {
          title:
            "Purchase Admin & AI Chatbot – Personal Project (Node.js)",
          period: "2025",
          features: [
            "Product & stock CRUD",
            "Automated purchase input & cancellation",
            "MySQL purchase history",
            "AI Chatbot (Ollama)",
            "REST API & modular backend",
          ],
        },
        {
          title: "Activity Dashboard – Personal Project (Laravel)",
          period: "2025",
          features: [
            "Activity filtering by date & action",
            "Daily activity charts",
            "Top 5 most active users",
            "Query optimization & backend–frontend integration",
          ],
        },
      ],
    },

    featuredProject: {
      title: "Featured Project",
      projectTitle: "Cinematic Web Portfolio",
      description:
        "A cinematic-style React portfolio designed as a primary personal branding platform. It features smooth animations, parallax scrolling, and modern visual accents to deliver a professional and immersive experience.",
      points: [
        "Strong focus on modern UI/UX & visual storytelling",
        "Interactive animations powered by Framer Motion",
        "Clean and scalable component architecture",
        "Represents high-quality frontend craftsmanship",
      ],
      tech: ["React", "Framer Motion", "Tailwind", "Vite"],
    },
    projects: {
      title: "Projects",
      problemLabel: "Problem",
      solutionLabel: "Solution",
    },
    contact: {
      title: "Get in Touch",
    },
    language: "EN",
  },
};
