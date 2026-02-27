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
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

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
      className="relative overflow-hidden py-32"
    >
      <WatermarkText text="Technologies" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <SectionHeading label="Technologies" title="My Tech Stack" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 max-w-2xl text-lg leading-relaxed text-white/50"
        >
          I build{" "}
          <span className="font-semibold text-accent">
            full-stack applications
          </span>
          , combining best frontend frameworks, modern backend architecture,
          clean API design, and{" "}
          <span className="font-semibold text-cyan">
            user-focused experiences
          </span>
          .
        </motion.p>

        <div className="grid gap-10 md:grid-cols-3">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
            >
              <h3 className="mb-6 text-xs font-bold tracking-[0.2em] uppercase text-white/30">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <GlassCard
                      key={skill.name}
                      className="flex items-center gap-2 !p-3 text-sm"
                    >
                      {Icon && <Icon className="h-5 w-5 text-accent-light" />}
                      <span>{skill.name}</span>
                    </GlassCard>
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
