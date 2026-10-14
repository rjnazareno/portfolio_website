"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* A dot on the pointer and a ring that trails it, inverted against whatever is underneath.
   It only shows after a mouse moves; touch and reduced-motion visitors keep the native cursor. */
export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 400, damping: 32, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 400, damping: 32, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) {
      return;
    }
    const root = document.documentElement;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e: PointerEvent) => setHover(!!(e.target as Element).closest("a, button"));
    const leave = () => setVisible(false);
    const press = () => setDown(true);
    const release = () => setDown(false);

    root.classList.add("has-cursor");
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    root.addEventListener("pointerleave", leave);
    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      root.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  const layer = `pointer-events-none fixed left-0 top-0 z-100 mix-blend-difference transition-opacity duration-300 ${
    visible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <motion.div aria-hidden style={{ x: ringX, y: ringY }} className={layer}>
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-white transition-[width,height,background-color,scale] duration-300 ease-out-expo ${
            hover ? "h-14 w-14 bg-white" : "h-9 w-9"
          } ${down ? "scale-75" : ""}`}
        />
      </motion.div>
      <motion.div aria-hidden style={{ x, y }} className={layer}>
        <div
          className={`h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-[scale] duration-300 ${
            hover ? "scale-0" : ""
          }`}
        />
      </motion.div>
    </>
  );
}
