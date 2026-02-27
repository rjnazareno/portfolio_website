"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import WatermarkText from "../ui/WatermarkText";

const roles = [
  "Software Developer",
  "Full Stack Engineer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <WatermarkText text="Software Developer" />

      {/* Glow blobs */}
      <div className="glow-blob left-1/4 top-1/4 h-72 w-72 bg-accent" />
      <div className="glow-blob right-1/4 bottom-1/4 h-56 w-56 bg-cyan" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-accent-light"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 text-5xl font-black leading-tight md:text-7xl lg:text-8xl"
        >
          Resty James
          <br />
          <span className="text-accent">Nazareno</span>
        </motion.h1>

        <div className="h-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="text-xl font-medium text-cyan md:text-2xl"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase text-white/40">
              Scroll
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
