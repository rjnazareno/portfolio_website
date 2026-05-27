"use client";

import { motion } from "framer-motion";
import timeline from "../../data/timeline";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="editorial-panel editorial-panel-dark relative min-h-screen scroll-mt-28 overflow-hidden px-5 py-24 sm:px-12 lg:px-20 2xl:px-28"
    >
      <div className="pointer-events-none absolute left-10 top-6 text-[clamp(4rem,12vw,9rem)] font-black uppercase leading-none text-white/[0.035]">
        Experience
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <h2 className="text-4xl font-black uppercase leading-none text-paper md:text-6xl">
              Timeline
            </h2>
          </div>
          <p className="max-w-xs text-lg text-white/55">
            A quick recap of how I started.
          </p>
        </motion.div>

        <div className="divide-y divide-white/12 border-y border-white/12">
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.year + entry.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="grid gap-4 py-8 md:grid-cols-[140px_1fr] md:gap-10"
            >
              <div>
                <span className="inline-block text-4xl font-black text-paper">
                  {entry.year}
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr]">
                <h3 className="text-xl font-semibold text-paper">
                  {entry.title}
                </h3>
                <p className="text-base leading-relaxed text-white/50">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
