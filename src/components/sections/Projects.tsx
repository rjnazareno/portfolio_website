"use client";

import Link from "next/link";
import ProjectVisual from "../projects/ProjectVisual";
import { ProjectStats } from "../projects/ScreenViewer";
import projects from "../../data/projects";
import { ArrowSwap, Reveal, RevealImage, RevealText } from "../ui/motion";

const featured = projects.filter((p) => p.featured);
const more = projects.filter((p) => !p.featured);

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink-soft"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="editorial-panel relative scroll-mt-24 px-5 py-28 sm:px-12 md:py-36 lg:px-20 2xl:px-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <RevealText
              as="h2"
              text="Selected Work"
              accent={1}
              className="text-[min(3rem,11vw)] font-black uppercase leading-[0.9] tracking-[-0.035em] text-ink md:text-7xl"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Production systems I built for real businesses, followed by
                earlier full-stack and mobile projects.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <Link
              href="/work"
              className="pill group gap-2.5 px-6 text-base font-semibold text-ink hover:border-ink hover:bg-ink hover:text-panel"
            >
              View All Work
              <ArrowSwap />
            </Link>
          </Reveal>
        </div>

        <div className="space-y-24 md:space-y-32">
          {featured.map((project, i) => (
            <article
              key={project.slug}
              className="group grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center lg:gap-14"
            >
              <Link
                href={`/work#${project.slug}`}
                tabIndex={-1}
                aria-hidden
                className={`block ${i % 2 ? "lg:order-2" : ""}`}
              >
                <RevealImage className="relative aspect-16/11 rounded-lg border border-ink/10 bg-[#eeeeea]">
                  <div className="h-full p-3 sm:p-4">
                    <ProjectVisual project={project} />
                  </div>
                </RevealImage>
              </Link>

              <Reveal delay={0.1}>
                <h3 className="text-[min(2.25rem,9vw)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-ink md:text-5xl">
                  {project.title}
                </h3>
                {project.context && (
                  <p className="mt-3 text-base font-semibold text-ink-soft">{project.context}</p>
                )}
                <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                  {project.description}
                </p>
                {project.stats && (
                  <div className="mt-8">
                    <ProjectStats stats={project.stats} />
                  </div>
                )}
                <div className="mt-6">
                  <Tags tags={project.tags} />
                </div>
                <Link
                  href={`/work#${project.slug}`}
                  className="pill mt-8 gap-2.5 px-6 text-base font-semibold text-ink hover:border-ink hover:bg-ink hover:text-panel"
                >
                  See the screens
                  <ArrowSwap />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>

        <RevealText
          as="h3"
          text="More Projects"
          className="mb-10 mt-28 border-t border-ink/15 pt-10 text-2xl font-black uppercase leading-none tracking-[-0.02em] text-ink md:mt-36 md:text-4xl"
        />

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {more.map((project, i) => {
            const href = project.liveUrl ?? `/work#${project.slug}`;
            const external = Boolean(project.liveUrl);
            const target = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <article key={project.slug} className="group">
                <a href={href} tabIndex={-1} aria-hidden {...target} className="block">
                  <RevealImage
                    className="relative aspect-4/3 rounded-lg border border-ink/10 bg-[#eeeeea]"
                    delay={i * 0.08}
                  >
                    <div className="h-full p-2.5 sm:p-3">
                      <ProjectVisual project={project} />
                    </div>
                  </RevealImage>
                </a>

                <Reveal delay={0.1}>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h4 className="text-xl font-black uppercase leading-none tracking-[-0.02em] text-ink md:text-2xl">
                      {project.title}
                    </h4>
                    <a
                      href={href}
                      {...target}
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink"
                    >
                      {external ? "Live site" : "Details"}
                      <ArrowSwap />
                    </a>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-4">
                    <Tags tags={project.tags} />
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
