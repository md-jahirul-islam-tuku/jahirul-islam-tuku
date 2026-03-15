
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLinkFrontend: string;
  githubLinkBackend: string;
  liveLink?: string;
  image: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: 'Expert' | 'Intermediate' | 'Junior';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string;
}
