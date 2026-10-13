import Image from "next/image";

import type { Project } from "../../data/projects";

const stage =
  "relative h-full overflow-hidden rounded-md border border-ink/10 bg-[linear-gradient(135deg,#ffffff,#ececea)]";
const move = "transition-[translate,rotate] duration-700 ease-out-expo";

/* A desktop screenshot in a slim window frame. */
function AppWindow({
  src,
  alt,
  name,
  icon,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  name: string;
  icon?: string;
  className: string;
  sizes: string;
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-lg border border-ink/10 bg-panel shadow-[0_28px_50px_-24px_rgba(22,22,22,0.4)] ${move} ${className}`}
    >
      <div className="flex h-6 items-center gap-2 border-b border-ink/10 bg-paper px-2.5 text-[10px] font-semibold text-ink-soft sm:h-7 sm:text-[11px]">
        <span aria-hidden className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className="h-1.5 w-1.5 rounded-full bg-ink/15" />
          ))}
        </span>
        {icon && <Image src={icon} alt="" width={14} height={14} className="rounded-[3px]" />}
        {name}
      </div>
      <div className="relative aspect-16/10">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}

/* The three Harley apps stacked; they fan apart on hover. */
const PLATFORM = [
  {
    name: "Inventory",
    icon: "/projects/harley/inventory.webp",
    src: "/projects/harley/inv-home.webp",
    alt: "Inventory dashboard",
    className:
      "left-[4%] top-[9%] w-[60%] -rotate-[2.5deg] group-hover:-translate-x-[5%] group-hover:-rotate-[4deg]",
  },
  {
    name: "Hdesk",
    icon: "/projects/harley/hdesk.webp",
    src: "/projects/harley/hdesk-dashboard.webp",
    alt: "Hdesk help desk dashboard",
    className:
      "right-[4%] top-[5%] w-[60%] rotate-[2.5deg] group-hover:translate-x-[5%] group-hover:rotate-[4deg]",
  },
  {
    name: "Harley",
    icon: "/projects/harley/harley.webp",
    src: "/projects/harley/harley-home.webp",
    alt: "Harley employee home",
    className: "left-[20%] top-[27%] z-10 w-[60%] group-hover:-translate-y-[5%]",
  },
];

function PlatformStack() {
  return (
    <div className={stage}>
      {PLATFORM.map((app) => (
        <AppWindow key={app.name} {...app} sizes="(max-width: 1024px) 60vw, 34vw" />
      ))}
    </div>
  );
}

/* Office dashboard with the crew's phone view rising in front. */
function CrmShowcase() {
  return (
    <div className={stage}>
      <AppWindow
        src="/projects/crm/02-dashboard.png"
        alt="Field-service CRM dashboard"
        name="Dashboard"
        className="left-[5%] top-[8%] w-[74%] group-hover:-translate-x-[2%] group-hover:-translate-y-[2%]"
        sizes="(max-width: 1024px) 75vw, 42vw"
      />
      <div
        className={`absolute -bottom-[18%] right-[6%] z-10 w-[24%] rotate-[4deg] rounded-[1.4rem] bg-ink p-1.25 shadow-[0_30px_50px_-20px_rgba(22,22,22,0.5)] ${move} group-hover:-translate-y-[12%] group-hover:rotate-0`}
      >
        <div className="relative aspect-780/1500 overflow-hidden rounded-[1.1rem] bg-panel">
          <Image
            src="/projects/crm/30-field-schedule.png"
            alt="Crew phone view listing today's jobs"
            fill
            sizes="(max-width: 1024px) 25vw, 14vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

const UAMATCH_SHOTS = [
  {
    src: "/projects/uamatch/chats.png",
    alt: "UAmatch chat screen",
    className:
      "bottom-5 left-6 z-10 h-[70%] w-[30%] -rotate-4 opacity-90 group-hover:-translate-x-[12%] group-hover:-rotate-8",
    sizes: "(max-width: 768px) 32vw, 18vw",
  },
  {
    src: "/projects/uamatch/discover.png",
    alt: "UAmatch discover screen",
    className: "bottom-2 left-1/2 z-20 h-[88%] w-[38%] -translate-x-1/2 group-hover:-translate-y-[3%]",
    sizes: "(max-width: 768px) 46vw, 22vw",
  },
  {
    src: "/projects/uamatch/likes.png",
    alt: "UAmatch likes screen",
    className:
      "bottom-5 right-6 z-10 h-[70%] w-[30%] rotate-4 opacity-90 group-hover:translate-x-[12%] group-hover:rotate-8",
    sizes: "(max-width: 768px) 32vw, 18vw",
  },
];

function UAmatchShowcase() {
  return (
    <div className={stage}>
      <span className="absolute left-4 top-4 rounded-full border border-ink/10 bg-panel/80 px-3 py-1 text-[10px] font-bold uppercase text-ink">
        Mobile App
      </span>
      {UAMATCH_SHOTS.map((shot) => (
        <div
          key={shot.src}
          className={`absolute overflow-hidden rounded-[1.15rem] bg-panel shadow-[0_18px_36px_rgba(22,22,22,0.16)] ${move} ${shot.className}`}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[0.9rem] bg-panel">
            <Image src={shot.src} alt={shot.alt} fill sizes={shot.sizes} className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "harley") return <PlatformStack />;
  if (project.slug === "field-service-crm") return <CrmShowcase />;
  if (project.slug === "uamatch") return <UAmatchShowcase />;

  return (
    <div className="relative h-full overflow-hidden rounded-md border border-ink/10 bg-panel">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes="(max-width: 768px) 100vw, 52vw"
        className={`object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04] ${
          project.slug === "ssite" ? "object-top" : "object-center"
        }`}
      />
    </div>
  );
}
