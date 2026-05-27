"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import WatermarkText from "../ui/WatermarkText";

export default function Contact() {
  return (
    <section
      id="contact"
      className="editorial-panel relative min-h-[72vh] scroll-mt-28 overflow-hidden px-5 py-28 sm:px-12 lg:px-20 2xl:px-28"
    >
      <WatermarkText text="Contact" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-black uppercase leading-none text-ink md:text-6xl"
        >
          Have a project in mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-9 max-w-2xl text-lg leading-relaxed text-muted"
        >
          Have a project in mind or looking for a developer? I&apos;d love to
          hear from you and collaborate on something clear, useful, and
          impactful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="mailto:rjmanago@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-panel shadow-[0_14px_28px_rgba(22,22,22,0.2)] transition-transform hover:-translate-y-0.5"
          >
            Contact Me
            <FiArrowUpRight />
          </a>
          <a
            href="https://github.com/rjnazareno"
            target="_blank"
            rel="noopener noreferrer"
            className="pill gap-2 px-6 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <FiGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/resty-james-nazareno-142ab4345"
            target="_blank"
            rel="noopener noreferrer"
            className="pill gap-2 px-6 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
            LinkedIn
          </a>
          <a
            href="tel:09455069726"
            className="pill gap-2 px-6 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
            aria-label="Phone number"
          >
            <FiPhone />
            09455069726
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="pill px-6 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Resume
          </a>
          <a
            href="mailto:rjmanago@gmail.com"
            className="pill gap-2 px-6 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            <FiMail />
            rjmanago@gmail.com
          </a>
        </motion.div>

        <p className="mt-20 text-xs text-muted">
          &copy; {new Date().getFullYear()} Resty James Nazareno.
        </p>
      </div>
    </section>
  );
}
