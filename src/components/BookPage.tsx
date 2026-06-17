import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  pageNumber?: number | string;
  chapter?: string;
  id?: string;
  className?: string;
}

export function BookPage({ children, pageNumber, chapter, id, className = "" }: Props) {
  return (
    <section id={id} className={`relative px-4 py-12 sm:px-6 sm:py-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, rotateY: -18, x: -30 }}
        whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        style={{ transformOrigin: "left center", transformStyle: "preserve-3d" }}
        className="book-page page-spine mx-auto max-w-5xl px-6 py-14 sm:px-14 sm:py-20"
      >
        <Corner className="absolute left-3 top-3" />
        <Corner className="absolute right-3 top-3 rotate-90" />
        <Corner className="absolute left-3 bottom-3 -rotate-90" />
        <Corner className="absolute right-3 bottom-3 rotate-180" />

        {chapter && (
          <p className="mb-2 text-center font-display text-xs uppercase tracking-[0.5em] text-ink/60">
            ✦ {chapter} ✦
          </p>
        )}

        <div className="relative">{children}</div>

        {pageNumber !== undefined && (
          <p className="mt-10 text-center font-serif italic text-ink/50">— {pageNumber} —</p>
        )}
      </motion.div>
    </section>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`pointer-events-none h-10 w-10 text-ink/40 ${className}`} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M2 14 V4 H14" strokeLinecap="round" />
      <path d="M6 10 Q10 6 14 8" />
      <circle cx="6" cy="6" r="1.2" fill="currentColor" />
    </svg>
  );
}
