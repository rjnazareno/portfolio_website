export interface ProjectScreen {
  src: string;
  label: string;
  title: string;
  caption: string;
  group?: string;
  phone?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  context?: string;
  description: string;
  image: string;
  tags: string[];
  highlights?: string[];
  stats?: { value: string; label: string }[];
  screens?: ProjectScreen[];
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
}

const harley = "/projects/harley";
const crm = "/projects/crm";
const souq = "/projects/souqintel";

const projects: Project[] = [
  {
    slug: "harley",
    title: "Harley Platform",
    context: "Internal platform · Resource Staffing Solutions",
    description:
      "Three connected systems behind one sign-in for a staffing company: Harley for attendance, schedules and leave, Hdesk for ticketing with SLA deadlines, and Inventory for tagged assets, purchase orders and supplies.",
    image: `${harley}/harley-home.webp`,
    tags: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Redis", "Laravel Reverb", "Tailwind CSS", "Docker"],
    highlights: [
      "Schedules that work themselves out: weekly patterns, one-off overrides and each client account's holiday calendar combine into every employee's month.",
      "Leave credits that accrue monthly, and one HR approval queue for overtime, time corrections, shift swaps and leave, with the hours actually worked beside each claim.",
      "Hdesk gives every request a ticket number, an owner and SLA deadlines in Manila time. A broken-laptop ticket becomes a hardware swap in Inventory.",
      "Inventory counts equipment by asset tag, gets it signed for on screen, and runs purchase orders through an approval chain to a scanner-ready receiving bench.",
      "Live updates over WebSockets, access granted per app, and append-only approvals and signatures so any decision can be reconstructed later.",
      "A re-runnable import moved 14 record types off the legacy PHP systems. Shipped with Docker on a VPS with staging, backups and 1,800+ automated tests.",
    ],
    stats: [
      { value: "3", label: "apps behind one sign-in" },
      { value: "150+", label: "employees on the platform" },
      { value: "1,800+", label: "automated tests" },
      { value: "14", label: "record types migrated" },
    ],
    screens: [
      { group: "Harley", label: "Home", src: `${harley}/harley-home.webp`, title: "Employee home", caption: "Maria clocked in at 7:56 AM. Her shift, today's hours, upcoming holidays and the company feed are on one screen." },
      { group: "Harley", label: "Calendar", src: `${harley}/harley-calendar.webp`, title: "Calendar", caption: "Her month, resolved from her weekly pattern, one-off changes and the holiday calendar her client account follows." },
      { group: "Harley", label: "Timesheet", src: `${harley}/harley-timesheet.webp`, title: "Timesheet", caption: "Every clock-in and clock-out with hours rendered per day, payroll cut-off shortcuts and her attendance streak." },
      { group: "Harley", label: "Leave", src: `${harley}/harley-leave.webp`, title: "Leave", caption: "Balances for every leave type, each request with its status, and the leave policy in plain words." },
      { group: "Harley", label: "HR dashboard", src: `${harley}/admin-dashboard.webp`, title: "HR dashboard", caption: "Headcount and every queue waiting on HR: leave, schedule changes, overtime and time corrections." },
      { group: "Harley", label: "Overtime", src: `${harley}/admin-ot.webp`, title: "Overtime approvals", caption: "Each request shows the hours actually worked next to the hours claimed, and is approved or declined in one click." },
      { group: "Harley", label: "Directory", src: `${harley}/admin-directory.webp`, title: "Employee directory", caption: "Current and former staff, with logins created straight from the employee record." },
      { group: "Harley", label: "Dark mode", src: `${harley}/harley-home-dark.webp`, title: "Dark mode", caption: "Every screen ships in light and dark, switched from the top bar." },
      { group: "Hdesk", label: "Ticket", src: `${harley}/hdesk-ticket.webp`, title: "A ticket", caption: "Maria reported a flickering monitor at 9:12 AM and IT answered in 28 minutes. The thread sits beside the requester, the assignee and both deadline clocks." },
      { group: "Hdesk", label: "Queue", src: `${harley}/hdesk-tickets.webp`, title: "Ticket queue", caption: "The unassigned pool, my tickets and the full list, with priority, status and deadline on every row." },
      { group: "Hdesk", label: "Dashboard", src: `${harley}/hdesk-dashboard.webp`, title: "Help desk dashboard", caption: "Open tickets by state, the ones past their deadline, a 7-day workload trend and this month's SLA." },
      { group: "Hdesk", label: "SLA report", src: `${harley}/hdesk-sla.webp`, title: "SLA performance", caption: "Response and resolution rates for the department, day by day, with the categories driving the volume." },
      { group: "Inventory", label: "Dashboard", src: `${harley}/inv-home.webp`, title: "Inventory dashboard", caption: "What needs restocking, where every tagged unit is, and the purchase orders still in flight." },
      { group: "Inventory", label: "Assets", src: `${harley}/inv-assets.webp`, title: "Asset register", caption: "Each model with its tagged units: who holds each laptop, its serial number and its status." },
      { group: "Inventory", label: "Accountability", src: `${harley}/inv-accountability.webp`, title: "Accountability forms", caption: "Equipment signed out per employee, and whether each person has signed their form yet." },
      { group: "Inventory", label: "Purchase orders", src: `${harley}/inv-po.webp`, title: "Purchase orders", caption: "The PO tracker beside one order's full record: who raised it, who still has to sign, and whether it's paid." },
      { group: "Inventory", label: "Receiving", src: `${harley}/inv-receiving.webp`, title: "Receiving bench", caption: "Pick a delivery, scan serials into the units the order owes, then save every tag at once." },
    ],
    featured: true,
  },
  {
    slug: "field-service-crm",
    title: "Field-Service CRM",
    context: "Freelance · Ghost AI Solutions",
    description:
      "One CRM that runs two home-services companies from a single login, taking each customer from a website enquiry to an estimate, a scheduled job, crew clock-in on site, and payment.",
    image: `${crm}/02-dashboard.png`,
    tags: ["Laravel", "PHP 8.4", "PostgreSQL", "Tailwind CSS", "Vite", "Geolocation API", "Railway"],
    highlights: [
      "Website enquiries land in a lead queue. Accepting one starts an estimate with good, better and best options that the customer picks from a link, and it becomes a job.",
      "Scheduling with crew assignment, double-booking checks, and staff shared across both brands, each with its own colors, logo and data.",
      "A phone view for the crew with directions, gate codes and checklists, plus location-checked clock-in that sends anything odd to an office review queue.",
      "Payments, tips split evenly across the crew, expenses with receipts, and profit reports.",
      "Owner, Admin and Crew roles. In production on Railway with 1,400+ automated tests running in CI.",
    ],
    stats: [
      { value: "2", label: "brands, each with its own look and data" },
      { value: "3", label: "roles: Owner, Admin, Crew" },
      { value: "1,400+", label: "automated tests" },
      { value: "Live", label: "in production for both companies" },
    ],
    screens: [
      { group: "Office", label: "Job record", src: `${crm}/04-job-record.png`, title: "Job record", caption: "An eight-step bar shows where the job stands, from quoted to paid. Price, crew, site map and the activity log sit on one screen." },
      { group: "Office", label: "Dashboard", src: `${crm}/02-dashboard.png`, title: "Dashboard", caption: "Open work, jobs missing a time slot or crew, completed jobs not yet paid, and new website leads." },
      { group: "Office", label: "Jobs board", src: `${crm}/03-jobs-board.png`, title: "Jobs board", caption: "Every job with its crew and status, plus tabs for jobs that need attention and closeouts left unfinished." },
      { group: "Office", label: "Schedule", src: `${crm}/09-schedule-week.png`, title: "Schedule", caption: "A week view by time or by employee, shown in the business's own time zone." },
      { group: "Office", label: "Estimate", src: `${crm}/14-estimate-record.png`, title: "Estimate", caption: "Good, better and best options with cost, price and margin on each. The customer picks one from a link, and it becomes a job." },
      { group: "Crew", label: "Today's jobs", src: `${crm}/30-field-schedule.png`, title: "Today's jobs", caption: "Crew members see only their own jobs, with directions, gate codes and checklists.", phone: true },
      { group: "Crew", label: "On the clock", src: `${crm}/31-field-job.png`, title: "On the clock", caption: "Location-checked clock-in and clock-out on site. It warns when a shift runs past its scheduled end.", phone: true },
    ],
    featured: true,
  },
  {
    slug: "souqintel",
    title: "SouqIntel",
    description:
      "An AI-assisted product discovery platform that helps shoppers find affordable Middle Eastern dupes for designer fragrances, with a shopping assistant running on a locally hosted language model.",
    image: `${souq}/hero.jpg`,
    tags: ["React", "Vite", "Express.js", "MongoDB", "Ollama"],
    highlights: [
      "AI shopping assistant on a locally hosted model (Ollama) that recommends products from user preferences, keeping user data in-house with no per-request API costs.",
      "Searchable catalog with browse filters, perfume detail pages, brands, notes, dupes, and shareable query URLs.",
      "Express REST API over a structured MongoDB catalog, with JWT auth and reusable React search and filter components.",
    ],
    stats: [
      { value: "138", label: "fragrances in the catalog" },
      { value: "66", label: "matched dupe pairs" },
      { value: "24", label: "trending in 2026" },
      { value: "93%", label: "biggest saving" },
    ],
    screens: [
      { group: "Desktop", label: "Home", src: `${souq}/hero.jpg`, title: "Home", caption: "The brand mark is a souq arch, so the hero is that arch at full size, framed in liquid gold and lit from inside. Each designer original stands next to its Middle Eastern dupe, and the pairs rotate on their own." },
      { group: "Desktop", label: "Pairs", src: `${souq}/pairs.jpg`, title: "Pair explorer", caption: "Pick a pair and the notes both perfumes share light up in gold. Althaïr and Liquid Brun have 7 of 8 notes in common." },
      { group: "Desktop", label: "Le Male pair", src: `${souq}/pairs-kingdom.jpg`, title: "Le Male Elixir and The Kingdom", caption: "Struck-through notes belong only to the original, and the plus notes are what the dupe adds." },
      { group: "Desktop", label: "Trending", src: `${souq}/trending.jpg`, title: "Trending in 2026", caption: "Viral Arabian gourmands and the year's designer launches, each with its own notes and image." },
      { group: "Desktop", label: "Families", src: `${souq}/families.jpg`, title: "Explore by family", caption: "A typographic index. Hovering a family brings up one of its bottles, which follows the cursor." },
      { group: "Desktop", label: "Collection", src: `${souq}/browse.jpg`, title: "Collection", caption: "Filter by family, type, price and gender, and sort trending scents first." },
      { group: "Desktop", label: "Dupe Finder", src: `${souq}/finder.jpg`, title: "Dupe Finder", caption: "Search an original and get its matches with similarity and savings: Le Male Elixir returns The Kingdom at an 80% match, 70% cheaper." },
      { group: "Desktop", label: "Detail", src: `${souq}/detail.jpg`, title: "Perfume detail", caption: "Every dupe links back to its original, and every original to its dupes." },
      { group: "Desktop", label: "Notes", src: `${souq}/notes.jpg`, title: "Note pyramid", caption: "Tiers widen from top to base, so the layout reads as the pyramid it describes." },
      { group: "Mobile", label: "Home", src: `${souq}/m-hero.jpg`, title: "Mobile home", caption: "The same composition with lighter machinery: a still gold arch in place of the shaders.", phone: true },
      { group: "Mobile", label: "Pairs", src: `${souq}/m-pairs.jpg`, title: "Mobile pair explorer", caption: "The same rotating pairs, with the notes they share lit in gold.", phone: true },
      { group: "Mobile", label: "Detail", src: `${souq}/m-detail.jpg`, title: "Mobile perfume detail", caption: "Khamrah's detail page on a phone.", phone: true },
    ],
    liveUrl: "https://souq-intel.vercel.app/",
  },
  {
    slug: "uamatch",
    title: "UAmatch",
    description:
      "A Flutter dating app for the UA community with swipe discovery, mutual matches, real-time chat, rich profiles, and Firebase-backed live data.",
    image: "/projects/uamatch/discover.png",
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "Cloudinary", "Riverpod"],
    highlights: [
      "Swipe-based discovery with match states and profile-first browsing for campus users.",
      "Real-time chat, rich profiles, and image handling backed by Firebase and Cloudinary.",
      "Riverpod state management for predictable app flows across discovery, likes, and messaging.",
    ],
  },
  {
    slug: "ssite",
    title: "SSITE Website",
    description:
      "A React/Vite organization website for SSITE with announcements, events, officer profiles, polls, member login, and Firebase-backed admin management.",
    image: "/projects/ssite_placeholder.png",
    tags: ["React", "Vite", "Firebase", "Firestore", "Tailwind CSS"],
    highlights: [
      "Public pages for announcements, events, officers, polls, contact, and membership entry points.",
      "Admin dashboard for managing organization content, member records, roles, messages, and analytics.",
      "Firebase and Firestore integration for authenticated workflows and live organization data.",
    ],
    liveUrl: "https://ssite-website.vercel.app/",
  },
];

export default projects;
