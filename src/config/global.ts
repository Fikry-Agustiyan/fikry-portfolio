export const globalConfig = {
  site: {
    name: "Fikry's Portfolio",
    author: "Fikry Agustiyan",
    description: "Portofolio website mahasiswa Teknik Informatika",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Fikry Agustiyan. All rights reserved.",
    social: {
      twitter: "https://twitter.com/fikryagustiyan",
      github: "https://github.com/fikryagustiyan",
      email: "fikry@example.com"
    }
  }
} as const;
