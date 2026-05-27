import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`surface-card p-6 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
