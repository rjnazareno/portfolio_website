"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="editorial-panel relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-cream px-5 py-20 sm:px-12 lg:px-20 2xl:px-28">
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-black leading-[1.05] text-ink md:text-5xl lg:text-6xl"
      >
        I&apos;m passionate about building scalable full-stack apps and writing
        clean, efficient code to solve real problems.
      </motion.p>
    </section>
  );
}
