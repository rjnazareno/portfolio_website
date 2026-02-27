"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorOrbs() {
  const [mounted, setMounted] = useState(false);

  const cursorX = useSpring(0, { stiffness: 80, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 80, damping: 20 });

  const trailX = useSpring(0, { stiffness: 40, damping: 25 });
  const trailY = useSpring(0, { stiffness: 40, damping: 25 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY, trailX, trailY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block">
      {/* Small leading orb */}
      <motion.div
        className="absolute h-3 w-3 rounded-full bg-accent"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Large trailing orb */}
      <motion.div
        className="absolute h-8 w-8 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
