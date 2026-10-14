export interface ProjectScreen {
  src: string;
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
const sites = "/projects/crm/sites";
const souq = "/projects/souqintel";

const projects: Project[] = [
  {
    slug: "harley",
    title: "Harley Platform",
    context: "Internal platform · Resource Staffing Solutions",
    description:
      "Three connected apps behind one sign-in for a staffing company: Harley for attendance and leave, Hdesk for tickets, and Inventory for assets and purchase orders.",
    image: `${harley}/harley-home.webp`,
    tags: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Redis", "Laravel Reverb", "Tailwind CSS", "Docker"],
    highlights: [
      "Schedules built from weekly patterns, one-off changes and each client's holidays.",
      "One HR queue for leave, overtime and time corrections, with hours worked beside each claim.",
      "Tickets with SLA deadlines, assets signed for on screen, and purchase orders through an approval chain.",
    ],
    stats: [
      { value: "3", label: "apps behind one sign-in" },
      { value: "150+", label: "employees on the platform" },
      { value: "1,800+", label: "automated tests" },
      { value: "14", label: "record types migrated" },
    ],
    screens: [
      { group: "Harley", src: `${harley}/harley-home.webp`, title: "Employee home", caption: "Maria clocked in at 7:56 AM. Her shift, today's hours, upcoming holidays and the company feed are on one screen." },
      { group: "Harley", src: `${harley}/harley-calendar.webp`, title: "Calendar", caption: "Her month, resolved from her weekly pattern, one-off changes and the holiday calendar her client account follows." },
      { group: "Harley", src: `${harley}/harley-timesheet.webp`, title: "Timesheet", caption: "Every clock-in and clock-out with hours rendered per day, payroll cut-off shortcuts and her attendance streak." },
      { group: "Harley", src: `${harley}/harley-leave.webp`, title: "Leave", caption: "Balances for every leave type, each request with its status, and the leave policy in plain words." },
      { group: "Harley", src: `${harley}/admin-dashboard.webp`, title: "HR dashboard", caption: "Headcount and every queue waiting on HR: leave, schedule changes, overtime and time corrections." },
      { group: "Harley", src: `${harley}/admin-ot.webp`, title: "Overtime approvals", caption: "Each request shows the hours actually worked next to the hours claimed, and is approved or declined in one click." },
      { group: "Harley", src: `${harley}/admin-directory.webp`, title: "Employee directory", caption: "Current and former staff, with logins created straight from the employee record." },
      { group: "Harley", src: `${harley}/harley-home-dark.webp`, title: "Dark mode", caption: "Every screen ships in light and dark, switched from the top bar." },
      { group: "Hdesk", src: `${harley}/hdesk-ticket.webp`, title: "A ticket", caption: "Maria reported a flickering monitor at 9:12 AM and IT answered in 28 minutes. The thread sits beside the requester, the assignee and both deadline clocks." },
      { group: "Hdesk", src: `${harley}/hdesk-tickets.webp`, title: "Ticket queue", caption: "The unassigned pool, my tickets and the full list, with priority, status and deadline on every row." },
      { group: "Hdesk", src: `${harley}/hdesk-dashboard.webp`, title: "Help desk dashboard", caption: "Open tickets by state, the ones past their deadline, a 7-day workload trend and this month's SLA." },
      { group: "Hdesk", src: `${harley}/hdesk-sla.webp`, title: "SLA performance", caption: "Response and resolution rates for the department, day by day, with the categories driving the volume." },
      { group: "Inventory", src: `${harley}/inv-home.webp`, title: "Inventory dashboard", caption: "What needs restocking, where every tagged unit is, and the purchase orders still in flight." },
      { group: "Inventory", src: `${harley}/inv-assets.webp`, title: "Asset register", caption: "Each model with its tagged units: who holds each laptop, its serial number and its status." },
      { group: "Inventory", src: `${harley}/inv-accountability.webp`, title: "Accountability forms", caption: "Equipment signed out per employee, and whether each person has signed their form yet." },
      { group: "Inventory", src: `${harley}/inv-po.webp`, title: "Purchase orders", caption: "The PO tracker beside one order's full record: who raised it, who still has to sign, and whether it's paid." },
      { group: "Inventory", src: `${harley}/inv-receiving.webp`, title: "Receiving bench", caption: "Pick a delivery, scan serials into the units the order owes, then save every tag at once." },
    ],
    featured: true,
  },
  {
    slug: "field-service-crm",
    title: "Field-Service CRM",
    context: "Freelance · Ghost AI Solutions",
    description:
      "One CRM running two home-services companies, from website enquiry to estimate, scheduled job, crew clock-in and payment.",
    image: `${crm}/02-dashboard.png`,
    tags: ["Laravel", "PHP 8.4", "PostgreSQL", "Tailwind CSS", "Vite", "Geolocation API", "Railway"],
    highlights: [
      "Estimate requests from both company websites land in a lead queue and become jobs once accepted.",
      "Scheduling with crew assignment, double-booking checks and a phone view for the crew.",
      "Location-checked clock-in, crew tips, expenses and profit reports.",
    ],
    stats: [
      { value: "2", label: "brands, each with its own look and data" },
      { value: "3", label: "roles: Owner, Admin, Crew" },
      { value: "1,400+", label: "automated tests" },
      { value: "Live", label: "in production for both companies" },
    ],
    screens: [
      { group: "Office", src: `${crm}/04-job-record.png`, title: "Job record", caption: "An eight-step bar shows where the job stands, from quoted to paid. Price, crew, site map and the activity log sit on one screen." },
      { group: "Office", src: `${crm}/02-dashboard.png`, title: "Dashboard", caption: "Open work, jobs missing a time slot or crew, completed jobs not yet paid, and new website leads." },
      { group: "Office", src: `${crm}/03-jobs-board.png`, title: "Jobs board", caption: "Every job with its crew and status, plus tabs for jobs that need attention and closeouts left unfinished." },
      { group: "Office", src: `${crm}/09-schedule-week.png`, title: "Schedule", caption: "A week view by time or by employee, shown in the business's own time zone." },
      { group: "Office", src: `${crm}/14-estimate-record.png`, title: "Estimate", caption: "Good, better and best options with cost, price and margin on each. The customer picks one from a link, and it becomes a job." },
      { group: "Crew", src: `${crm}/30-field-schedule.png`, title: "Today's jobs", caption: "Crew members see only their own jobs, with directions, gate codes and checklists.", phone: true },
      { group: "Crew", src: `${crm}/31-field-job.png`, title: "On the clock", caption: "Location-checked clock-in and clock-out on site. It warns when a shift runs past its scheduled end.", phone: true },
    ],
    featured: true,
  },
  {
    slug: "clean-and-bright",
    title: "Clean & Bright",
    context: "Client website · Tyler, Texas",
    description:
      "Website for an East Texas pressure-washing, window-cleaning and Christmas-lights company. Estimate requests go straight into the CRM.",
    image: `${sites}/cb-hero.jpg`,
    tags: ["Astro", "Tailwind CSS", "TypeScript", "Vercel"],
    highlights: [
      "Video hero that switches between real jobs.",
      "A page per service, plus reviews, FAQs and a blog for local search.",
      "Holiday offer with per-foot pricing for Christmas lights.",
    ],
    screens: [
      { src: `${sites}/cb-hero.jpg`, title: "Home", caption: "A video hero with both seasons in the headline, a free-estimate button and the phone number up front." },
      { src: `${sites}/cb-services.jpg`, title: "Services", caption: "Pressure washing, window cleaning and Christmas lights as expanding photo panels, each opening its own page." },
      { src: `${sites}/cb-promo.jpg`, title: "Holiday offer", caption: "A pop-up that prices Christmas lights by the foot and compares them to typical rates." },
      { src: `${sites}/cb-form.jpg`, title: "Free estimate", caption: "Four ways to ask for a quote. The online form posts straight into the CRM, with email as a fallback." },
      { src: `${sites}/cb-mobile.jpg`, title: "On a phone", caption: "The home page on a phone.", phone: true },
    ],
    liveUrl: "https://www.cleanandbrightservices.com",
  },
  {
    slug: "naks",
    title: "NAKS Property Services",
    context: "Client website · Tyler, Texas",
    description:
      "Website for Clean & Bright's parent company: lighting, exterior care and subcontract work. Quote requests go straight into the CRM.",
    image: `${sites}/naks-hero.jpg`,
    tags: ["Next.js", "React 19", "Tailwind CSS", "shadcn/ui", "Vercel"],
    highlights: [
      "Charcoal and gold look built from the company's logo and job photos.",
      "Before-and-after photos that flip on hover or tap.",
      "Quote form that checks the address is in the service area first.",
    ],
    screens: [
      { src: `${sites}/naks-hero.jpg`, title: "Home", caption: "A dark hero with a video collage of real work and a gold call to action." },
      { src: `${sites}/naks-services.jpg`, title: "Services", caption: "Lighting, exterior care and subcontracting, each with its own photo." },
      { src: `${sites}/naks-beforeafter.jpg`, title: "Before and after", caption: "Same spot, before and after. The photo flips on hover or tap." },
      { src: `${sites}/naks-book.jpg`, title: "Quote request", caption: "A step-by-step quote form that first checks the address is in the service area. Finished requests post into the CRM." },
      { src: `${sites}/naks-promo.jpg`, title: "Christmas offers", caption: "Seasonal posters in a pop-up viewer, with a quote link under each one." },
      { src: `${sites}/naks-mobile.jpg`, title: "On a phone", caption: "The home page on a phone.", phone: true },
    ],
    liveUrl: "https://www.naksservices.com",
  },
  {
    slug: "souqintel",
    title: "SouqIntel",
    description:
      "A fragrance dupe finder that matches designer perfumes to affordable Middle Eastern alternatives, with an AI shopping assistant.",
    image: `${souq}/hero.jpg`,
    tags: ["React", "Vite", "Express.js", "MongoDB", "Ollama"],
    highlights: [
      "AI shopping assistant on a local model (Ollama), so user data stays in-house.",
      "Searchable catalog with filters, note pyramids and matched dupes.",
      "Express REST API over MongoDB with JWT auth.",
    ],
    stats: [
      { value: "138", label: "fragrances in the catalog" },
      { value: "66", label: "matched dupe pairs" },
      { value: "24", label: "trending in 2026" },
      { value: "93%", label: "biggest saving" },
    ],
    screens: [
      { group: "Desktop", src: `${souq}/hero.jpg`, title: "Home", caption: "The brand mark is a souq arch, so the hero is that arch at full size, framed in liquid gold and lit from inside. Each designer original stands next to its Middle Eastern dupe, and the pairs rotate on their own." },
      { group: "Desktop", src: `${souq}/pairs.jpg`, title: "Pair explorer", caption: "Pick a pair and the notes both perfumes share light up in gold. Althaïr and Liquid Brun have 7 of 8 notes in common." },
      { group: "Desktop", src: `${souq}/pairs-kingdom.jpg`, title: "Le Male Elixir and The Kingdom", caption: "Struck-through notes belong only to the original, and the plus notes are what the dupe adds." },
      { group: "Desktop", src: `${souq}/trending.jpg`, title: "Trending in 2026", caption: "Viral Arabian gourmands and the year's designer launches, each with its own notes and image." },
      { group: "Desktop", src: `${souq}/families.jpg`, title: "Explore by family", caption: "A typographic index. Hovering a family brings up one of its bottles, which follows the cursor." },
      { group: "Desktop", src: `${souq}/browse.jpg`, title: "Collection", caption: "Filter by family, type, price and gender, and sort trending scents first." },
      { group: "Desktop", src: `${souq}/finder.jpg`, title: "Dupe Finder", caption: "Search an original and get its matches with similarity and savings: Le Male Elixir returns The Kingdom at an 80% match, 70% cheaper." },
      { group: "Desktop", src: `${souq}/detail.jpg`, title: "Perfume detail", caption: "Every dupe links back to its original, and every original to its dupes." },
      { group: "Desktop", src: `${souq}/notes.jpg`, title: "Note pyramid", caption: "Tiers widen from top to base, so the layout reads as the pyramid it describes." },
      { group: "Mobile", src: `${souq}/m-hero.jpg`, title: "Mobile home", caption: "The same composition with lighter machinery: a still gold arch in place of the shaders.", phone: true },
      { group: "Mobile", src: `${souq}/m-pairs.jpg`, title: "Mobile pair explorer", caption: "The same rotating pairs, with the notes they share lit in gold.", phone: true },
      { group: "Mobile", src: `${souq}/m-detail.jpg`, title: "Mobile perfume detail", caption: "Khamrah's detail page on a phone.", phone: true },
    ],
    liveUrl: "https://souq-intel.vercel.app/",
  },
  {
    slug: "uamatch",
    title: "UAmatch",
    description:
      "A Flutter dating app for the UA community with swipe discovery, matches and real-time chat.",
    image: "/projects/uamatch/discover.png",
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "Cloudinary", "Riverpod"],
    highlights: [
      "Swipe discovery with mutual matches.",
      "Real-time chat and rich profiles on Firebase and Cloudinary.",
      "Riverpod state management across discovery, likes and messaging.",
    ],
  },
  {
    slug: "ssite",
    title: "SSITE Website",
    description:
      "Organization website for SSITE with member login and an admin dashboard.",
    image: "/projects/ssite_placeholder.png",
    tags: ["React", "Vite", "Firebase", "Firestore", "Tailwind CSS"],
    highlights: [
      "Public pages for announcements, events, officers and polls.",
      "Admin dashboard for content, members, roles and messages.",
      "Firebase Auth and Firestore for sign-in and live data.",
    ],
    liveUrl: "https://ssite-website.vercel.app/",
  },
];

export default projects;
