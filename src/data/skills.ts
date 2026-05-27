export interface Skill {
  name: string;
  icon: string; // react-icons import name or image path
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Vite", icon: "SiVite" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "HTML/CSS", icon: "SiHtml5" },
      { name: "Flutter", icon: "SiFlutter" },
      { name: "Responsive UI Design", icon: "SiCss3" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "REST APIs", icon: "SiNodedotjs" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "PHP", icon: "SiPhp" },
      { name: "Python", icon: "SiPython" },
      { name: "Authentication Systems", icon: "SiFirebase" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Firebase Firestore", icon: "SiFirebase" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "GitHub", icon: "SiGithub" },
      { name: "Git", icon: "SiGit" },
      { name: "Cloudinary", icon: "SiCloudinary" },
      { name: "PhpSpreadsheet", icon: "SiPhp" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "Hostinger", icon: "SiHostinger" },
      { name: "Firebase Console", icon: "SiFirebase" },
    ],
  },
];

export default skills;
