"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const items = [
  "React",
  "Laravel",
  "Node.js",
  "PHP",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Flutter",
  "Tailwind CSS",
];

const outline =
  "text-transparent [-webkit-text-stroke:1.5px_var(--color-ink)] md:[-webkit-text-stroke:2px_var(--color-ink)]";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// Drifts on its own, speeds up with scroll velocity, and follows scroll direction.
export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(-1);

  useAnimationFrame((_, delta) => {
    if (!inView || reduce) return;
    const b = boost.get();
    if (b < 0) direction.current = 1;
    else if (b > 0) direction.current = -1;
    baseX.set(baseX.get() + direction.current * 0.6 * (delta / 1000) * (1 + Math.abs(b)));
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="editorial-panel overflow-hidden border-b border-ink/10 bg-panel py-7 md:py-10"
    >
      <motion.div className="flex w-max whitespace-nowrap" style={{ x }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span key={item} className="flex items-center">
                <span
                  className={`px-6 text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-none tracking-[-0.03em] md:px-10 ${
                    i % 2 ? outline : "text-ink"
                  }`}
                >
                  {item}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-ink md:h-3.5 md:w-3.5" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
