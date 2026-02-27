"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import WatermarkText from "../ui/WatermarkText";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      <WatermarkText text="Contact" />

      {/* Gradient background transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-accent/10" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-black md:text-5xl"
        >
          Let&apos;s{" "}
          <span className="text-accent">Collaborate</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 max-w-lg text-lg text-white/50"
        >
          Have a project in mind or looking for a developer? I&apos;d love to
          hear from you.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 flex gap-6"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex h-14 w-14 items-center justify-center rounded-full text-xl transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex h-14 w-14 items-center justify-center rounded-full text-xl transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:your.email@gmail.com"
            className="glass flex h-14 w-14 items-center justify-center rounded-full text-xl transition-colors hover:text-accent"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Resume
          </a>
          <a
            href="mailto:your.email@gmail.com"
            className="rounded-full border border-white/20 px-8 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Footer */}
        <p className="mt-20 text-xs text-white/20">
          &copy; {new Date().getFullYear()} Resty James Nazareno. Built with
          Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
