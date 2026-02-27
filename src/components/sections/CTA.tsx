"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-32">
      {/* Glow blobs */}
      <div className="glow-blob left-1/3 top-1/3 h-80 w-80 bg-accent" />
      <div className="glow-blob right-1/3 bottom-1/3 h-64 w-64 bg-cyan" />

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center text-3xl font-extrabold leading-snug md:text-5xl lg:text-6xl"
      >
        I&apos;m passionate about building{" "}
        <span className="text-accent">scalable full-stack apps</span> and
        writing clean, efficient code to solve real problems.
      </motion.p>
    </section>
  );
}
