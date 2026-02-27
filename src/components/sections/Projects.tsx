"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../../data/projects";
import WatermarkText from "../ui/WatermarkText";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-32">
      <WatermarkText text="Works" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <SectionHeading label="Projects" title="My Works" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 max-w-2xl text-lg leading-relaxed text-white/50"
        >
          I have independently built many{" "}
          <span className="font-semibold text-accent">full-stack</span>{" "}
          projects, handling the{" "}
          <span className="font-semibold text-cyan">
            frontend, backend, APIs, security, database
          </span>
          , and modern best practices.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group glass relative overflow-hidden rounded-2xl"
            >
              {/* Image placeholder */}
              <div className="relative h-48 w-full overflow-hidden bg-navy-800">
                <div className="flex h-full items-center justify-center text-white/20 text-sm">
                  {/* Replace with next/image when you have screenshots */}
                  <span className="text-4xl font-black text-accent/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-navy-950/80 opacity-0 transition-opacity group-hover:opacity-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors hover:text-accent"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors hover:text-accent"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/50">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
