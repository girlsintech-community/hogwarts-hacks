import { useMemo } from "react";

interface Props {
  count?: number;
  className?: string;
}

export function MagicParticles({ count = 30, className = "" }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 4,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold-bright"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${p.size * 4}px oklch(0.88 0.16 88 / 0.8)`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite, twinkle ${p.duration * 0.7}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
