export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  highlights?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Harley HRIS System",
    description:
      "A PHP/MySQL HRIS platform for timekeeping, leave and overtime approvals, schedules, and payroll-ready reporting.",
    image: "/projects/HARLEY_thumbnail.png",
    tags: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "PhpSpreadsheet"],
    highlights: [
      "Time in/out tracking with Manila timezone, overnight shifts, and attendance statuses.",
      "Leave, overtime, time adjustment, and schedule request approval workflows.",
      "Admin dashboard and Excel reports for attendance, leave, overtime, and payroll.",
    ],
    liveUrl: "https://harley.resourcestaffonline.com/demo",
  },
  {
    title: "UAmatch",
    description:
      "A Flutter dating app for the UA community with swipe discovery, mutual matches, real-time chat, rich profiles, and Firebase-backed live data.",
    image: "/projects/project2.png",
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "Cloudinary", "Riverpod"],
  },
  {
    title: "SouqIntel",
    description:
      "A full-stack perfume discovery app that helps users find affordable Middle Eastern dupes for designer fragrances.",
    image: "/projects/uamatch/souqintel%20.png",
    tags: ["React", "Vite", "Express", "MongoDB", "OpenAI"],
    highlights: [
      "Searchable catalog with browse filters, perfume detail pages, brands, notes, dupes, and shareable query URLs.",
      "Express/MongoDB REST API with Mongoose models, JWT auth, text search, and seeded fragrance data.",
    ],
    liveUrl: "https://souq-intel.vercel.app/",
  },
];

export default projects;
