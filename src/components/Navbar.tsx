"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Service", href: "#skills" },
  { label: "Experience", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-panel/95 shadow-[0_8px_30px_rgba(22,22,22,0.06)] backdrop-blur-md">
        <nav className="px-4 sm:px-8 lg:px-16" aria-label="Main navigation">
          <div className="grid min-h-20 w-full grid-cols-[1fr_auto] items-center gap-3 md:min-h-24 md:grid-cols-[auto_1fr_auto] md:gap-8">
            <a
              href="#hero"
              className="w-fit whitespace-nowrap text-sm font-black uppercase text-ink transition-colors hover:text-muted sm:text-base"
            >
              Resty James
            </a>

            <div className="hidden items-center justify-center gap-8 text-sm font-medium text-ink md:flex lg:gap-16 lg:text-base">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap transition-colors hover:text-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="mailto:rjmanago@gmail.com"
              className="hidden w-fit items-center gap-2 justify-self-end whitespace-nowrap rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-panel shadow-[0_10px_24px_rgba(22,22,22,0.22)] transition-transform hover:-translate-y-0.5 md:flex lg:px-6 lg:text-base"
            >
              Let&apos;s Talk
              <FiArrowUpRight />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="relative z-50 flex h-12 w-12 flex-col items-center justify-center gap-[5px] justify-self-end rounded-full border border-ink/10 bg-ink text-panel shadow-[0_10px_24px_rgba(22,22,22,0.22)] md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-5 bg-current"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[2px] w-5 bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-5 bg-current"
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-paper/95 backdrop-blur-md"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="flex flex-col items-center gap-7"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-4xl font-black uppercase leading-none text-ink transition-colors hover:text-muted"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
