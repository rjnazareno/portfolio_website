"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowSwap, EASE, Magnetic, RollText } from "./ui/motion";

const navLinks = [
  { label: "Experience", href: "/#timeline", id: "timeline" },
  { label: "Work", href: "/#projects", id: "projects" },
  { label: "Stack", href: "/#skills", id: "skills" },
  { label: "Education", href: "/#certifications", id: "certifications" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(pathname === "/work" ? "projects" : "");
  const [overDark, setOverDark] = useState(pathname === "/");
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  // Hide while reading down the page, return as soon as the visitor scrolls up.
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    setHidden(y > 480 && y > lastY.current);
    lastY.current = y;
  });

  // Track which section sits in the middle of the viewport.
  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Invert the bar while it sits over a dark section (marked data-nav="dark").
  useEffect(() => {
    const under = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? under.add(e.target) : under.delete(e.target)));
        setOverDark(under.size > 0);
      },
      { rootMargin: "0px 0px -92% 0px" },
    );
    document.querySelectorAll('[data-nav="dark"]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const dark = overDark && !open;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color,backdrop-filter] duration-500 ${
          dark ? "text-paper" : "text-ink"
        } ${
          !(scrolled || open)
            ? "border-transparent bg-transparent"
            : dark
              ? "border-white/10 bg-ink/70 backdrop-blur-xl"
              : "border-ink/10 bg-panel/80 backdrop-blur-xl"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="grid h-16 grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 md:h-20 md:grid-cols-[1fr_auto_1fr] lg:px-16"
        >
          <Link
            href="/#hero"
            onClick={() => setOpen(false)}
            className="group w-fit text-sm font-black uppercase sm:text-base"
          >
            <RollText>Resty James</RollText>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="group relative isolate block rounded-full px-4 py-2 text-sm font-medium lg:px-5 lg:text-[15px]"
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-current/10"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <RollText>{link.label}</RollText>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-end">
            <Magnetic className="hidden md:inline-flex">
              <a
                href="mailto:rjmanago@gmail.com"
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[background-color,color,box-shadow] duration-500 hover:shadow-[0_12px_28px_rgba(22,22,22,0.25)] lg:px-6 ${
                  dark ? "bg-paper text-ink" : "bg-ink text-panel"
                }`}
              >
                Let&apos;s Talk
                <ArrowSwap />
              </a>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors duration-500 md:hidden ${
                dark ? "bg-paper text-ink" : "bg-ink text-panel"
              }`}
            >
              <motion.span
                animate={open ? { rotate: 45, y: 3.75 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="block h-[1.5px] w-5 bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -3.75 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="block h-[1.5px] w-5 bg-current"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-panel px-5 pb-10 pt-24 sm:px-8 md:hidden"
          >
            <ul className="border-t border-ink/10">
              {navLinks.map((link, i) => (
                <li key={link.id} className="overflow-hidden border-b border-ink/10">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%", transition: { duration: 0.3 } }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-[2.75rem] font-black uppercase leading-none tracking-[-0.03em] text-ink"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.45 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="space-y-1 text-base font-semibold"
            >
              <a href="mailto:rjmanago@gmail.com" className="block text-ink">
                rjmanago@gmail.com
              </a>
              <a href="tel:+639455069726" className="block text-muted">
                +63 945 506 9726
              </a>
              <a
                href="/Resty_Nazareno_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block pt-3 text-ink underline underline-offset-4"
              >
                Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
