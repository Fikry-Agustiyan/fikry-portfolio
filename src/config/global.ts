export const globalConfig = {
  site: {
    name: "Fikry's Portfolio",
    author: "Fikry",
    description: "Fikry portfolio website",
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
    copyright: "© 2025 Your Name. All rights reserved.",
    social: {
      twitter: "https://x.com/TencentCloudEO",
      github: "https://github.com/TencentEdgeOne",
      email: "media_service@tencent.com"
    }
  }
} as const; 
