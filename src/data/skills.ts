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
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss3" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Prisma", icon: "SiPrisma" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Figma", icon: "SiFigma" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "VS Code", icon: "VscCode" },
    ],
  },
];

export default skills;
