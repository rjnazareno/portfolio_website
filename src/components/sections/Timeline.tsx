"use client";

import { motion } from "framer-motion";
import timeline from "../../data/timeline";
import SectionHeading from "../ui/SectionHeading";

export default function Timeline() {
  return (
    <section id="timeline" className="relative overflow-hidden py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        <SectionHeading label="Milestones" title="Timeline" />
        <p className="mb-16 text-lg text-white/40">
          A quick recap of how I started.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-cyan to-transparent md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((entry, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={entry.year + entry.title}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative mb-16 pl-12 md:w-1/2 md:pl-0 ${
                  isLeft
                    ? "md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Dot on the line */}
                <div
                  className={`absolute left-[11px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-navy-950 md:top-1 ${
                    isLeft
                      ? "md:left-auto md:-right-[8px]"
                      : "md:-left-[8px]"
                  }`}
                />

                <span className="mb-1 inline-block text-3xl font-black text-accent">
                  {entry.year}
                </span>
                <h3 className="mb-2 text-lg font-bold text-cyan">
                  {entry.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {entry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
