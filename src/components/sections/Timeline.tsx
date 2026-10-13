"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import timeline, { type TimelineEntry } from "../../data/timeline";
import { Reveal, RevealText } from "../ui/motion";

// Each role lights up as its marker crosses the middle of the viewport.
function Entry({ entry }: { entry: TimelineEntry }) {
  const dotRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: dotRef,
    offset: ["center 0.6", "center 0.45"],
  });
  const roleOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);

  return (
    <li className="relative grid gap-5 pb-16 pl-10 last:pb-0 md:grid-cols-[14rem_1fr] md:gap-0 md:pb-24 md:pl-0">
      <span
        ref={dotRef}
        className="absolute left-0 top-1 flex h-3.75 w-3.75 items-center justify-center rounded-full border border-white/30 bg-ink md:left-54.25"
      >
        <motion.span
          style={{ scale: scrollYProgress }}
          className="h-1.75 w-1.75 rounded-full bg-paper"
        />
      </span>

      <div className="md:pr-10">
        <p className="text-base font-semibold tabular-nums text-paper">{entry.period}</p>
        <p className="mt-1 text-sm text-white/60">{entry.meta}</p>
      </div>

      <div className="md:pl-14">
        <motion.h3
          style={{ opacity: roleOpacity }}
          className="text-balance text-3xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-paper md:text-5xl"
        >
          {entry.role}
        </motion.h3>
        <p className="mt-3 text-lg font-semibold text-white/80">{entry.company}</p>
        <ul className="mt-6 max-w-2xl space-y-3">
          {entry.highlights.map((highlight) => (
            <li
              key={highlight}
              className="relative pl-5 text-base leading-relaxed text-white/60 before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-2.5 before:bg-white/35"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Timeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.5", "end 0.5"],
  });

  return (
    <section
      id="timeline"
      data-nav="dark"
      className="grain editorial-panel editorial-panel-dark relative scroll-mt-24 px-5 py-28 sm:px-12 md:py-36 lg:px-20 2xl:px-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16 grid gap-6 md:mb-24 md:grid-cols-[1fr_auto] md:items-end">
          <RevealText
            as="h2"
            text="Experience"
            className="text-[min(3rem,11vw)] font-black uppercase leading-[0.9] tracking-[-0.035em] text-paper md:text-7xl"
          />
          <Reveal delay={0.15}>
            <p className="max-w-xs text-lg text-white/60">
              Building production systems for real teams since 2025.
            </p>
          </Reveal>
        </div>

        <ol ref={listRef} className="relative">
          {/* The line draws itself as you read down the list. */}
          <span className="absolute bottom-0 left-1.75 top-1 w-px bg-white/15 md:left-56" />
          <motion.span
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-0 left-1.75 top-1 w-px origin-top bg-paper md:left-56"
          />
          {timeline.map((entry) => (
            <Entry key={entry.period + entry.role} entry={entry} />
          ))}
        </ol>
      </div>
    </section>
  );
}
