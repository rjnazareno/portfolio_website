export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack web application with modern UI, authentication, and real-time features.",
    image: "/projects/project1.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "An interactive platform with responsive design and seamless user experience.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "A performant dashboard application with data visualization and analytics.",
    image: "/projects/project3.png",
    tags: ["Next.js", "Prisma", "Tailwind", "Vercel"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export default projects;
