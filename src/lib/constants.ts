// Official social links (verified from Notion)
export const SOCIAL_LINKS = {
  github: "https://github.com/uxzwal",
  linkedin: "https://linkedin.com/in/uxzwal",
  twitter: "https://x.com/uxzwalll",
  tumblr: "https://www.tumblr.com/blog/uxzwal",
  quora: "https://www.quora.com/profile/Ujjwal-1020",
  devto: "https://dev.to/uxzwal",
  facebook: "https://www.facebook.com/profile.php?id=100070625400647",
  instagram: "https://www.instagram.com/uxzwal/",
  reddit: "https://www.reddit.com/user/elliot_harrold/",
  email: "iamkashyup@gmail.com",
} as const;

// Personal info
export const PERSONAL_INFO = {
  name: "Ujjwal Kumar",
  title: "Intermediate DevOps Engineer | Building Scalable & Automated Systems",
  tagline: "Crafting efficient systems with a focus on performance, automation, and real-world problem solving",
  education: "BCA (2025-2028)",
  email: SOCIAL_LINKS.email,
} as const;

// DevOps Roadmap Levels
export const ROADMAP_LEVELS = [
  {
    level: 1,
    title: "DevOps Pre-Requisites",
    description: "Building the foundation",
    status: "learning" as const,
    topics: [
      { name: "OS & Linux Fundamentals", status: "learning" },
      { name: "Networking Basics", status: "learning" },
      { name: "Git & GitHub", status: "intermediate" },
      { name: "Build & Package Management", status: "beginner" },
    ],
  },
  {
    level: 2,
    title: "DevOps Fundamentals",
    description: "Core concepts and tools",
    status: "beginner" as const,
    topics: [
      { name: "Cloud Computing Basics", status: "beginner" },
      { name: "Infrastructure as a Service (IaaS)", status: "beginner" },
      { name: "Artifact Repositories", status: "beginner" },
      { name: "Containers & Docker", status: "learning" },
    ],
  },
  {
    level: 3,
    title: "DevOps Core",
    description: "CI/CD and orchestration",
    status: "beginner" as const,
    topics: [
      { name: "CI/CD Concepts", status: "beginner" },
      { name: "Jenkins Fundamentals", status: "beginner" },
      { name: "AWS Core Services", status: "beginner" },
      { name: "Kubernetes Basics", status: "beginner" },
    ],
  },
  {
    level: 4,
    title: "DevOps Advanced",
    description: "Infrastructure as Code & Automation",
    status: "upcoming" as const,
    topics: [
      { name: "Terraform (IaC)", status: "upcoming" },
      { name: "Python for Automation", status: "beginner" },
      { name: "Ansible (Configuration Management)", status: "upcoming" },
      { name: "Prometheus & Grafana (Monitoring)", status: "upcoming" },
    ],
  },
] as const;

// DevOps Tools
export const DEVOPS_TOOLS = [
  { name: "Linux", color: "#FCC624", level: "learning" as const },
  { name: "Git", color: "#F05032", level: "intermediate" as const },
  { name: "GitHub", color: "#F0F6FC", level: "intermediate" as const },
  { name: "Docker", color: "#2496ED", level: "learning" as const },
  { name: "Kubernetes", color: "#326CE5", level: "beginner" as const },
  { name: "AWS", color: "#FF9900", level: "beginner" as const },
  { name: "Jenkins", color: "#D24939", level: "beginner" as const },
  { name: "Terraform", color: "#7B42BC", level: "beginner" as const },
  { name: "Ansible", color: "#EE0000", level: "beginner" as const },
  { name: "Python", color: "#3776AB", level: "beginner" as const },
  { name: "Prometheus", color: "#E6522C", level: "beginner" as const },
  { name: "Grafana", color: "#F46800", level: "beginner" as const },
] as const;

// Core Skills
export const CORE_SKILLS = [
  { name: "Linux Administration", progress: 45 },
  { name: "Git & Version Control", progress: 70 },
  { name: "Docker Containerization", progress: 40 },
  { name: "Kubernetes Orchestration", progress: 25 },
  { name: "AWS Cloud Services", progress: 30 },
  { name: "CI/CD Pipelines", progress: 35 },
  { name: "Infrastructure as Code", progress: 20 },
  { name: "Monitoring & Observability", progress: 20 },
] as const;