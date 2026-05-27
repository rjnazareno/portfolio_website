"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p className="mb-2 text-sm font-semibold uppercase text-muted">{label}</p>
      <h2 className="text-4xl font-black uppercase leading-none text-ink md:text-6xl">
        {title}
      </h2>
    </motion.div>
  );
}
