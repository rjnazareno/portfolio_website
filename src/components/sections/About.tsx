"use client";

import { motion } from "framer-motion";
import WatermarkText from "../ui/WatermarkText";

export default function About() {
  return (
    <section
      id="about"
      className="editorial-panel relative flex min-h-[72vh] scroll-mt-28 items-center overflow-hidden bg-cream px-5 py-28 sm:px-12 lg:px-20 2xl:px-28"
    >
      <WatermarkText text="About Me" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-center"
        >
          <h2 className="text-3xl font-black leading-[1.05] text-ink md:text-5xl lg:text-6xl">
            I am an adaptable Software Developer who bridges the gap between
            frontend, backend, and design to create seamless digital
            experiences.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-xl">
            I take responsibility for building scalable systems and crafting
            excellent user experiences using modern web architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
