"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Project, ProjectScreen } from "../../data/projects";
import { EASE } from "../ui/motion";

export function ProjectStats({ stats }: { stats: NonNullable<Project["stats"]> }) {
  return (
    <dl className="grid grid-cols-2 border-t border-ink/10">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border-b border-ink/10 py-4 odd:pr-4 even:border-l even:pl-4"
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd className="text-2xl font-black tabular-nums tracking-[-0.03em] text-ink md:text-3xl">
            {stat.value}
          </dd>
          <dd className="mt-1 text-sm leading-snug text-muted">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}

/* Grouped tabs over one framed screenshot that crossfades between screens. */
export default function ScreenViewer({
  screens,
  name,
}: {
  screens: ProjectScreen[];
  name: string;
}) {
  const [index, setIndex] = useState(0);
  const screen = screens[index];
  const groups = [...new Set(screens.map((s) => s.group))];

  return (
    <div>
      <div
        role="group"
        aria-label={`${name} screens`}
        className="flex flex-wrap items-center gap-x-6 gap-y-3"
      >
        {groups.map((group) => (
          <div key={group ?? "screens"} className="flex flex-wrap items-center gap-2">
            {group && (
              <span className="mr-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {group}
              </span>
            )}
            {screens.map(
              (s, i) =>
                s.group === group && (
                  <button
                    key={s.src}
                    type="button"
                    aria-pressed={i === index}
                    onClick={() => setIndex(i)}
                    className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                      i === index
                        ? "border-ink bg-ink text-panel"
                        : "border-ink/10 bg-panel text-ink-soft hover:border-ink/30 hover:text-ink"
                    }`}
                  >
                    {s.label}
                  </button>
                ),
            )}
          </div>
        ))}
      </div>

      <a
        href={screen.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${screen.title} full size`}
        className="relative mt-6 block aspect-16/10 overflow-hidden rounded-lg border border-ink/10 bg-[#eeeeea]"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={screen.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {screen.phone ? (
              <div className="flex h-full items-center justify-center py-[4%]">
                <div className="h-full aspect-780/1500 rounded-[1.6rem] bg-ink p-1.5 shadow-[0_30px_50px_-20px_rgba(22,22,22,0.5)]">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.25rem] bg-panel">
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      fill
                      sizes="(min-width: 1280px) 340px, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <Image
                src={screen.src}
                alt={screen.title}
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-top"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </a>

      <p aria-live="polite" className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
        <b className="font-semibold text-ink">{screen.title}.</b> {screen.caption}
      </p>
    </div>
  );
}
