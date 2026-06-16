import { useEffect, useState } from "react";

const TARGET = new Date("2026-09-27T09:00:00").getTime();

function diff() {
  const t = TARGET - Date.now();
  if (t <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(t / 86400000),
    h: Math.floor((t / 3600000) % 24),
    m: Math.floor((t / 60000) % 60),
    s: Math.floor((t / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", v: t.d },
    { label: "Hours", v: t.h },
    { label: "Minutes", v: t.m },
    { label: "Seconds", v: t.s },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-5">
      {items.map((i) => (
        <div
          key={i.label}
          className="magic-border-glow flex min-w-[68px] flex-col items-center rounded-lg bg-midnight/60 px-3 py-3 backdrop-blur-sm sm:min-w-[88px] sm:px-5 sm:py-4"
        >
          <span className="font-display text-2xl font-bold text-gold-bright sm:text-4xl">
            {String(i.v).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
            {i.label}
          </span>
        </div>
      ))}
    </div>
  );
}
