import Image from "next/image";

import type { Project } from "../../data/projects";

function UAmatchPhone({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-[1.15rem] bg-panel shadow-[0_18px_36px_rgba(22,22,22,0.16)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[0.9rem] bg-panel">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain"
        />
      </div>
    </div>
  );
}

const UAMATCH_SHOTS = [
  {
    src: "/projects/uamatch/chats.png",
    alt: "UAmatch chat screen",
    className: "bottom-5 left-6 z-10 h-[70%] w-[30%] -rotate-4 opacity-90",
    sizes: "(max-width: 768px) 32vw, 18vw",
  },
  {
    src: "/projects/uamatch/discover.png",
    alt: "UAmatch discover screen",
    className: "bottom-2 left-1/2 z-20 h-[88%] w-[38%] -translate-x-1/2",
    sizes: "(max-width: 768px) 46vw, 22vw",
    priority: true,
  },
  {
    src: "/projects/uamatch/likes.png",
    alt: "UAmatch likes screen",
    className: "bottom-5 right-6 z-10 h-[70%] w-[30%] rotate-4 opacity-90",
    sizes: "(max-width: 768px) 32vw, 18vw",
  },
];

function UAmatchShowcase() {
  return (
    <div className="relative h-full overflow-hidden rounded-md border border-ink/10 bg-[linear-gradient(135deg,#ffffff,#ececea)]">
      <div className="absolute left-4 top-4">
        <span className="rounded-full border border-ink/10 bg-panel/80 px-3 py-1 text-[10px] font-bold uppercase text-ink">
          Mobile App
        </span>
      </div>
      <span className="absolute right-4 top-4 font-mono text-xs text-muted">
        02
      </span>
      {UAMATCH_SHOTS.map((shot) => (
        <UAmatchPhone
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          className={shot.className}
          sizes={shot.sizes}
          priority={shot.priority}
        />
      ))}
    </div>
  );
}

function ProjectThumbnail({
  src,
  alt,
  className = "object-center",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-md border border-ink/10 bg-panel">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 52vw"
        className={`object-cover ${className}`}
      />
    </div>
  );
}

export default function ProjectVisual({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isUAmatch = project.title === "UAmatch";
  const isHarley = project.title === "Harley HRIS System";
  const isSouqIntel = project.title === "SouqIntel";
  const isSSITE = project.title === "SSITE Website";

  if (isHarley || isSouqIntel || isSSITE) {
    return (
      <ProjectThumbnail
        src={project.image}
        alt={`${project.title} thumbnail`}
        className={isHarley ? "object-left" : isSSITE ? "object-top" : "object-center"}
      />
    );
  }

  if (isUAmatch) {
    return <UAmatchShowcase />;
  }

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-md border border-ink/10 ${
        index % 2 === 0 ? "bg-charcoal text-paper" : "bg-panel text-ink"
      }`}
    >
      <div className="flex items-center justify-between border-b border-current/10 px-4 py-3">
        <span className="rounded-full border border-current/15 px-3 py-1 text-[10px] font-bold uppercase">
          Real Project
        </span>
        <span className="font-mono text-xs opacity-45">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-end p-5">
        <span className="mb-4 block h-14 w-14 rounded-full border border-current/15" />
        <p className="max-w-xs text-2xl font-black leading-tight">
          {project.title}
        </p>
        <div className="mt-5 grid grid-cols-3 gap-2 opacity-55">
          <span className="h-2 rounded-full bg-current" />
          <span className="h-2 rounded-full bg-current" />
          <span className="h-2 rounded-full bg-current" />
        </div>
      </div>
      <span className="absolute right-4 top-16 text-7xl font-black opacity-[0.04]">
        WORK
      </span>
    </div>
  );
}
