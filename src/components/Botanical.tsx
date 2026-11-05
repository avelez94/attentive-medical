/**
 * Restrained botanical line drawings. Purely decorative, hidden from
 * assistive technology, and used sparingly (at most one or two per section).
 */

type Props = {
  className?: string;
  variant?: "sprig" | "branch" | "stem";
};

const leaf = "M0 0 C 7 -7.5, 21 -7.5, 30 0 C 21 7.5, 7 7.5, 0 0 Z";
const vein = "M2 0 L 27 0";

type LeafSpec = { x: number; y: number; r: number; s: number };

const variants: Record<NonNullable<Props["variant"]>, { viewBox: string; stem: string; leaves: LeafSpec[] }> = {
  sprig: {
    viewBox: "0 0 160 220",
    stem: "M30 215 C 50 170, 70 120, 128 18",
    leaves: [
      { x: 44, y: 178, r: -150, s: 1 },
      { x: 48, y: 170, r: -20, s: 0.95 },
      { x: 60, y: 140, r: -160, s: 1.05 },
      { x: 66, y: 130, r: -15, s: 1 },
      { x: 80, y: 104, r: -165, s: 0.95 },
      { x: 87, y: 94, r: -25, s: 0.9 },
      { x: 101, y: 70, r: -170, s: 0.8 },
      { x: 108, y: 60, r: -35, s: 0.75 },
      { x: 128, y: 18, r: -70, s: 0.6 },
    ],
  },
  branch: {
    viewBox: "0 0 300 140",
    stem: "M6 132 C 80 120, 170 80, 292 20",
    leaves: [
      { x: 60, y: 122, r: -110, s: 0.9 },
      { x: 70, y: 120, r: 40, s: 0.85 },
      { x: 120, y: 103, r: -115, s: 1 },
      { x: 132, y: 98, r: 35, s: 0.95 },
      { x: 180, y: 78, r: -120, s: 0.95 },
      { x: 192, y: 72, r: 30, s: 0.9 },
      { x: 236, y: 50, r: -125, s: 0.8 },
      { x: 246, y: 44, r: 25, s: 0.75 },
      { x: 292, y: 20, r: -25, s: 0.6 },
    ],
  },
  stem: {
    viewBox: "0 0 90 240",
    stem: "M45 238 C 40 180, 50 110, 46 8",
    leaves: [
      { x: 43, y: 196, r: -140, s: 0.95 },
      { x: 44, y: 176, r: -40, s: 0.95 },
      { x: 46, y: 140, r: -145, s: 0.9 },
      { x: 47, y: 120, r: -35, s: 0.9 },
      { x: 48, y: 84, r: -150, s: 0.8 },
      { x: 48, y: 64, r: -30, s: 0.8 },
      { x: 46, y: 8, r: -90, s: 0.55 },
    ],
  },
};

export function Botanical({ className, variant = "sprig" }: Props) {
  const v = variants[variant];
  return (
    <svg className={`botanical ${className ?? ""}`} viewBox={v.viewBox} aria-hidden="true" focusable="false">
      <path d={v.stem} />
      {v.leaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
          <path d={leaf} className="botanical-leaf" />
          <path d={vein} />
        </g>
      ))}
    </svg>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 52" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M6 50 C 12 38, 18 24, 30 4" />
        <g transform="translate(11 38) rotate(-140) scale(0.48)">
          <path d={leaf} fill="currentColor" fillOpacity="0.18" />
        </g>
        <g transform="translate(13 34) rotate(-30) scale(0.5)">
          <path d={leaf} fill="currentColor" fillOpacity="0.18" />
        </g>
        <g transform="translate(18 25) rotate(-150) scale(0.46)">
          <path d={leaf} fill="currentColor" fillOpacity="0.18" />
        </g>
        <g transform="translate(20 21) rotate(-40) scale(0.44)">
          <path d={leaf} fill="currentColor" fillOpacity="0.18" />
        </g>
        <g transform="translate(30 4) rotate(-75) scale(0.36)">
          <path d={leaf} fill="currentColor" fillOpacity="0.18" />
        </g>
      </g>
    </svg>
  );
}
