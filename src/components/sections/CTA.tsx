"use client";

import { RevealText } from "../ui/motion";

export default function CTA() {
  return (
    <section className="editorial-panel relative flex min-h-[70vh] items-center justify-center bg-paper px-5 py-28 sm:px-12 lg:px-20 2xl:px-28">
      <RevealText
        as="p"
        text="I’m passionate about building scalable full-stack apps and writing clean, efficient code to solve real problems."
        accent={13}
        className="mx-auto max-w-5xl text-balance text-center text-[clamp(2rem,5.2vw,4.75rem)] font-black leading-[1.02] tracking-[-0.035em] text-ink"
      />
    </section>
  );
}
