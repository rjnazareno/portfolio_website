"use client";

import type { ElementType, ReactNode } from "react";
import { MotionConfig, motion, useReducedMotion, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/* Words rise out of a mask, one after another. Words from `accent` on are set in the serif italic. */
export function RevealText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  accent,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  accent?: number;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: Math.min(0.06, 0.5 / words.length),
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <span key={i}>
            <span className="-my-[0.1em] inline-block overflow-y-clip py-[0.1em] align-top">
              <motion.span
                className={
                  accent !== undefined && i >= accent
                    ? "inline-block pr-[0.04em] font-serif font-semibold normal-case italic tracking-[-0.01em]"
                    : "inline-block"
                }
                variants={{
                  hidden: { y: "115%" },
                  visible: { y: "0%", transition: { duration: 0.7, ease: EASE } },
                }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Pulls its child toward the cursor. Mouse only. */
export function Magnetic({
  children,
  className = "inline-flex",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 18, mass: 0.5 });
  const y = useSpring(0, { stiffness: 220, damping: 18, mass: 0.5 });

  return (
    <motion.span
      className={className}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/* Arrow exits top-right and a fresh one slides in. Needs a `group` parent. */
export function ArrowSwap({ className = "" }: { className?: string }) {
  const swap =
    "absolute inset-0 h-full w-full transition-transform duration-500 ease-out-expo motion-reduce:transition-none";

  return (
    <span
      aria-hidden
      className={`relative inline-block h-[1em] w-[1em] shrink-0 overflow-hidden ${className}`}
    >
      <FiArrowUpRight
        className={`${swap} group-hover:translate-x-full group-hover:-translate-y-full group-focus-visible:translate-x-full group-focus-visible:-translate-y-full`}
      />
      <FiArrowUpRight
        className={`${swap} -translate-x-full translate-y-full group-hover:translate-0 group-focus-visible:translate-0`}
      />
    </span>
  );
}

/* Label rolls up to a copy of itself. Needs a `group` parent. */
export function RollText({ children }: { children: string }) {
  const roll =
    "block transition-transform duration-500 ease-out-expo motion-reduce:transition-none";

  return (
    <span className="relative block overflow-hidden">
      <span className={`${roll} group-hover:-translate-y-full`}>{children}</span>
      <span aria-hidden className={`${roll} absolute inset-0 translate-y-full group-hover:translate-y-0`}>
        {children}
      </span>
    </span>
  );
}
