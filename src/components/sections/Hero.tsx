"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import heroPortrait from "@/app/corporate attire.png";
import { ArrowSwap, EASE, Magnetic } from "../ui/motion";

const roles = [
  "Full-Stack Developer",
  "AI-Assisted Development",
  "Business Process Automation",
];

const links = [
  { label: "GitHub", href: "https://github.com/rjnazareno" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/resty-james-nazareno-142ab4345" },
  { label: "Email", href: "mailto:rjmanago@gmail.com" },
  { label: "Phone", href: "tel:+639455069726" },
];

function Letters({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="-my-[0.2em] inline-flex overflow-y-clip py-[0.2em]">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, delay: delay + i * 0.04, ease: EASE }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

// Parallax only where the layered desktop composition exists.
function useDepth() {
  const [depth, setDepth] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 1280px) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => setDepth(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return depth;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const depth = useDepth();
  const [roleIndex, setRoleIndex] = useState(0);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000);
    return () => clearInterval(id);
  }, [inView]);

  // Back layers lag behind the scroll, so the portrait reads closest.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, depth ? 240 : 0]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, depth ? 150 : 0]);
  const personY = useTransform(scrollYProgress, [0, 1], [0, depth ? 50 : 0]);

  // A soft light that trails the cursor across the stage.
  const lightX = useSpring(useMotionValue(0), { stiffness: 120, damping: 24 });
  const lightY = useSpring(useMotionValue(0), { stiffness: 120, damping: 24 });

  return (
    <section
      id="hero"
      ref={ref}
      data-nav="dark"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        lightX.set(e.clientX - r.left);
        lightY.set(e.clientY - r.top);
        if (!lit) setLit(true);
      }}
      className="grain relative isolate min-h-svh overflow-hidden bg-ink px-5 pb-12 pt-28 text-paper sm:px-12 sm:pb-16 sm:pt-32 lg:px-20 xl:pb-8 2xl:px-28"
    >
      <motion.div
        aria-hidden
        style={{ x: lightX, y: lightY }}
        className={`pointer-events-none absolute -left-72 -top-72 z-0 hidden h-144 w-144 rounded-full bg-[radial-gradient(closest-side,rgba(247,247,244,0.08),transparent)] transition-opacity duration-1000 pointer-fine:block motion-reduce:hidden ${
          lit ? "opacity-100" : "opacity-0"
        }`}
      />

      <motion.h1
        style={{ y: nameY }}
        className="pointer-events-none relative z-10 xl:absolute xl:inset-x-0 xl:top-[13vh]"
      >
        <span className="sr-only">Resty James Nazareno</span>
        <span aria-hidden className="block w-fit xl:mx-auto">
          <span className="block pl-[0.04em] font-serif text-[clamp(2.4rem,8.5vw,5.75rem)] font-medium italic leading-none text-paper/85">
            <Letters text="Resty James" delay={0.2} />
          </span>
          <span className="block text-[clamp(3.4rem,15.5vw,15.5rem)] font-black uppercase leading-[0.8] tracking-[-0.04em] text-paper">
            <Letters text="Nazareno" delay={0.45} />
          </span>
        </span>
      </motion.h1>

      {/* A soft light sits behind the name; the portrait stands in front of it. */}
      <div className="relative mx-auto -mt-2 h-[420px] w-full max-w-[360px] sm:-mt-6 sm:h-[540px] sm:max-w-[420px] xl:absolute xl:bottom-0 xl:left-1/2 xl:mt-0 xl:h-[64vh] xl:max-w-[460px] xl:-ml-[230px] 2xl:h-[68vh] 2xl:max-w-[520px] 2xl:-ml-[260px]">
        <motion.div style={{ y: stageY }} className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
            className="absolute -inset-x-1/2 -top-[15%] bottom-0 rounded-full bg-[radial-gradient(closest-side,rgba(247,247,244,0.2),rgba(247,247,244,0.06)_55%,transparent)]"
          />
        </motion.div>

        <motion.div style={{ y: personY }} className="group absolute inset-0 z-20">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.35, ease: EASE }}
            className="h-full w-full mask-[linear-gradient(to_bottom,black_78%,transparent)]"
          >
            <Image
              src={heroPortrait}
              alt="Resty James Nazareno"
              priority
              sizes="(min-width: 1536px) 660px, (min-width: 1024px) 580px, 92vw"
              className="h-full w-full origin-bottom scale-[1.18] object-contain object-bottom contrast-[1.08] grayscale transition-[filter] duration-700 group-hover:grayscale-0"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none relative z-30 mt-10 grid gap-10 xl:absolute xl:inset-x-20 xl:bottom-[13vh] xl:mt-0 xl:grid-cols-[minmax(250px,400px)_1fr_minmax(190px,230px)] xl:items-end 2xl:inset-x-28">
        <div className="pointer-events-auto min-w-0">
          <motion.div {...fadeUp(0.8)} className="relative h-8 overflow-hidden sm:h-9">
            <AnimatePresence initial={false}>
              <motion.p
                key={roleIndex}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="absolute inset-0 whitespace-nowrap text-xl font-bold tracking-[-0.02em] text-paper sm:text-2xl"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            {...fadeUp(0.9)}
            className="mt-3 max-w-[24rem] text-sm leading-relaxed text-white/60 sm:text-base"
          >
            I build the systems businesses run on, from HRIS and CRM to
            inventory and ticketing, shipped faster with AI-assisted
            development.
          </motion.p>

          <motion.div {...fadeUp(1)} className="mt-7 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-paper px-6 py-4 text-base font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_18px_40px_-12px_rgba(247,247,244,0.35)]"
              >
                Let&apos;s Collaborate
                <ArrowSwap />
              </a>
            </Magnetic>
            <a
              href="/Resty_Nazareno_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center gap-2.5 rounded-full border border-white/20 px-6 text-base font-semibold text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
            >
              Resume
              <ArrowSwap />
            </a>
          </motion.div>
        </div>

        <div className="hidden xl:block" />

        <motion.ul
          {...fadeUp(1.1)}
          className="pointer-events-auto grid grid-cols-2 gap-x-6 border-t border-white/15 xl:grid-cols-1"
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center justify-between border-b border-white/15 py-3.5 text-base font-semibold text-paper"
              >
                {link.label}
                <ArrowSwap className="text-white/45 transition-colors group-hover:text-paper" />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-20 z-30 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/50 xl:flex 2xl:left-28"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/15">
          <span
            className={`absolute inset-0 bg-paper motion-safe:animate-[scroll-cue_2s_cubic-bezier(0.65,0,0.35,1)_infinite] ${
              inView ? "" : "[animation-play-state:paused]"
            }`}
          />
        </span>
      </motion.div>
    </section>
  );
}
