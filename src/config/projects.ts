export const projectsConfig = {
  title: "My Projects",
  description: "Kumpulan tugas akademik dan proyek personal yang mendemonstrasikan pemahaman saya di bidang rekayasa perangkat lunak dan kecerdasan buatan.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "Konsep Chatbot AI Asisten Hukum",
      description: "Makalah akademik dan perancangan sistem chatbot AI yang didasarkan pada tiga jurnal paper terkemuka, dirancang untuk memudahkan masyarakat mengakses informasi hukum.",
      href: "/projects/ai-legal-assistant",
      imageUrl: "/assets/images/projects/project1.jpg"
    },
    {
      title: "Academic Environment Automator",
      description: "Sistem skrip PowerShell yang secara otomatis membuat hierarki folder terstruktur (C:/FAGT/UNTAR/) untuk menyimpan materi, kuis, UTS, dan UAS per semester.",
      href: "/projects/powershell-script",
      imageUrl: "/assets/images/projects/project2.jpg"
    },
    {
      title: "VS Code Profile Manager",
      description: "Prompting dan konfigurasi pengembangan environment IDE untuk 4 jenis proyek berbeda (C++, Java, Python, Web) menggunakan basis ekstensi Ayu dan Material Icon Theme.",
      href: "/projects/vscode-profiles",
      imageUrl: "/assets/images/projects/project3.png"
    }
  ]
} as const;
