export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  meta: string;
  highlights: string[];
}

const timeline: TimelineEntry[] = [
  {
    period: "Jul 2026 – Present",
    role: "Web Developer",
    company: "Resource Staffing Solutions (RSS)",
    meta: "Full-time · Clark, Pampanga",
    highlights: [
      "Lead the consolidation of Harley from a standalone HRIS into a centralized internal platform (Laravel, React, PostgreSQL) used by 150+ employees, bringing timekeeping, inventory, procurement, and ticketing onto shared user accounts, roles, and data.",
      "Automated the full asset lifecycle, from purchase order to assignment and accountability, giving the company a single record of where each asset is and who is responsible for it.",
      "Overhauled the ticketing system with SLA tracking, giving management measurable response and resolution times for every employee ticket.",
      "Accelerate delivery with AI coding assistants (Claude, OpenAI Codex) for module planning, data modeling, and debugging, reviewing and testing every change before release.",
    ],
  },
  {
    period: "2026",
    role: "Freelance Full-Stack Developer",
    company: "Ghost AI Solutions",
    meta: "Freelance · Remote",
    highlights: [
      "Built a custom CRM (Laravel, PostgreSQL) that captures leads from the client's website and tracks each one from first inquiry to completed job.",
      "Automated free-estimate delivery to prospective customers and converted accepted estimates directly into scheduled jobs without re-entering data.",
      "Implemented geolocation-verified clock-in (Geolocation API) to confirm employees are on site when they start work.",
      "Added post-job checklists and receipts, giving the business a documented record of every job from lead to receipt.",
    ],
  },
  {
    period: "Aug 2025 – Jun 2026",
    role: "Junior Web Developer",
    company: "Resource Staffing Solutions (RSS)",
    meta: "Consultant, part-time · Clark, Pampanga",
    highlights: [
      "Built Harley, the company's web-based HRIS (PHP, Laravel, React, JavaScript, MySQL, Tailwind CSS), starting with timekeeping: attendance, schedules, and leave and overtime requests.",
      "Designed approval workflows with role-based access control and secure request validation, limiting each user to the data and actions their role allows.",
      "Automated payroll-ready attendance reports and Excel exports (PhpSpreadsheet), giving payroll a single system-generated source of attendance data.",
      "Built admin dashboards for attendance summaries, employee activity, and HR operations, plus an internal ticketing system where employees submit and track concerns.",
    ],
  },
];

export default timeline;
