import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Figtree } from "next/font/google";
import { site, reviewMode } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBookBar, RevealObserver } from "@/components/Enhancements";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Virtual Medical Weight Management`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  // Keep preview and review builds out of search results.
  robots: reviewMode ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  colorScheme: "light",
};

// Adds a class before first paint so scroll reveals never flash. A timer
// guarantees content becomes visible even if scripts fail to load.
const revealBootstrap = `(function(){var d=document.documentElement;if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('js-reveal');setTimeout(function(){d.classList.add('reveal-done')},4500);})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {reviewMode && (
          <div className="review-banner" role="note">
            Review build. Notes marked <strong>Pending</strong> show content awaiting practice confirmation and are hidden on the live site.
          </div>
        )}
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileBookBar />
        <RevealObserver />
      </body>
    </html>
  );
}
