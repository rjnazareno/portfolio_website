"use client";

import { ArrowSwap, Magnetic, Reveal, RevealText } from "../ui/motion";

const links = [
  { label: "GitHub", href: "https://github.com/rjnazareno" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/resty-james-nazareno-142ab4345" },
  { label: "+63 945 506 9726", href: "tel:+639455069726" },
  { label: "Resume", href: "/Resty_Nazareno_resume.pdf" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      data-nav="dark"
      className="grain editorial-panel editorial-panel-dark relative scroll-mt-24 px-5 pb-10 pt-28 sm:px-12 md:pt-40 lg:px-20 2xl:px-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <RevealText
          as="h2"
          text="Have a project in mind?"
          accent={3}
          className="max-w-4xl text-[clamp(2.75rem,7.5vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.035em] text-paper"
        />

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            Looking for a developer? I&apos;d love to hear from you and
            collaborate on something clear, useful, and impactful.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-14 md:mt-20">
          <Magnetic strength={0.12}>
            <a
              href="mailto:rjmanago@gmail.com"
              className="group inline-flex items-center gap-3 text-[clamp(1.6rem,5vw,4rem)] font-black leading-none tracking-[-0.03em] text-paper md:gap-5"
            >
              <span className="relative pb-2">
                rjmanago@gmail.com
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white/20" />
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-paper transition-transform duration-700 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </span>
              <ArrowSwap />
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.35} className="mt-16 md:mt-24">
          <ul className="grid border-t border-white/15 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http") || link.href.endsWith(".pdf")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center justify-between border-b border-white/15 py-5 text-lg font-semibold text-paper"
                >
                  {link.label}
                  <ArrowSwap className="text-white/50 transition-colors group-hover:text-paper" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-4 text-sm text-white/55">
          <p>&copy; {new Date().getFullYear()} Resty James Nazareno.</p>
          <p>San Fernando, Pampanga, Philippines</p>
          <a href="#" className="transition-colors hover:text-paper">
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}
