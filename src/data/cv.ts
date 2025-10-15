// Types
export type CvExperience = {
  date: string
  title: string
  company?: string
  description: string
  link?: string
}

export type CvProject = {
  title: string
  description: string
  image?: string
  link?: string
  demo?: string        // 👈 NUEVO
  github?: string
  tags?: string[]
  featured?: boolean
}

export type CvProfile = {
  name: string
  role: string
  location?: string
  email?: string
  linkedin?: string
  summary: string
}

export type CvData = {
  profile: CvProfile
  experiences: CvExperience[]
  projects: CvProject[]
  skills: string[]
  languages?: string[]
}

// Data
export const CV: CvData = {
  profile: {
    name: "Tomás Ruiz",
    role: "QA ANALYST · Full Stack Developer",
    location: "Buenos Aires, Argentina",
    email: "tomasruiz.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/tom%C3%A1s-ruiz-191752227",
    summary:
      "QA ANALYST at Outlier AI with a full-stack background. I lead evaluation workflows to ensure accuracy, relevance and consistency, and previously delivered systems for ANCAP using Symfony and JS. Comfortable across React, Python and SQL.",
  },
  experiences: [
    {
      date: "Mar 2024 – Present",
      title: "QA ANALYST - Latam Coder",
      company: "Outlier AI",
      description:
        "Ensure rigorous quality across training tasks and code to build robust AI using JavaScript, TypeScript, Python, and SQL; apply strict evaluations to verify accuracy and relevance; integrate human feedback to deepen contextual understanding; implement advanced language modeling strategies while collaborating with industry leaders to optimize performance.",
      link: "https://outlier.ai",
    },
    {
      date: "Apr 2023 – Mar 2024",
      title: "Full Stack Developer",
      company: "Ferraro Camacho",
      description:
        "Built a system for ANCAP using PHP, Symfony, Twig, jQuery and Bootstrap, reducing processing time by about 30% and improving operations.",
    },
    {
      date: "2019 – Apr 2023",
      title: "Full Stack Developer",
      company: "Freelance",
      description:
        "Designed and developed web interfaces, collaborated directly with clients, and prototyped solutions in Figma.",
    },
  ],
  projects: [
    {
      title: "EduNova – School Management Platform",
      featured: true,
      description:
        "SaaS platform for schools to centralize attendance, communication, payments, and reports with AI automation. Includes marketing landing, mailing system, and pilot program for institutions.",
      image: "/projects/edunova.png",
      link: "https://info.edunovaschool.org/",                // Landing (View Live)
      demo: "https://app.edunovaschool.org/login",            // 👈 Demo (View Demo)
      github: "https://github.com/tomas95-lab/Edunova-landing",
      tags: ["NEXT", "TAILWIND", "FIREBASE", "AI", "TYPE", "REACT"],
    },
    {
      title: "SitePilot — Next-Gen ERP System",
      description:
        "Cloud ERP for architecture/construction SMEs with dashboards, 3D viewer and an AI assistant.",
      image: "/projects/dashboard.png",
      link: "https://erp-demo-rzrt.vercel.app/",
      demo: "https://erp-demo-rzrt.vercel.app/",          // si el live ya es demo, lo repetimos
      github: "https://github.com/tomas95-lab/ERP_demo",
      tags: ["REACT", "FIREBASE", "TAILWIND", "AI", "3D"],
    },
    {
      title: "PilotSite – Landing",
      description: "Landing introducing SitePilot. Built with Astro and Tailwind.",
      image: "/projects/PILOT-LANDING.png",
      link: "https://landing-j8jkcx6hp-tomas95labs-projects.vercel.app/",
      github: "https://github.com/tomas95-lab/landing-ERP",
      tags: ["ASTROJS", "TAILWIND"],
    },
    {
      title: "Carpintería TIL",
      description:
        "Responsive site with carousel and gallery using HTML, CSS, Bootstrap and jQuery.",
      image: "/projects/TIL.png",
      link: "https://til-aofx3xp8t-tomas95labs-projects.vercel.app/",
      tags: ["HTML", "CSS", "BOOTSTRAP", "JQUERY", "JS"],
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "PHP",
    "SQL",
    "MySQL",
    "React",
    "Node.js",
    "Symfony",
    "jQuery",
    "Bootstrap",
    "TailwindCSS",
    "Twig",
    "Astro",
    "HTML",
    "CSS",
    "Git",
    "Excel",
    "PowerPoint",
  ],
  languages: ["Spanish (Native)", "English (Advanced)"],
}
