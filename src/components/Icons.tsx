import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
export const External = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </Base>
);
export const Plus = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);
export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12.5l4.2 4.2L19 7" />
  </Base>
);
export const Leaf = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 19c4-1 9-5 12-13-6 0-12 3-12 9 0 1.5.4 2.8 1 4" />
    <path d="M5 19c2-4 5-7 8.5-9" />
  </Base>
);
export const People = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="2.6" />
    <circle cx="6" cy="9.5" r="2" />
    <circle cx="18" cy="9.5" r="2" />
    <path d="M7.5 19v-1.5a4.5 4.5 0 0 1 9 0V19M2.5 19v-1a3.5 3.5 0 0 1 4.6-3.3M21.5 19v-1a3.5 3.5 0 0 0-4.6-3.3" />
  </Base>
);
export const Heart = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 19.5s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 7.5 2.5c0 5.6-7.5 10-7.5 10z" />
  </Base>
);
export const Calendar = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="5.5" width="16" height="14" rx="2" />
    <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4M8 14h2M14 14h2" />
  </Base>
);
export const Chat = (p: IconProps) => (
  <Base {...p}>
    <path d="M4.5 12a7 6 0 1 1 3.2 5l-3.2 1.5.9-3A5.6 5.6 0 0 1 4.5 12z" />
    <path d="M9 11.5h6M9 14h3.5" />
  </Base>
);
export const Document = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 3.5h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1z" />
    <path d="M14 3.5V8h4M9 12h6M9 15h6M9 18h3.5" />
  </Base>
);
export const Laptop = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="5" width="14" height="10" rx="1.2" />
    <path d="M2.5 18.5h19l-1.5-3.5h-16z" />
  </Base>
);
export const Person = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </Base>
);
export const Clipboard = (p: IconProps) => (
  <Base {...p}>
    <rect x="5.5" y="4.5" width="13" height="16" rx="1.5" />
    <path d="M9 4.5V3.5h6v1M8.5 10l1.2 1.2 2-2M13.5 10.5h2.5M8.5 15l1.2 1.2 2-2M13.5 15.5h2.5" />
  </Base>
);
export const Lock = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2" />
  </Base>
);
export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <path d="M4 7l8 6 8-6" />
  </Base>
);
export const Phone = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.5 3.5h3l1.5 4-2 1.3a10 10 0 0 0 6.2 6.2l1.3-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 5 5.1 1.5 1.5 0 0 1 6.5 3.5z" />
  </Base>
);
export const MapPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  </Base>
);
export const Card = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="6" width="18" height="12.5" rx="1.8" />
    <path d="M3 10h18M7 15h4" />
  </Base>
);
export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 8h16M4 16h16" />
  </Base>
);
export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);
export const Video = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="6.5" width="12.5" height="11" rx="1.8" />
    <path d="M15.5 10.5l5-3v9l-5-3" />
  </Base>
);
