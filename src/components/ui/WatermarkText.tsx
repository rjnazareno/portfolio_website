"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface WatermarkTextProps {
  text: string;
  repeat?: number;
}

export default function WatermarkText({
  text,
  repeat = 6,
}: WatermarkTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  const repeated = Array(repeat)
    .fill(text)
    .join(" \u00B7 ");

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 overflow-hidden select-none"
      aria-hidden
    >
      {[x1, x2, x1, x2].map((x, i) => (
        <motion.div key={i} className="watermark-track" style={{ x }}>
          {repeated}
        </motion.div>
      ))}
    </div>
  );
}
