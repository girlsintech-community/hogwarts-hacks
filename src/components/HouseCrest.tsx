interface Props {
  house: "lion" | "serpent" | "badger" | "eagle";
  className?: string;
}

const PATHS: Record<Props["house"], { color: string; label: string; d: string }> = {
  lion: {
    color: "var(--gryffindor)",
    label: "Lion",
    // stylized lion head
    d: "M32 8c-6 0-10 4-12 8-3-1-6 1-7 4-1 4 2 7 5 7-1 3 0 7 3 9 0 5 4 10 11 12 3 1 6 1 9 0 7-2 11-7 11-12 3-2 4-6 3-9 3 0 6-3 5-7-1-3-4-5-7-4-2-4-6-8-12-8zm-6 18c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm12 0c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm-6 8c2 0 4 1 5 3-1 2-3 3-5 3s-4-1-5-3c1-2 3-3 5-3z",
  },
  serpent: {
    color: "var(--slytherin)",
    label: "Serpent",
    d: "M16 12c4-2 9-1 12 2 3 3 3 8 0 11-3 2-7 2-9-1 0 4 3 7 7 7 5 0 9-3 11-7 1 5-2 11-7 13-6 2-13 0-16-5-2-4-1-9 2-11 3-2 7-2 9 1 0-4-3-7-7-7-3 0-6 1-8 3 1-3 4-5 6-6z",
  },
  badger: {
    color: "var(--hufflepuff)",
    label: "Badger",
    d: "M32 10c-8 0-14 4-16 12-1 4 0 9 3 13 3 5 8 9 13 9s10-4 13-9c3-4 4-9 3-13-2-8-8-12-16-12zm-8 14c2 0 3 1 3 3s-1 3-3 3-3-1-3-3 1-3 3-3zm16 0c2 0 3 1 3 3s-1 3-3 3-3-1-3-3 1-3 3-3zm-8 12c3 0 5 2 5 4 0 1-2 2-5 2s-5-1-5-2c0-2 2-4 5-4z",
  },
  eagle: {
    color: "var(--ravenclaw)",
    label: "Eagle",
    d: "M32 10c-3 0-5 2-6 4l-4-2c-5-1-9 2-10 6 4-1 8 0 11 3-4 1-8 4-9 8 3-2 7-3 11-2-2 3-3 7-2 11 2-3 5-5 9-6-1 4 0 8 3 11 1-4 4-7 8-8 0 4 2 8 5 10 1-4 0-8-2-11 4 0 8-2 10-5-3-1-7-2-11-1 2-3 2-7 1-11-3 2-6 5-7 8-2-3-4-6-7-7l-2-6c-2-2-4-3-6-3z",
  },
};

export function HouseCrest({ house, className = "" }: Props) {
  const { color, d, label } = PATHS[house];
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={`${label} house crest`}
    >
      <defs>
        <radialGradient id={`grad-${house}`} cx="50%" cy="40%">
          <stop offset="0%" stopColor="oklch(0.88 0.16 88)" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
      </defs>
      {/* shield */}
      <path
        d="M32 2 L58 10 L56 36 C56 48 44 58 32 62 C20 58 8 48 8 36 L6 10 Z"
        fill={color}
        stroke="oklch(0.78 0.13 80)"
        strokeWidth="1.5"
      />
      <path
        d="M32 2 L58 10 L56 36 C56 48 44 58 32 62 C20 58 8 48 8 36 L6 10 Z"
        fill="none"
        stroke="oklch(0.88 0.16 88 / 0.5)"
        strokeWidth="0.5"
      />
      {/* animal */}
      <path d={d} fill={`url(#grad-${house})`} stroke="oklch(0.95 0.05 80 / 0.9)" strokeWidth="0.5" />
    </svg>
  );
}
