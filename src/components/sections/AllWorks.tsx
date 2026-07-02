"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import ProjectVisual from "../projects/ProjectVisual";
import projects from "../../data/projects";

export default function AllWorks() {
  return (
    <section
      id="all-work"
      className="editorial-panel relative scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 2xl:px-10"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid gap-6 border-b border-ink/10 pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-muted">
              Complete Index
            </p>
            <h2 className="text-4xl font-black uppercase leading-none text-ink md:text-6xl">
              All Works
            </h2>
          </div>
          <p className="max-w-4xl text-base leading-relaxed text-muted md:text-lg lg:justify-self-end">
            A dedicated look at each build, with more space for the interface,
            technical decisions, and the product details behind the preview
            cards.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => {
            const isReversed = i % 2 === 1;
            const hasProjectLinks = project.liveUrl || project.repoUrl;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="overflow-hidden rounded-lg border border-ink/10 bg-panel shadow-[0_20px_60px_rgba(22,22,22,0.06)]"
              >
                <div
                  className={`grid gap-0 xl:grid-cols-[minmax(0,1.45fr)_minmax(28rem,0.55fr)] ${
                    isReversed ? "xl:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`relative min-h-[25rem] border-b border-ink/10 bg-[#eeeeea] p-4 sm:p-6 xl:min-h-[42rem] xl:border-b-0 ${
                      isReversed ? "xl:border-l" : "xl:border-r"
                    }`}
                  >
                    <ProjectVisual project={project} index={i} />
                  </div>

                  <div className="flex min-h-full flex-col justify-between p-6 sm:p-8 xl:p-10 2xl:p-12">
                    <div>
                      <div className="mb-8 flex items-center justify-between gap-4 border-b border-ink/10 pb-5">
                        <span className="font-mono text-sm text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold uppercase text-ink-soft">
                          Work
                        </span>
                      </div>

                      <h3 className="text-3xl font-black uppercase leading-none text-ink sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-5 text-base leading-relaxed text-muted">
                        {project.description}
                      </p>

                      {project.highlights && (
                        <ul className="mt-8 space-y-3 border-l border-ink/10 pl-5">
                          {project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="text-sm leading-relaxed text-ink-soft"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mt-10">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs font-semibold text-ink-soft"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-panel transition-transform hover:-translate-y-0.5"
                          >
                            Live Site
                            <FiExternalLink />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/10 bg-panel px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                          >
                            Repository
                            <FiGithub />
                          </a>
                        )}
                        {!hasProjectLinks && (
                          <span className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/10 bg-cream px-5 py-3 text-sm font-semibold text-ink-soft">
                            Private Build
                            <FiArrowUpRight />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
