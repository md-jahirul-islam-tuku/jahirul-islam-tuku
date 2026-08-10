import { Project, Skill, Experience, Education } from "./types";

export const PERSONAL_DETAILS = {
  name: "Md Jahirul Islam Tuku",
  title: "Full-Stack Web Developer",
  location: "Dhaka, Bangladesh",
  origin: "Bangladesh",
  email: "mdjahirulislamtuku@gmail.com",
  github: "https://github.com/md-jahirul-islam-tuku",
  linkedin: "https://www.linkedin.com/in/md-jahirul-islam-tuku", // Placeholder
};

export const PROJECTS: Project[] = [
  {
    title: "GearUp",

    description:
      "GearUp is a full-stack gear rental platform where customers can browse and rent equipment, select rental dates, manage their rental orders, make secure online payments, track rental status, and leave reviews after returning gear. The platform also provides dedicated dashboards for customers, providers, and administrators to manage rentals, gear inventory, payments, and platform activities.",

    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Stripe",
    ],

    githubLinkFrontend:
      "https://github.com/md-jahirul-islam-tuku/gearup-frontend",

    githubLinkBackend:
      "https://github.com/md-jahirul-islam-tuku/gearup-backend",

    liveLink: "https://gearup-frontend-blush.vercel.app/",

    image: "https://i.ibb.co.com/WWMKx3mF/Gear-Up.png",

    category: "Gear Rental",
  },
  {
    title: "SaadDentistry",
    description:
      "I'm excited to share one of my recent projects — a **Dental Doctor Appointment System** built using the MERN stack. The goal of this project was to create a complete online platform where patients can easily explore dental services, book appointments, and manage their bookings with a secure and user-friendly experience.",
    techStack: ["MERN", "TailwindCSS", "Firebase", "JWT", "React Stripe"],
    githubLinkFrontend:
      "https://github.com/md-jahirul-islam-tuku/saad-dentistry",
    githubLinkBackend:
      "https://github.com/Md-Jahirul-Islam-Tuku/saad-dentistry-server",
    liveLink: "https://saad-dentistry.netlify.app/",
    image: "https://i.ibb.co/JR6tfp6H/Saa-D-Dentistry.png",
    category: "Doctor appointment",
  },
];

// export const SKILLS: Skill[] = [
//   { name: "ReactJS", icon: "fab fa-react", level: 'Intermediate' },
//   { name: "NextJS", icon: "fas fa-n", level: 'Intermediate' },
//   { name: "TypeScript", icon: "fas fa-code", level: 'Intermediate' },
//   { name: "JavaScript", icon: "fab fa-js", level: 'Intermediate' },
//   { name: "NodeJS", icon: "fab fa-node-js", level: 'Junior' },
//   { name: "ExpressJS", icon: "fas fa-server", level: 'Junior' },
//   { name: "MongoDB", icon: "fas fa-database", level: 'Junior' },
//   { name: "TailwindCSS", icon: "fas fa-wind", level: 'Expert' },
//   { name: "Redux", icon: "fas fa-layer-group", level: 'Intermediate' },
//   { name: "Git", icon: "fab fa-git-alt", level: 'Intermediate' },
//   { name: "Figma", icon: "fab fa-figma", level: 'Junior' },
//   { name: "Firebase", icon: "fas fa-fire", level: 'Junior' },
// ];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "ReactJS", icon: "fab fa-react", level: "Intermediate" },
  { name: "NextJS", icon: "fas fa-n", level: "Intermediate" },
  { name: "TypeScript", icon: "fas fa-code", level: "Intermediate" },
  { name: "JavaScript", icon: "fab fa-js", level: "Intermediate" },
  { name: "HTML5", icon: "fab fa-html5", level: "Intermediate" },
  { name: "CSS3", icon: "fab fa-css3-alt", level: "Intermediate" },
  { name: "TailwindCSS", icon: "fas fa-wind", level: "Expert" },
  { name: "DaisyUI", icon: "fas fa-layer-group", level: "Intermediate" },
  { name: "Shadcn/UI", icon: "fas fa-puzzle-piece", level: "Intermediate" },
  { name: "Headless UI", icon: "fas fa-cubes", level: "Intermediate" },
  { name: "Redux", icon: "fas fa-layer-group", level: "Intermediate" },
  { name: "TanStack Query", icon: "fas fa-database", level: "Intermediate" },
  { name: "Vite", icon: "fas fa-bolt", level: "Intermediate" },

  // Backend
  { name: "NodeJS", icon: "fab fa-node-js", level: "Junior" },
  { name: "ExpressJS", icon: "fas fa-server", level: "Junior" },
  { name: "REST API", icon: "fas fa-plug", level: "Intermediate" },
  { name: "Axios", icon: "fas fa-exchange-alt", level: "Intermediate" },

  // Database & ORM
  { name: "MongoDB", icon: "fas fa-database", level: "Junior" },
  { name: "PostgreSQL", icon: "fas fa-database", level: "Junior" },
  { name: "Prisma ORM", icon: "fas fa-database", level: "Junior" },

  // Authentication & Security
  { name: "JWT", icon: "fas fa-key", level: "Intermediate" },
  { name: "Firebase Auth", icon: "fas fa-fire", level: "Junior" },
  { name: "Bcrypt", icon: "fas fa-lock", level: "Junior" },

  // Payment & Services
  { name: "Stripe", icon: "fas fa-credit-card", level: "Junior" },
  { name: "Cloudinary", icon: "fas fa-cloud", level: "Junior" },
  { name: "ImgBB", icon: "fas fa-image", level: "Junior" },

  // Validation
  { name: "Zod", icon: "fas fa-check-circle", level: "Junior" },

  // Tools
  { name: "Git", icon: "fab fa-git-alt", level: "Intermediate" },
  { name: "GitHub", icon: "fab fa-github", level: "Intermediate" },
  { name: "VS Code", icon: "fas fa-code", level: "Expert" },
  { name: "Figma", icon: "fab fa-figma", level: "Junior" },

  // Other
  { name: "Firebase", icon: "fas fa-fire", level: "Junior" },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Full-Stack Developer (Self-Directed)",
    company: "Independent Learning & Project Development",
    period: "2022 - Present",
    description: [
      "Continuously developed frontend and backend skills through hands-on projects and structured learning.",
      "Built full-stack web applications using React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, MongoDB, and Prisma.",
      "Implemented REST APIs, authentication with JWT, data validation with Zod, state management with Redux, and payment integration with Stripe.",
    ],
  },

  {
    role: "Ticketing & Investor Executive",
    company: "Bin Mishal Travel & Tourism, KSA",
    period: "2024 - 2026",
    description: [
      "Managing complex booking systems and customer relations in a high-pressure environment.",
      "Applying organizational and problem-solving skills to streamline travel workflows.",
      "Simultaneously studying and practicing full-stack development to facilitate a career transition.",
    ],
  },
  {
    role: "Journalist",
    company: "Asian Television, BD",
    period: "2010 - 2024",
    description: [
      "Reporting and producing accurate news stories from the Barishal region under tight deadlines.",
      "Coordinating with editors and news teams to cover breaking news, events, and investigative reports.",
      "Applying strong research, communication, and field-reporting skills to deliver credible and impactful journalism.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Complete Web Development Course (Batch 07)",
    institution: "Programming Hero, Bangladesh",
    year: "2022",
    details:
      "Earned Certificate of Achievement for successful completion. Rigorous training in JavaScript, HTML, CSS, and React. Verified skills in building modern web applications.",
  },
  {
    degree: "Master of Social Sciences",
    institution: "Institutions in Bangladesh",
    year: "Prior to 2014",
    details:
      "It covers disciplines within the Faculty of Social Sciences, including International Relations, Sociology, Social Work, Population Sciences, Political Science, and Development Studies.",
  },
];

export const AI_TEXT_CONTENT = {
  resumeSummary:
    "Motivated Full-Stack Web Developer with hands-on experience building modern, responsive, and user-focused web applications. Skilled in React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma, MongoDB, JWT authentication, and Stripe integration. Built full-stack projects including GearUp, a gear rental platform with role-based dashboards, rental management, payment integration, and review functionality, and SaaD Dentistry, a dental service and appointment platform. Passionate about writing clean, maintainable code, solving real-world problems, and continuously improving development skills. Seeking a Junior Full-Stack or Frontend Developer opportunity to contribute to a professional development team.",

  linkedInAbout:
    "🚀 Full-Stack Web Developer | React | Next.js | TypeScript | Node.js\n\nI’m Md. Jahirul Islam Tuku, a passionate Full-Stack Web Developer focused on building modern, responsive, and user-friendly web applications.\n\nI enjoy turning ideas into practical products and continuously improving my skills through hands-on project development. My current focus includes React, Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma, MongoDB, JWT authentication, REST APIs, and Stripe payment integration.\n\nOne of my recent projects, GearUp, is a full-stack gear rental platform featuring Customer, Provider, and Admin roles, rental order management, availability and filtering, payment integration, status tracking, dashboards, and post-rental reviews. I have also built SaaD Dentistry, a full-stack dental service and appointment platform with authentication, appointment booking, reviews, and admin management.\n\nI’m particularly interested in writing clean, maintainable code, designing reliable APIs, working with relational databases, and building intuitive user experiences. I’m continuously learning and improving through real-world projects and practical problem solving.\n\n💻 Tech Stack:\nReact.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, PostgreSQL, Prisma, MongoDB, JWT, Stripe, Tailwind CSS, Git & GitHub\n\n🎯 Currently seeking opportunities as a Junior Full-Stack or Frontend Developer where I can contribute to a professional team, learn from experienced developers, and build meaningful products.",
};
