export const siteConfig = {
  name: "Fikry's Portfolio",
  description: "Portofolio akademik dan proyek teknologi Fikry Agustiyan",
  nav: {
    home: "Home",
    posts: "Posts",
    projects: "Projects",
    about: "About"
  },
  home: {
    greeting: "Hello, I'm Fikry.",
    description: "Seorang mahasiswa Teknik Informatika di Universitas Tarumanagara (UNTAR) yang antusias terhadap Software Engineering dan Kecerdasan Buatan.",
    buttons: {
      viewProjects: "View Projects",
      readPosts: "Read Posts"
    }
  },
  projects: {
    title: "My Projects",
    description: "Kumpulan tugas, eksplorasi teknologi, dan rancangan sistem yang saya kembangkan selama masa perkuliahan.",
    backButton: "Back to Home",
    noProjects: "No projects found.",
    items: [
      {
        title: "Konsep AI Asisten Hukum",
        description: "Makalah konseptual tentang chatbot AI untuk memberikan layanan informasi hukum bagi masyarakat umum di Indonesia.",
        href: "/projects/ai-legal-assistant",
        imageUrl: "/assets/images/projects/ai-legal.png"
      },
      {
        title: "Workspace Automator",
        description: "Skrip PowerShell untuk mengotomatisasi pembuatan struktur folder kuliah secara sistematis (Materi, Teori, Praktikum, dll) di lokal drive.",
        href: "/projects/folder-automation",
        imageUrl: "/assets/images/projects/automation.png"
      },
      {
        title: "VS Code Multi-Profile Generator",
        description: "Konfigurasi terpadu untuk membuat 4 profil pengembangan (C++, Java, Python/SQL, Web) dengan ekstensi standar (Ayu, Indent Rainbow, Material Icon).",
        href: "/projects/vscode-profiles",
        imageUrl: "/assets/images/projects/vscode.png"
      }
    ]
  },
  posts: {
    title: "My Writing",
    description: "Catatan belajar, pemikiran tentang teknologi, dan dokumentasi proyek perkuliahan saya.",
    backButton: "Back to Home",
    noPosts: "No posts found matching your search.",
    searchPlaceholder: "Filter posts by title...",
    pagination: {
      previous: "Previous",
      next: "Next"
    },
    items: [
      {
        title: "Merancang Asisten Hukum Berbasis AI untuk Indonesia",
        description: "Eksplorasi literatur dan perancangan konseptual chatbot AI untuk mata kuliah Pengantar AI.",
        date: "Mar 09, 2026",
        href: "/post/ai-asisten-hukum",
        imageUrl: "/assets/images/posts/ai-law.jpg",
        readingTime: 6
      },
      {
        title: "Otomatisasi Folder Kuliah dengan PowerShell",
        description: "Cara saya mengatur folder lokal (Materi, Teori, Praktikum) secara rapi untuk setiap semester menggunakan satu skrip sederhana.",
        date: "Mar 01, 2026",
        href: "/post/powershell-folder-kuliah",
        imageUrl: "/assets/images/posts/powershell.jpg",
        readingTime: 4
      },
      {
        title: "Setup Produktivitas: 4 Profil VS Code untuk Mahasiswa IT",
        description: "Memisahkan environment untuk C++, Java, Python/SQL, dan Web dengan tema seragam agar fokus tetap terjaga.",
        date: "Feb 28, 2026",
        href: "/post/vscode-setup",
        imageUrl: "/assets/images/posts/vscode-setup.jpg",
        readingTime: 5
      }
    ]
  },
  about: {
    title: "About",
    description: "Kenali lebih jauh tentang latar belakang, pendidikan, dan minat saya.",
    backButton: "Back to Home"
  },
  theme: {
    dayMode: "Day mode",
    nightMode: "Night mode"
  }
} as const;
