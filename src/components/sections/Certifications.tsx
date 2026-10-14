"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiBookOpen, FiDownload, FiExternalLink } from "react-icons/fi";
import certifications from "../../data/certifications";
import { EASE, Reveal, RevealText } from "../ui/motion";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="editorial-panel relative scroll-mt-24 px-5 py-28 sm:px-12 md:py-36 lg:px-20 2xl:px-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 md:mb-20">
          <RevealText
            as="h2"
            text="Education & Certifications"
            accent={2}
            className="max-w-4xl text-[min(3rem,11vw)] font-black uppercase leading-[0.9] tracking-[-0.035em] text-ink md:text-7xl"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              A Computer Engineering degree, plus professional certificates in
              GitHub workflows, software development, and Python programming.
            </p>
          </Reveal>
        </div>

        <Reveal className="mb-6">
          <div className="grid gap-6 rounded-lg border border-ink/10 bg-panel p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
                <FiBookOpen aria-hidden className="h-4 w-4 shrink-0" />
                University of the Assumption · San Fernando, Pampanga
              </p>
              <h3 className="mt-4 max-w-3xl text-balance text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-ink md:text-4xl">
                Bachelor of Science in Computer Engineering
              </h3>
            </div>
            <p className="text-lg font-semibold tabular-nums text-ink md:text-xl">
              Jun 2026
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
              className="group flex h-full flex-col rounded-lg border border-ink/10 bg-panel transition-[translate,box-shadow] duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(22,22,22,0.1)]"
            >
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden
                className="block p-3"
              >
                <div className="relative aspect-22/17 overflow-hidden rounded-md bg-[#dbe8ea]">
                  <Image
                    src={cert.thumbnail}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
              </a>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink-soft">
                  <FiAward aria-hidden className="h-4 w-4" />
                  {cert.issuer}
                </p>
                <h3 className="text-balance text-xl font-black uppercase leading-tight tracking-[-0.01em] text-ink">
                  {cert.title}
                </h3>

                <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill gap-2 px-4 text-sm font-semibold text-ink hover:border-ink hover:bg-ink hover:text-panel"
                  >
                    <FiExternalLink aria-hidden />
                    Open
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="pill gap-2 px-4 text-sm font-semibold text-ink hover:border-ink hover:bg-ink hover:text-panel"
                  >
                    <FiDownload aria-hidden />
                    Download
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
