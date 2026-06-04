import { Project, Skill, Experience, Education, Certification, Language } from "./types";

export const PERSONAL_INFO = {
  name: "Alif Al Fahim",
  title: "Aspiring Data Analyst & CSE Undergraduate",
  location: "Savar, Dhaka, Bangladesh",
  email: "alfahim116@gmail.com",
  phone: "01641582152",
  phoneFull: "+8801641582152",
  linkedin: "https://www.linkedin.com/in/alif-al-fahim-505008326/",
  github: "https://github.com/Alif-Al-Fahim",
  summary: "Undergraduate student in Computer Science & Engineering who loves analyzing data, creating easy-to-use software, and building dashboards. Practical experience in making web and mobile applications, conducting collaborative research, and solving real-world problems. Experienced in Python, SQL, and creating visual reports that help businesses make better decisions."
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "saas-sales-dashboard",
    title: "SaaS Sales Analytics Dashboard",
    subtitle: "Interactive Sales Intelligence Portfolio",
    description: "An interactive visual dashboard designed for business owners to track sales, monthly subscription revenue, customer growth, and business trends in one place.",
    bulletPoints: [
      "Created beautiful, interactive visual reports to help businesses track regular monthly income, annual trends, and customer purchase values.",
      "Wrote scripts to format and clean messy raw sales sheets automatically, correcting raw currency values and missing customer files.",
      "Designed easy-to-read charts showing monthly income growth and highlights showing when or why clients might stop their subscriptions."
    ],
    techStack: ["Python", "Pandas", "Power BI", "Excel", "SQL", "Matplotlib"],
    githubUrl: "https://github.com/Alif-Al-Fahim/saas-sales-dashboard",
    impact: "Helps managers spot dropping sales instantly, letting them reach out to at-risk clients quickly to improve customer loyalty.",
    category: "Data Analytics"
  },
  {
    id: "flood-risk-analytics",
    title: "Bangladesh Flood Risk Analytics",
    subtitle: "Interactive Climate & Spatial Analytics",
    description: "An analysis tool that pulls together weather data and map coordinates to track and visualize flood risks and seasonal safety levels across Bangladesh's districts.",
    bulletPoints: [
      "Collected and organized years of raw weather information (rainfall records, river water levels, and map coordinates) to measure flood risks across different regions of Bangladesh.",
      "Analyzed the weather dataset to find trends and prepare clear reports about which districts are most vulnerable during monsoon season.",
      "Built beautiful maps and visual dashboards that pinpoint flood-prone areas, showing exactly how heavy rain affects the frequency of floods."
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Geospatial Data", "Scikit-Learn"],
    githubUrl: "https://github.com/Alif-Al-Fahim/Bangladesh-Flood-Risk-Analytics",
    impact: "Provides a simple, searchable system for researchers and volunteers to look up historical flood triggers and prepare for future monsoons.",
    category: "Data Analytics"
  },
  {
    id: "sharebox",
    title: "ShareBox",
    subtitle: "Tool Sharing & Renting cross-platform mobile ecosystem",
    description: "A friendly neighborhood app designed to let people rent and share everyday home and garden tools with one another, helping communities save money and reduce waste.",
    bulletPoints: [
      "Built cute, easy-to-use screens that work smoothly on both Android and Apple smartphones, as well as a clean admin management panel.",
      "Programmed the booking workflow so that items update instantly when someone reserves them, keeping the shared catalog perfectly up to date.",
      "Coordinated the project plan, user journey maps, and visual app structural charts to guide the team perfectly."
    ],
    techStack: ["Flutter", "Dart", "Firebase", "State Management", "SRS", "UML Diagrams"],
    githubUrl: "https://github.com/Alif-Al-Fahim/sharebox_flutter",
    impact: "Created a design that automatically adjusts to any phone screen size, supporting over 15 categories of sharing tools.",
    category: "Web & Mobile"
  },
  {
    id: "smart-parking",
    title: "Smart Parking System",
    subtitle: "IoT & Real-time Space Occupancy tracker",
    description: "A smart parking system that uses simple hardware sensors to detect empty parking spaces, showing drivers where they can park in real time without searching.",
    bulletPoints: [
      "Connected physical sensor parts (ultrasonic and infrared beams) to a tiny computer board to automatically check if a car is in a parking spot.",
      "Sent the spot sensor data up to a cloud-based server so drivers can see vacancies instantly on their smartphones.",
      "Designed a simple, interactive dashboard with colored boxes representing vacant vs. occupied spaces."
    ],
    techStack: ["ESP32", "Blynk", "Sensors", "Actuators", "C++", "IoT Protocols"],
    impact: "Saves drivers time and cuts down on parking lot traffic congestion by directing them straight to empty spots.",
    category: "IoT"
  },
  {
    id: "bd-quake-safety",
    title: "Earthquake Awareness & Reporting",
    subtitle: "Web-Based Disaster Reporting & Prep Platform",
    description: "A safety website where local residents can report minor tremors, find official emergency shelter spots, and learn how to prepare for earthquakes.",
    bulletPoints: [
      "Assembled the entire interactive website from scratch, creating a clean form database to store user reports securely.",
      "Built a community map where anyone can drop pins to flag damaged walls, request immediate aid, or share local updates.",
      "Put together an easy-to-read checklist of steps to take during earthquakes and a map of local emergency shelters."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Google Maps API"],
    impact: "Empowers neighborhoods with a one-click reporting button and lists of nearby safe houses/shelters.",
    category: "Web & Mobile"
  }
];

export const SKILLS_DATA: Skill[] = [
  // Programming & ML
  { name: "Python", level: 90, category: "Programming & ML" },
  { name: "C / C++", level: 85, category: "Programming & ML" },
  { name: "Java", level: 80, category: "Programming & ML" },
  { name: "Machine Learning", level: 75, category: "Programming & ML" },
  { name: "Problem Solving", level: 85, category: "Programming & ML" },
  
  // Web Development
  { name: "HTML / CSS", level: 95, category: "Web Development" },
  { name: "JavaScript / React", level: 85, category: "Web Development" },
  { name: "PHP", level: 75, category: "Web Development" },
  { name: "Tailwind CSS", level: 90, category: "Web Development" },

  // Data Analysis
  { name: "Pandas", level: 92, category: "Data Analysis" },
  { name: "NumPy", level: 88, category: "Data Analysis" },
  { name: "Data Cleaning", level: 90, category: "Data Analysis" },
  { name: "EDA", level: 92, category: "Data Analysis" },
  { name: "SQL (MySQL)", level: 85, category: "Data Analysis" },

  // Visualization
  { name: "Power BI", level: 88, category: "Visualization" },
  { name: "Excel Dashboarding", level: 90, category: "Visualization" },
  { name: "Matplotlib & Seaborn", level: 88, category: "Visualization" },

  // IoT & Tools
  { name: "ESP32 / IoT", level: 80, category: "IoT & Tools" },
  { name: "Git", level: 82, category: "IoT & Tools" },
  { name: "Jupyter Notebook", level: 90, category: "IoT & Tools" },
  { name: "Postman", level: 85, category: "IoT & Tools" },
  { name: "Dart & Flutter", level: 80, category: "IoT & Tools" }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Research Assistant / Machine Learning Researcher",
    company: "Academic Project (Daffodil International University)",
    period: "2025 – Present",
    bullets: [
      "Conducting collaborative research with senior professors, focusing on streamlining smart computer models to run faster and use less computing memory.",
      "Analyzing large sets of images and database rows to find trends and evaluate how accurately different programs can categorize them.",
      "Co-writing a comprehensive research article that compares different modern software models and documents current challenges in the field."
    ],
    category: "Academic & Research"
  },
  {
    role: "Virtual Operations Assistant",
    company: "Amena Model School",
    period: "2022 – Present",
    bullets: [
      "Managed the school's digital tools, portals, and online classrooms, ensuring lessons ran smoothly for teachers and students alike.",
      "Provided friendly support to teachers and students, helping them set up video calls, resolve log-in issues, and configure educational software.",
      "Monitored digital sessions to solve audio-visual problems instantly, preventing disruptions during active classes."
    ],
    category: "Professional"
  },
  {
    role: "YouTube Content Creator",
    company: "Self-Employed (Tech & Educational Media)",
    period: "2023 – Present",
    bullets: [
      "Researched, wrote, and produced friendly, step-by-step videos that explain software tools and tech concepts to students.",
      "Used modern tools to build clean, high-quality audio recordings and visuals that make complex topics easy and fun to learn.",
      "Designed eye-catching previews, images, and graphics to help students discover and learn from my educational videos."
    ],
    category: "Content Creation"
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: "Daffodil International University",
    degree: "Bachelor of Science in Computer Science and Engineering",
    period: "2022 – June 2026",
    gpa: "3.74",
    gpaScale: "4.00",
    field: "Specialization in Data Analysis & AI Research"
  },
  {
    institution: "Savar Model College",
    degree: "Higher Secondary Certificate (HSC) - Science",
    period: "2019 – 2021",
    gpa: "5.00",
    gpaScale: "5.00",
    field: "Pre-Engineering & Mathematics Focus"
  },
  {
    institution: "BEPZA Public School",
    degree: "Secondary School Certificate (SSC) - Science",
    period: "2017 – 2019",
    gpa: "5.00",
    gpaScale: "5.00",
    field: "Science & Fundamental Calculus Focus"
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman Academy",
    description: "Built a solid understanding of how software systems talk to each other, testing procedures, and data transfer tools using Postman.",
    date: "2025"
  }
];

export const LANGUAGES_DATA: Language[] = [
  { name: "Bangla", proficiency: "Native" },
  { name: "English", proficiency: "Proficient" },
  { name: "Hindi", proficiency: "Proficient" }
];
