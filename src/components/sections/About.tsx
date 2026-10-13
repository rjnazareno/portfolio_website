"use client";

import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../ui/motion";

const statement =
  "I’m a full-stack developer who turns manual business processes into software that teams use every day.";
const words = statement.split(" ");
// The closing phrase switches to the italic serif used in the hero.
const accentFrom = words.indexOf("software");

function Word({
  word,
  progress,
  range,
  accent,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`motion-reduce:opacity-100! ${accent ? "font-serif font-medium italic tracking-normal" : ""}`}
    >
      {word}{" "}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLHeadingElement>(null);
  // Each word lights up as the statement scrolls through the reading zone.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });

  return (
    <section
      id="about"
      className="editorial-panel relative scroll-mt-24 bg-paper px-5 py-28 sm:px-12 md:py-40 lg:px-20 2xl:px-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          ref={ref}
          className="text-balance text-[clamp(2rem,5.2vw,4.75rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
        >
          {words.map((word, i) => (
            <Word
              key={i}
              word={word}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
              accent={i >= accentFrom}
            />
          ))}
        </h2>

        <Reveal className="mt-12 grid md:mt-16 md:grid-cols-2">
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:col-start-2">
            At Resource Staffing Solutions I lead Harley, an internal platform
            for 150+ employees that brings timekeeping, inventory, procurement,
            and ticketing under one roof. I work with AI coding assistants like
            Claude and OpenAI Codex to plan, model, and debug faster, and I
            review and test every change before it ships.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
