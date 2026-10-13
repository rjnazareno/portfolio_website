"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import ProjectVisual from "../projects/ProjectVisual";
import ScreenViewer, { ProjectStats } from "../projects/ScreenViewer";
import projects from "../../data/projects";
import { ArrowSwap, EASE, Reveal, RevealImage, RevealText } from "../ui/motion";

export default function AllWorks() {
  return (
    <section
      id="all-work"
      className="editorial-panel relative scroll-mt-24 px-4 pb-24 pt-32 sm:px-6 md:pt-40 lg:px-8 2xl:px-10"
    >
      <div className="w-full">
        <div className="mb-12 grid gap-6 border-b border-ink/10 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <RevealText
            as="h1"
            text="All Works"
            accent={1}
            className="text-6xl font-black uppercase leading-[0.9] tracking-[-0.035em] text-ink md:text-8xl"
          />
          <Reveal delay={0.15} className="lg:justify-self-end">
            <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              A dedicated look at each build, with more space for the interface,
              technical decisions, and the product details behind the preview
              cards.
            </p>
          </Reveal>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => {
            const isReversed = i % 2 === 1;
            const hasProjectLinks = project.liveUrl || project.repoUrl;

            return (
              <motion.article
                key={project.slug}
                id={project.slug}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="group scroll-mt-24 overflow-clip rounded-lg border border-ink/10 bg-panel shadow-[0_20px_60px_rgba(22,22,22,0.06)]"
              >
                <div
                  className={`grid gap-0 ${
                    isReversed
                      ? "xl:grid-cols-[minmax(28rem,0.55fr)_minmax(0,1.45fr)] xl:[&>*:first-child]:order-2"
                      : "xl:grid-cols-[minmax(0,1.45fr)_minmax(28rem,0.55fr)]"
                  }`}
                >
                  <div
                    className={`relative border-b border-ink/10 bg-[#eeeeea] p-4 sm:p-6 xl:border-b-0 ${
                      isReversed ? "xl:border-l" : "xl:border-r"
                    }`}
                  >
                    {/* Stays in view while the details column scrolls past. */}
                    <div className="xl:sticky xl:top-28">
                      <RevealImage className="aspect-16/11 rounded-md" delay={0.15}>
                        <ProjectVisual project={project} />
                      </RevealImage>
                    </div>
                  </div>

                  <div className="flex min-h-full flex-col justify-between p-6 sm:p-8 xl:p-10 2xl:p-12">
                    <div>
                      <h2 className="text-3xl font-black uppercase leading-none tracking-[-0.03em] text-ink sm:text-5xl">
                        {project.title}
                      </h2>
                      {project.context && (
                        <p className="mt-3 text-base font-semibold text-ink-soft">
                          {project.context}
                        </p>
                      )}
                      <p className="mt-5 text-base leading-relaxed text-muted">
                        {project.description}
                      </p>
                      {project.stats && (
                        <div className="mt-8">
                          <ProjectStats stats={project.stats} />
                        </div>
                      )}

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
                            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-panel transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(22,22,22,0.25)]"
                          >
                            Live Site
                            <ArrowSwap />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pill gap-2 px-5 text-sm font-semibold text-ink hover:border-ink hover:bg-ink hover:text-panel"
                          >
                            Repository
                            <FiGithub />
                          </a>
                        )}
                        {!hasProjectLinks && (
                          <span className="text-sm font-semibold text-muted">
                            Private build
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {project.screens && (
                  <div className="border-t border-ink/10 p-6 sm:p-8 xl:p-10">
                    <ScreenViewer screens={project.screens} name={project.title} />
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
