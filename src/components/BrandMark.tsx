export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Hogwartz Hacks">
      <defs>
        <linearGradient id="bm-gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.92 0.16 88)" />
          <stop offset="100%" stopColor="oklch(0.65 0.13 70)" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="oklch(0.14 0.05 265)" stroke="url(#bm-gold)" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="url(#bm-gold)" strokeWidth="0.5" strokeDasharray="2 3" />
      <path d="M30 12 L22 34 H30 L26 52 L42 28 H34 L38 12 Z" fill="url(#bm-gold)" />
    </svg>
  );
}
