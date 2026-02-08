
import { Project, Skill, Experience, Education } from './types';

export const PERSONAL_DETAILS = {
  name: "Jahirul Islam Tuku",
  title: "Full-Stack Web Developer",
  location: "Medina, Saudi Arabia",
  origin: "Bangladesh",
  email: "mdjahirulislamtuku@gmail.com",
  github: "https://github.com/JI-TUKU",
  linkedin: "https://www.linkedin.com/in/jahirul-islam-tuku/", // Placeholder
};

export const PROJECTS: Project[] = [
  {
    title: "SaadDentistry",
    description: "You can know about SaaDDentistry A simple React app built with React, Firebase, express.js, Mongodb and React router dom about Dental Surgeon Dr. Saad Abdallah Al Mohaymin's personal dental services.",
    techStack: ["ReactJS", "TailwindCSS", "MongoDB", "ExpressJS"],
    githubLink: "https://github.com/Md-Jahirul-Islam-Tuku/saad-dentistry-server",
    liveLink: "https://saad-dentistry.web.app/",
    image: "https://i.ibb.co/ds7T4wHD/Saa-DDentistry.jpg",
    category: "Healthcare & Medical"
  },
  {
    title: "Camera Crew",
    description: "A Full-stack website built with React, Firebase, express.js, Mongodb and React router dom Camera about Sale Site name CameraCrew.",
    techStack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "React Stripe"],
    githubLink: "https://github.com/Md-Jahirul-Islam-Tuku/Camera-Crew",
    liveLink: "https://camera-crew.web.app/",
    image: "https://i.ibb.co/Xxc0Gj1n/camera-crew.png",
    category: "Electronics Services & Retail"
  },
];

export const SKILLS: Skill[] = [
  { name: "ReactJS", icon: "fab fa-react", level: 'Intermediate' },
  { name: "NextJS", icon: "fas fa-n", level: 'Intermediate' },
  { name: "TypeScript", icon: "fas fa-code", level: 'Intermediate' },
  { name: "JavaScript", icon: "fab fa-js", level: 'Intermediate' },
  { name: "NodeJS", icon: "fab fa-node-js", level: 'Junior' },
  { name: "ExpressJS", icon: "fas fa-server", level: 'Junior' },
  { name: "MongoDB", icon: "fas fa-database", level: 'Junior' },
  { name: "TailwindCSS", icon: "fas fa-wind", level: 'Expert' },
  { name: "Redux", icon: "fas fa-layer-group", level: 'Intermediate' },
  { name: "Git", icon: "fab fa-git-alt", level: 'Intermediate' },
  { name: "Figma", icon: "fab fa-figma", level: 'Junior' },
  { name: "Firebase", icon: "fas fa-fire", level: 'Junior' },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Full-Stack Developer (Self-Directed)",
    company: "Continuous Practice & Project Building",
    period: "2022 - Present",
    description: [
      "Dedicate ~4 hours daily to learning and refining web development skills.",
      "Developed and deployed 5+ full-stack projects using the MERN stack.",
      "Successfully integrated complex state management using Redux and specialized in responsive UI design with TailwindCSS."
    ]
  },
  {
    role: "Ticketing & Investor Executive",
    company: "Matin Haji Travel & Tourism, Madinah",
    period: "2024 - Present",
    description: [
      "Managing complex booking systems and customer relations in a high-pressure environment.",
      "Applying organizational and problem-solving skills to streamline travel workflows.",
      "Simultaneously studying and practicing full-stack development to facilitate a career transition."
    ]
  },
  {
    role: "Journalist",
    company: "Asian Television, BD",
    period: "2010 - 2024",
    description: [
      "Reporting and producing accurate news stories from the Barishal region under tight deadlines.",
      "Coordinating with editors and news teams to cover breaking news, events, and investigative reports.",
      "Applying strong research, communication, and field-reporting skills to deliver credible and impactful journalism."
    ]
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Complete Web Development Course (Batch 07)",
    institution: "Programming Hero, Bangladesh",
    year: "2022",
    details: "Earned Certificate of Achievement for successful completion. Rigorous training in JavaScript, HTML, CSS, and React. Verified skills in building modern web applications."
  },
  {
    degree: "Master of Social Sciences",
    institution: "Institutions in Bangladesh",
    year: "Prior to 2014",
    details: "It covers disciplines within the Faculty of Social Sciences, including International Relations, Sociology, Social Work, Population Sciences, Political Science, and Development Studies."
  }
];

export const AI_TEXT_CONTENT = {
  resumeSummary: "Dedicated and highly motivated Full-Stack Web Developer with 2+ years of continuous learning and hands-on practice. Certified by Programming Hero (Batch 07), I have built a diverse portfolio of projects ranging from E-commerce platforms to management dashboards. Currently balancing a professional role as a Ticketing Officer in Madinah with intensive daily coding practice. Ready to transition into a full-time development role where I can apply my expertise in React, Next.js, and Node.js to solve real-world problems.",
  linkedInAbout: "🚀 Passionate Full-Stack Developer | Transitioning from Travel Logistics to Tech | React & Next.js Specialist. \n\nI’m Md. Jahirul Islam Tuku, currently based in Madinah, Saudi Arabia. For the past two years, I’ve committed myself to the craft of web development, spending 4+ hours daily building, breaking, and improving digital experiences. \n\nWith a strong foundation in the MERN stack and a certification from Programming Hero (Batch 07), I thrive on creating clean, performant, and user-friendly interfaces. My background as a Ticketing Officer has honed my attention to detail and customer-centric approach, qualities I now bring to my coding projects. \n\nTech Stack: JavaScript (ES6+), TypeScript, React, Next.js, Node.js, Redux, MongoDB, TailwindCSS. \n\nI am actively seeking opportunities to join a forward-thinking team as a Junior Full-Stack Developer. Let’s build something great together!",
};
