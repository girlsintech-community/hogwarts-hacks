import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  pageNumber?: number | string;
  chapter?: string;
  id?: string;
}

export function BookPage({ children, pageNumber, chapter, id }: Props) {
  return (
    <section id={id} className="relative px-4 py-12 sm:px-6 sm:py-16">
      <motion.div
        initial={{ opacity: 0, rotateY: -16, x: -24 }}
        whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        style={{
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
          backgroundColor: "oklch(0.93 0.05 80)",
          backgroundImage: [
            "radial-gradient(ellipse at top left, oklch(0.78 0.1 70 / 0.35), transparent 60%)",
            "radial-gradient(ellipse at bottom right, oklch(0.55 0.12 50 / 0.3), transparent 60%)",
            "radial-gradient(circle at 12% 22%, oklch(0.4 0.1 50 / 0.18) 0, transparent 3%)",
            "radial-gradient(circle at 82% 76%, oklch(0.4 0.1 50 / 0.15) 0, transparent 3%)",
            "radial-gradient(circle at 60% 8%, oklch(0.4 0.1 50 / 0.12) 0, transparent 2%)",
            "linear-gradient(180deg, oklch(0.94 0.05 80) 0%, oklch(0.88 0.07 75) 100%)",
          ].join(", "),
          color: "oklch(0.2 0.03 60)",
          border: "1px solid oklch(0.5 0.08 60 / 0.5)",
          boxShadow:
            "0 30px 80px -20px oklch(0 0 0 / 0.6), inset 0 0 80px oklch(0.45 0.12 55 / 0.25), inset 0 0 12px oklch(0.3 0.1 50 / 0.3)",
          borderRadius: "8px",
        }}
        className="relative mx-auto max-w-5xl px-6 py-14 sm:px-14 sm:py-20"
      >
        <Corner className="absolute left-3 top-3" />
        <Corner className="absolute right-3 top-3 rotate-90" />
        <Corner className="absolute left-3 bottom-3 -rotate-90" />
        <Corner className="absolute right-3 bottom-3 rotate-180" />

        {chapter && (
          <p
            className="mb-3 text-center font-display text-xs uppercase tracking-[0.4em] sm:text-sm"
            style={{ color: "oklch(0.35 0.08 50)" }}
          >
            ✦ {chapter} ✦
          </p>
        )}

        <div className="relative">{children}</div>

        {pageNumber !== undefined && (
          <p
            className="mt-10 text-center font-serif italic"
            style={{ color: "oklch(0.35 0.08 50 / 0.7)" }}
          >
            — {pageNumber} —
          </p>
        )}
      </motion.div>
    </section>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`pointer-events-none h-10 w-10 ${className}`}
      style={{ color: "oklch(0.35 0.08 50 / 0.55)" }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M2 14 V4 H14" strokeLinecap="round" />
      <path d="M6 10 Q10 6 14 8" />
      <circle cx="6" cy="6" r="1.4" fill="currentColor" />
    </svg>
  );
}
