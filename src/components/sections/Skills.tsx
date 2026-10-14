"use client";

import { motion } from "framer-motion";
import {
  SiClaude,
  SiOpenai,
  SiOllama,
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiInertia,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiGit,
  SiGithub,
  SiLinear,
  SiDocker,
  SiRailway,
  SiVite,
  SiVercel,
  SiCloudinary,
  SiHostinger,
} from "react-icons/si";
import { IconType } from "react-icons";
import skills from "../../data/skills";
import { EASE, Reveal, RevealText } from "../ui/motion";

const iconMap: Record<string, IconType> = {
  SiClaude,
  SiOpenai,
  SiOllama,
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiInertia,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiGit,
  SiGithub,
  SiLinear,
  SiDocker,
  SiRailway,
  SiVite,
  SiVercel,
  SiCloudinary,
  SiHostinger,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="editorial-panel relative scroll-mt-24 bg-paper px-5 py-28 sm:px-12 md:py-36 lg:px-20 2xl:px-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[0.8fr_1fr] md:items-end">
          <RevealText
            as="h2"
            text="Tech Stack"
            accent={1}
            className="text-[min(3rem,11vw)] font-black uppercase leading-[0.9] tracking-[-0.035em] text-ink md:text-7xl"
          />
          <Reveal delay={0.15}>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              The tools and systems I build with, from AI-assisted development
              to the business workflows companies run on every day.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-ink/15">
          {skills.map((category) => (
            <div
              key={category.title}
              className="grid gap-6 border-b border-ink/15 py-10 md:grid-cols-[0.75fr_1.7fr] md:items-start md:py-12"
            >
              <RevealText
                as="h3"
                text={category.title}
                className="text-2xl font-black uppercase leading-none tracking-[-0.02em] text-ink md:text-4xl"
              />
              <motion.ul
                className="flex flex-wrap gap-2.5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={{ visible: { transition: { staggerChildren: 0.035 } } }}
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon && iconMap[skill.icon];
                  return (
                    <motion.li
                      key={skill.name}
                      variants={{
                        hidden: { opacity: 0, y: 14 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                      }}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/10 bg-panel px-4 py-2 text-sm font-semibold text-ink"
                    >
                      {Icon && <Icon aria-hidden className="h-4.5 w-4.5 text-ink-soft" />}
                      {skill.name}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
