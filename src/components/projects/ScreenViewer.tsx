"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
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

/* One framed screenshot. Step through with the arrows, or swipe on touch screens. */
export default function ScreenViewer({
  screens,
  name,
}: {
  screens: ProjectScreen[];
  name: string;
}) {
  const [index, setIndex] = useState(0);
  const screen = screens[index];
  const step = (d: number) => (index + d + screens.length) % screens.length;
  const arrow =
    "absolute top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-panel/90 text-ink shadow-[0_8px_20px_-8px_rgba(22,22,22,0.35)] transition-colors duration-300 hover:bg-panel sm:h-10 sm:w-10";

  return (
    <div role="group" aria-label={`${name} screens`} className="max-w-4xl">
      <motion.div
        onPanEnd={(_, info) => {
          if (Math.abs(info.offset.x) > 40) setIndex(step(info.offset.x < 0 ? 1 : -1));
        }}
        className="relative aspect-16/10 touch-pan-y overflow-hidden rounded-lg border border-ink/10 bg-[#eeeeea]"
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
                      draggable={false}
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
                draggable={false}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover object-top"
              />
            )}
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIndex(step(-1))}
          aria-label={`Previous: ${screens[step(-1)].title}`}
          className={`${arrow} left-2 sm:left-3`}
        >
          <FiArrowLeft aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => setIndex(step(1))}
          aria-label={`Next: ${screens[step(1)].title}`}
          className={`${arrow} right-2 sm:right-3`}
        >
          <FiArrowRight aria-hidden />
        </button>
        <span className="absolute bottom-2 left-2 z-10 rounded-full sm:bottom-3 sm:left-3 bg-ink/70 px-2.5 py-1 text-xs font-medium tabular-nums text-panel">
          {screen.group && `${screen.group} · `}
          {index + 1} / {screens.length}
        </span>
      </motion.div>

      <p aria-live="polite" className="mt-4 text-sm leading-relaxed text-muted md:text-base">
        <b className="font-semibold text-ink">{screen.title}.</b> {screen.caption}
      </p>
    </div>
  );
}
