"use client";

import { motion } from "framer-motion";
import WatermarkText from "../ui/WatermarkText";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden py-32"
    >
      <WatermarkText text="About Me" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-extrabold leading-snug md:text-5xl lg:text-6xl"
        >
          I am a passionate{" "}
          <span className="text-accent">Software Developer</span> who bridges
          the gap between frontend, backend, and design.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-xl leading-relaxed text-white/40 md:text-2xl lg:text-3xl"
        >
          I take responsibility for building scalable systems and crafting
          excellent user experiences using modern web architecture.
        </motion.p>
      </div>
    </section>
  );
}
