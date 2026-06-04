export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  bulletPoints: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  impact?: string;
  category: "Data Analytics" | "ML & Academic" | "Web & Mobile" | "IoT";
}

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: "Programming & ML" | "Web Development" | "Data Analysis" | "Visualization" | "IoT & Tools";
  iconName?: string;
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
  category: "Professional" | "Academic & Research" | "Content Creation";
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  gpaScale: string;
  field?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  description: string;
  date?: string;
  credentialUrl?: string;
}

export interface Language {
  name: string;
  proficiency: string; // e.g., "Native", "Proficient"
}
