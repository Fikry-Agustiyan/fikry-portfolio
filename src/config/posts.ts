import { Post } from '@/types/post';

export const postsConfig = {
  "title": "Blog Posts",
  "description": "Artikel, catatan belajar, dan dokumentasi teknis seputar perkuliahan IT dan teknologi.",
  "backButton": "Back to Home",
  "noPosts": "No posts found matching your search.",
  "searchPlaceholder": "Search posts by title...",
  "pagination": {
    "previous": "Previous",
    "next": "Next"
  },
  "posts": [
    {
      "title": "Merancang Asisten Hukum Berbasis AI",
      "description": "Catatan pengembangan makalah konseptual tentang chatbot hukum untuk mata kuliah Pengantar AI.",
      "date": "2026-03-09",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/ai-legal-assistant",
      "tags": ["AI", "Chatbot", "College", "Research"],
      "author": "Fikry Agustiyan",
      "readTime": "6",
      "content": "\n# Merancang Asisten Hukum Berbasis AI\n\nUntuk mata kuliah Pengantar AI, saya mengeksplorasi potensi kecerdasan buatan dalam memecahkan masalah aksesibilitas hukum di Indonesia. Proyek ini berbentuk perancangan konseptual chatbot...",
      "html": "<h1>Merancang Asisten Hukum Berbasis AI</h1>\n<p>Untuk mata kuliah Pengantar AI, saya mengeksplorasi potensi kecerdasan buatan dalam memecahkan masalah aksesibilitas hukum di Indonesia...</p>"
    },
    {
      "title": "Otomatisasi Struktur Folder Kuliah",
      "description": "Membuat skrip PowerShell untuk mengatur folder materi, tugas, dan ujian secara otomatis.",
      "date": "2026-03-01",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/powershell-folder-automation",
      "tags": ["PowerShell", "Productivity", "Scripting"],
      "author": "Fikry Agustiyan",
      "readTime": "4",
      "content": "\n# Otomatisasi Struktur Folder Kuliah\n\nMenjaga agar file perkuliahan tetap rapi adalah keharusan. Daripada membuat folder secara manual setiap semester, saya menyusun skrip PowerShell untuk *generate* folder `C:/FAGT/UNTAR/` beserta sub-foldernya secara otomatis.",
      "html": "<h1>Otomatisasi Struktur Folder Kuliah</h1>\n<p>Menjaga agar file perkuliahan tetap rapi adalah keharusan. Daripada membuat folder secara manual setiap semester, saya menyusun skrip PowerShell...</p>"
    }
  ]
} as const;
