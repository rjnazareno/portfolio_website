"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ProjectVisual from "../projects/ProjectVisual";
import projects from "../../data/projects";
import WatermarkText from "../ui/WatermarkText";

export default function Projects() {
  return (
    <section
      id="projects"
      className="editorial-panel relative scroll-mt-28 overflow-visible px-5 py-28 sm:px-12 lg:px-20 2xl:px-28"
    >
      <WatermarkText text="Portfolio" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <h2 className="text-4xl font-black uppercase leading-none text-ink md:text-6xl">
              Selected Work
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              A small set of full-stack projects built around clear interfaces,
              practical architecture, and reliable user flows.
            </p>
          </div>
          <Link
            href="/work"
            className="pill w-fit px-6 py-3.5 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            View All Work
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => {
            const hasProjectLinks = project.liveUrl || project.repoUrl;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative overflow-visible rounded-lg border border-ink/10 bg-panel/70 shadow-[0_18px_50px_rgba(22,22,22,0.05)] transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[1.28] w-full overflow-hidden border-b border-ink/10 bg-[#eeeeea] p-4">
                  <ProjectVisual project={project} index={i} />

                  {hasProjectLinks && (
                    <div className="absolute inset-0 z-40 flex items-center justify-center gap-4 bg-ink/70 opacity-0 transition-opacity group-hover:opacity-100">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-panel text-ink transition-transform hover:-translate-y-0.5"
                          aria-label={`${project.title} live site`}
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-panel text-ink transition-transform hover:-translate-y-0.5"
                          aria-label={`${project.title} repository`}
                        >
                          <FiGithub size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="mb-3 text-2xl font-semibold leading-tight text-ink">
                    {project.title}
                  </h3>
                  <div
                    className="group/details relative mb-5"
                    tabIndex={0}
                    aria-label={`${project.title} full description`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                      {project.description}
                    </p>
                    <div className="pointer-events-none absolute left-0 right-0 top-full z-50 mt-3 rounded-lg border border-ink/10 bg-panel p-4 opacity-0 shadow-[0_18px_40px_rgba(22,22,22,0.14)] transition-opacity duration-200 group-hover/details:opacity-100 group-focus/details:opacity-100">
                      <p className="text-sm leading-relaxed text-muted">
                        {project.description}
                      </p>
                      {project.highlights && (
                        <ul className="mt-4 space-y-2 border-l border-ink/10 pl-4">
                          {project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="text-xs leading-relaxed text-ink-soft"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/10 bg-panel px-3 py-1 text-xs font-semibold text-ink-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
