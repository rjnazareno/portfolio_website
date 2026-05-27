"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiDownload, FiExternalLink } from "react-icons/fi";
import certifications from "../../data/certifications";
import WatermarkText from "../ui/WatermarkText";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="editorial-panel relative scroll-mt-28 overflow-hidden px-5 py-28 sm:px-12 lg:px-20 2xl:px-28"
    >
      <WatermarkText text="Certified" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1fr] md:items-end"
        >
          <h2 className="text-4xl font-black uppercase leading-none text-ink md:text-6xl">
            Certifications
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Professional certificates across GitHub workflows, software
            development fundamentals, and Python programming.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-panel/80 shadow-[0_18px_50px_rgba(22,22,22,0.05)] transition-transform hover:-translate-y-1"
            >
              <div className="relative border-b border-ink/10 bg-panel p-4">
                <div className="relative aspect-[22/17] overflow-hidden bg-[#dbe8ea] shadow-[0_12px_28px_rgba(22,22,22,0.08)]">
                  <Image
                    src={cert.thumbnail}
                    alt={`${cert.title} certificate thumbnail`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute left-4 top-4 rounded-full border border-ink/10 bg-panel/90 px-3 py-1 text-[10px] font-bold uppercase text-ink shadow-[0_8px_18px_rgba(22,22,22,0.08)]">
                  Certificate
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink-soft">
                  <FiAward className="h-5 w-5" />
                  {cert.issuer}
                </div>
                <h3 className="text-xl font-black uppercase leading-tight text-ink">
                  {cert.title}
                </h3>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill gap-2 px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                  >
                    <FiExternalLink />
                    Open
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="pill gap-2 px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                  >
                    <FiDownload />
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
