// ============================================================
// Portfolio Data — All content centralized in one place
// ============================================================

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  roles: string[];
  bio: string;
  email: string;
  phone: string;
  location: string;
  birthday: string;
  education: {
    degree: string;
    institution: string;
    cgpa: string;
    graduationYear: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  resumeUrl: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  live?: string;
}

export interface Achievement {
  id: number;
  platform: string;
  title: string;
  description: string;
  rating?: string;
  date?: string;
  category: "competitive" | "certification";
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

// ─── Personal Info ───────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: "Sneh Kumar Daluka",
  firstName: "Sneh",
  title: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "Cloud & DevOps Engineer",
    "AI Enthusiast",
    "Competitive Programmer",
  ],
  bio: `I am a Computer Science and Engineering graduate from the Indian Institute of Information Technology Bhopal (CGPA 9.16), currently working as a Software Development Intern at Decision Point Private Limited. With a strong foundation in full-stack development, cloud infrastructure, and AI-driven solutions, I enjoy building scalable web applications and solving real-world problems through technology.`,
  email: "snehdaluka@gmail.com",
  phone: "+91 7544972548",
  location: "Gurugram, Haryana, India",
  birthday: "26 September 2002",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Indian Institute of Information Technology, Bhopal",
    cgpa: "9.16",
    graduationYear: "2025",
  },
  socials: {
    github: "https://github.com/SnehDaluka",
    linkedin: "https://www.linkedin.com/in/sneh-kumar-daluka-35904b249",
    twitter: "https://twitter.com/Sneh_Daluka",
    instagram: "https://www.instagram.com/sneh_daluka/",
  },
  resumeUrl: "/resume/Sneh_Kumar_Daluka_Resume.pdf",
};

// ─── Experience ──────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: 1,
    company: "Decision Point Private Limited",
    role: "Software Development Intern",
    period: "Feb 2026 – Present",
    location: "Gurugram, Haryana, India",
    highlights: [
      "Engineered an autonomous Databricks Genie AI skill that dynamically generates adaptive PySpark code to execute a comprehensive data profiling and quality engine",
      "Built responsive UI components using React.js and Material UI with seamless data flow",
      "Managed application state with Redux Toolkit for a 7-stage data profiling, quality, and correlation engine",
    ],
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Material UI",
      "PySpark",
      "Databricks",
    ],
  },
  {
    id: 2,
    company: "Samsung R&D Institute Delhi",
    role: "SDE Intern",
    period: "Jan 2025 – Jul 2025",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Architected CI/CD pipelines using Jenkins for 5 microservices, automating containerization and deployment to AWS ECS",
      "Provisioned 10+ AWS resources using AWS CDK, reducing release times by 40%",
      "Researched AI-driven web crawling and automated text summarization techniques, reducing manual effort by 70%",
      "Developed backend microservices with Spring Boot 3",
    ],
    techStack: [
      "Spring Boot 3",
      "AWS CDK",
      "AWS ECS",
      "Jenkins",
      "Docker",
    ],
  },
];

// ─── Skills ──────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
      "Bootstrap",
      "SCSS",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "NestJS"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS (CDK, ECS)", "Jenkins", "Docker", "Databricks", "PySpark"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: "Bookish Bliss",
    description:
      "A full-stack MERN application managing a live catalog of 4,600+ books with cart, checkout, and order history. Features a Collaborative Filtering algorithm for personalized recommendations, a dedicated 'Request a Book' portal, and data secured with bcrypt and HttpOnly JWT, with Redux Toolkit Query for API caching.",
    image: "/projects/bookish_bliss.png",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux Toolkit Query",
      "JWT",
    ],
    github: "https://github.com/SnehDaluka/bookish_bliss",
    live: "https://bookish-bliss-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Airport Management System",
    description:
      "An admin-based airport management system handling 50+ daily flights and 100+ passenger records using Node.js, Express.js, and MySQL. Optimized 30+ SQL queries and delivered the platform within 2 weeks as part of a 3-member team.",
    image: "/projects/airport_management_system.jpg",
    techStack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "EJS",
      "Bootstrap",
    ],
    github: "https://github.com/SnehDaluka/airport_management_system",
  },
  {
    id: 3,
    title: "Promptopia",
    description:
      "A modern web application built with Next.js for discovering and sharing AI prompts. Features Google OAuth authentication, CRUD operations, and a clean, responsive interface.",
    image: "/projects/promptopia.png",
    techStack: [
      "Next.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/SnehDaluka/promptopia_nextjs",
  },
];

// ─── Achievements ────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: 1,
    platform: "LeetCode",
    title: "Knight",
    description: "Top-tier algorithmic problem-solver on LeetCode",
    rating: "1935",
    category: "competitive",
  },
  {
    id: 2,
    platform: "Codeforces",
    title: "Specialist",
    description: "Competitive programming on Codeforces",
    rating: "1517",
    category: "competitive",
  },
  {
    id: 3,
    platform: "CodeChef",
    title: "3-Star Coder",
    description: "Consistent competitive programming performance",
    rating: "1794",
    category: "competitive",
  },
  {
    id: 4,
    platform: "CodeRush 2024",
    title: "Rank 15 / 500+",
    description: "Organized by Algo University",
    category: "competitive",
  },
  {
    id: 5,
    platform: "Udemy",
    title: "Web Developer Bootcamp 2024",
    description: "Colt Steele — HTML, CSS, JavaScript, Node.js & more",
    date: "March 2024",
    category: "certification",
  },
  {
    id: 6,
    platform: "Udemy",
    title: "Spring Boot 3 & Hibernate",
    description: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
    date: "March 2025",
    category: "certification",
  },
  {
    id: 7,
    platform: "Udemy",
    title: "Jenkins: CI/CD and DevOps",
    description: "Valentin Despa — Jenkins pipelines, jobs & DevOps",
    date: "May 2025",
    category: "certification",
  },
];

// ─── Nav Links ───────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
