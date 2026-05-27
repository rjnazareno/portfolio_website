"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import heroPortrait from "@/app/corporate attire.png";

const roles = [
  "Software Developer",
  "Computer Engineer",
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
      className="editorial-panel relative min-h-screen overflow-hidden px-5 pb-12 pt-28 sm:px-12 sm:pb-16 sm:pt-32 lg:px-20 xl:pb-8 2xl:px-28"
    >
      <motion.h1
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1 }}
        className="pointer-events-none relative z-10 max-w-full text-[clamp(2.9rem,15vw,8rem)] font-black uppercase leading-[0.8] text-ink sm:text-[clamp(4rem,13vw,10rem)] xl:absolute xl:inset-x-16 xl:top-[16vh] xl:text-center xl:text-[clamp(7rem,12vw,12rem)] 2xl:inset-x-24"
      >
        <span className="text-transparent [-webkit-text-stroke:1.5px_var(--color-ink)] lg:[-webkit-text-stroke:2px_var(--color-ink)]">
          Resty
        </span>{" "}
        <span>James</span>
        <br />
        <span>Nazareno</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="group relative z-20 mx-auto mt-8 flex h-[410px] w-full max-w-[360px] items-end justify-center overflow-hidden rounded-t-[999px] border border-ink/10 bg-mist/65 shadow-[0_28px_70px_rgba(22,22,22,0.1)] sm:h-[520px] sm:max-w-[420px] xl:absolute xl:bottom-0 xl:left-1/2 xl:mt-0 xl:h-[61vh] xl:max-w-[460px] xl:-ml-[230px] 2xl:h-[66vh] 2xl:max-w-[520px] 2xl:-ml-[260px]"
      >
        <Image
          src={heroPortrait}
          alt="Resty James Nazareno"
          priority
          sizes="(min-width: 1536px) 660px, (min-width: 1024px) 580px, 92vw"
          className="relative z-10 h-full w-full scale-125 object-contain object-bottom grayscale transition duration-500 ease-out group-hover:grayscale-0"
        />
      </motion.div>

      <div className="relative z-30 mt-8 grid gap-8 xl:absolute xl:inset-x-20 xl:bottom-[15vh] xl:mt-0 xl:grid-cols-[minmax(250px,330px)_1fr_minmax(190px,230px)] xl:items-end 2xl:inset-x-28">
        <div className="min-w-0 text-left">
          <div className="h-9 overflow-hidden sm:h-12">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-black text-ink sm:text-3xl"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3 text-sm leading-relaxed text-muted sm:text-base"
          >
            Building clean full-stack applications with thoughtful interfaces,
            reliable architecture, and a sharp eye for usability.
          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="mt-6 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-6 py-4 text-base font-semibold text-panel shadow-[0_14px_28px_rgba(22,22,22,0.2)] transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s Collaborate
            <FiArrowUpRight />
          </motion.a>
        </div>

        <div className="hidden xl:block" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.58 }}
          className="flex flex-wrap gap-3 xl:flex-col xl:items-stretch"
        >
          <a
            href="https://github.com/rjnazareno"
            target="_blank"
            rel="noopener noreferrer"
            className="pill gap-2 px-5 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <FiGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/resty-james-nazareno-142ab4345"
            target="_blank"
            rel="noopener noreferrer"
            className="pill gap-2 px-5 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
            LinkedIn
          </a>
          <a
            href="tel:09455069726"
            className="pill gap-2 px-5 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
            aria-label="Phone"
          >
            <FiPhone />
            Phone
          </a>
          <a
            href="mailto:rjmanago@gmail.com"
            className="pill gap-2 px-5 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
            aria-label="Email"
          >
            <FiMail />
            Email
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-semibold uppercase text-muted">
            Scroll
          </span>
          <FiArrowDown className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
