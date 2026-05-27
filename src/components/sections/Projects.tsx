"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../../data/projects";
import WatermarkText from "../ui/WatermarkText";

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
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`object-cover ${className}`}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="editorial-panel relative scroll-mt-28 overflow-hidden px-5 py-28 sm:px-12 lg:px-20 2xl:px-28"
    >
      <WatermarkText text="Portfolio" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <h2 className="text-4xl font-black uppercase leading-none text-ink md:text-6xl">
              Selected Work
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              A small set of full-stack projects built around clear interfaces,
              practical architecture, and reliable user flows.
            </p>
          </div>
          <a
            href="#contact"
            className="pill w-fit px-6 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            View All Work
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => {
            const hasProjectLinks = project.liveUrl || project.repoUrl;
            const isUAmatch = project.title === "UAmatch";
            const isHarley = project.title === "Harley HRIS System";
            const isSouqIntel = project.title === "SouqIntel";

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-lg border border-ink/10 bg-panel/70 shadow-[0_18px_50px_rgba(22,22,22,0.05)] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[1.28] w-full overflow-hidden border-b border-ink/10 bg-[#eeeeea] p-4">
                  {isHarley || isSouqIntel ? (
                    <ProjectThumbnail
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      className={isHarley ? "object-left" : "object-center"}
                    />
                  ) : isUAmatch ? (
                    <UAmatchShowcase />
                  ) : (
                    <div
                      className={`relative flex h-full flex-col overflow-hidden rounded-md border border-ink/10 ${
                        i % 2 === 0
                          ? "bg-charcoal text-paper"
                          : "bg-panel text-ink"
                      }`}
                    >
                      <div className="flex items-center justify-between border-b border-current/10 px-4 py-3">
                        <span className="rounded-full border border-current/15 px-3 py-1 text-[10px] font-bold uppercase">
                          Real Project
                        </span>
                        <span className="font-mono text-xs opacity-45">
                          {String(i + 1).padStart(2, "0")}
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
                  )}

                  {hasProjectLinks && (
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-ink/70 opacity-0 transition-opacity group-hover:opacity-100">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-panel text-ink transition-transform hover:-translate-y-0.5"
                          aria-label={`${project.title} live site`}
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-panel text-ink transition-transform hover:-translate-y-0.5"
                          aria-label={`${project.title} repository`}
                        >
                          <FiGithub size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="mb-3 text-2xl font-semibold leading-tight text-ink">
                    {project.title}
                  </h3>
                  <div
                    className="group/details relative mb-5"
                    tabIndex={0}
                    aria-label={`${project.title} full description`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                      {project.description}
                    </p>

                    <div className="pointer-events-none absolute left-0 right-0 top-full z-30 mt-3 rounded-lg border border-ink/10 bg-panel p-4 opacity-0 shadow-[0_18px_40px_rgba(22,22,22,0.14)] transition-opacity duration-200 group-hover/details:opacity-100 group-focus/details:opacity-100">
                      <p className="text-sm leading-relaxed text-muted">
                        {project.description}
                      </p>
                      {project.highlights && (
                        <ul className="mt-4 space-y-2 border-l border-ink/10 pl-4">
                          {project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="text-xs leading-relaxed text-ink-soft"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/10 bg-panel px-3 py-1 text-xs font-semibold text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
