"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";
import skills from "../../data/skills";
import WatermarkText from "../ui/WatermarkText";

const iconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  VscCode,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="editorial-panel relative scroll-mt-28 overflow-hidden px-5 py-28 sm:px-12 lg:px-20 2xl:px-28"
    >
      <WatermarkText text="Service" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-6 md:grid-cols-[0.8fr_1fr] md:items-end"
        >
          <h2 className="text-4xl font-black uppercase leading-none text-ink md:text-6xl">
            What I Build With
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            A focused toolkit for building full-stack applications: responsive
            interfaces, clean APIs, reliable data layers, and thoughtful
            deployment workflows.
          </p>
        </motion.div>

        <div className="divide-y divide-ink/12 border-y border-ink/12">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="grid gap-6 py-8 md:grid-cols-[0.75fr_1.7fr] md:items-center"
            >
              <h3 className="text-2xl font-black uppercase leading-none text-ink md:text-4xl">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/10 bg-panel/75 px-4 py-2 text-sm font-semibold text-ink shadow-[0_8px_22px_rgba(22,22,22,0.04)]"
                    >
                      {Icon && <Icon className="h-5 w-5 text-ink-soft" />}
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
