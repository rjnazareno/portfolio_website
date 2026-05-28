export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineEntry[] = [
  {
    year: "2023",
    title: "Started Learning Web Development",
    description:
      "Began my journey with HTML, CSS, JavaScript, and Python, building strong fundamentals through small projects, practice layouts, and early programming exercises.",
  },
  {
    year: "2024",
    title: "Learned React & Full Stack",
    description:
      "Dove into React, Node.js, and databases. Built my first full-stack projects and deployed them.",
  },
  {
    year: "2025",
    title: "Internship & Real-World Systems",
    description:
      "Interned at RSS Pelozden, a BPO company in Clark, Pampanga, where I built HARLEY, my biggest project so far, and learned to manage domains, databases, deployments, and production workflows.",
  },
  {
    year: "2026",
    title: "Junior Web Developer",
    description:
      "Hired as a part-time Junior Software Developer at RSS, continuing to build real-world projects including a ticketing system and an inventory system.",
  },
];

export default timeline;
