export interface Skill {
  name: string;
  icon?: string; // react-icons/si export name
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    title: "AI-Assisted Development",
    skills: [
      { name: "Claude", icon: "SiClaude" },
      { name: "OpenAI Codex", icon: "SiOpenai" },
      { name: "Ollama (local LLMs)", icon: "SiOllama" },
      { name: "OpenAI API", icon: "SiOpenai" },
    ],
  },
  {
    title: "Business Systems & Automation",
    skills: [
      { name: "HRIS" },
      { name: "CRM" },
      { name: "Inventory & Procurement" },
      { name: "Ticketing with SLA Tracking" },
      { name: "Approval Workflows" },
      { name: "Role-Based Access Control" },
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "PHP", icon: "SiPhp" },
      { name: "Laravel", icon: "SiLaravel" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "HTML/CSS", icon: "SiHtml5" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "React", icon: "SiReact" },
      { name: "Inertia.js", icon: "SiInertia" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "Flutter/Dart", icon: "SiFlutter" },
    ],
  },
  {
    title: "Data, APIs & Integrations",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Firebase (Auth, Firestore)", icon: "SiFirebase" },
      { name: "Redis", icon: "SiRedis" },
      { name: "REST APIs" },
      { name: "Geolocation API" },
      { name: "PhpSpreadsheet" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Linear", icon: "SiLinear" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Railway", icon: "SiRailway" },
      { name: "Vite", icon: "SiVite" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "Cloudinary", icon: "SiCloudinary" },
      { name: "Hostinger", icon: "SiHostinger" },
      { name: "PHPUnit" },
      { name: "Playwright" },
    ],
  },
];

export default skills;
