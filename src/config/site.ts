/**
 * Central practice configuration.
 *
 * Every editable practice fact and integration link lives here so the
 * practice can review it in one place. Values set to `null` are pending
 * confirmation: the site hides them in production and shows a clearly
 * marked note in review mode (NEXT_PUBLIC_REVIEW_MODE=true).
 *
 * Integration URLs come from environment variables (see .env.example) so
 * they can differ between preview and production without code changes.
 */

function httpsUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export const reviewMode = process.env.NEXT_PUBLIC_REVIEW_MODE === "true";

export const site = {
  name: "Attentive Medical Care & Wellness",
  shortName: "Attentive",
  descriptor: "Medical Care & Wellness",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Personalized virtual medical weight management, including GLP-1 treatment options when clinically appropriate. Virtual care in Maryland, Virginia and Washington, DC.",

  /** States and districts where care is currently offered. Confirm before launch. */
  serviceAreas: ["Maryland", "Virginia", "Washington, DC"],
  serviceAreaLine: "Virtual care in Maryland, Virginia & DC",

  provider: {
    name: "Ladawana Crawford",
    credentials: "DNP, FNP-BC",
    role: "Family Nurse Practitioner",
    shortTitle: "Dr. Crawford",
    /** Path inside /public once the practice supplies her photograph. */
    portrait: null as string | null,
    /**
     * Confirmed education and credentials only. Add schools, years and
     * certifying bodies here once the practice supplies them.
     */
    credentialsList: [
      { label: "Doctor of Nursing Practice", detail: "DNP" },
      { label: "Board certified Family Nurse Practitioner", detail: "FNP-BC" },
    ],
    education: [] as { degree: string; school: string; year?: string }[],
  },

  /**
   * Verified contact details. Leave null until confirmed by the practice.
   * The mailing address is administrative only; it is never presented as
   * a walk in clinic.
   */
  contact: {
    phone: null as string | null,
    fax: null as string | null,
    email: null as string | null,
    mailingAddress: null as null | { line1: string; line2?: string; city: string; state: string; zip: string },
    hours: null as string | null,
  },

  integrations: {
    schedulerUrl: httpsUrl(process.env.NEXT_PUBLIC_TEBRA_SCHEDULER_URL),
    portalUrl: httpsUrl(process.env.NEXT_PUBLIC_TEBRA_PORTAL_URL),
    /** Only set once the practice confirms Tebra (or another provider) for payments. */
    paymentUrl: httpsUrl(process.env.NEXT_PUBLIC_PAYMENT_URL),
  },

  /**
   * Confirmed pricing and inclusions. While `published` is false the
   * pricing section stays unpublished. Never add figures that the practice
   * has not supplied in writing.
   */
  pricing: {
    published: false,
    intro: "",
    items: [] as { name: string; price: string; note?: string; includes: string[] }[],
    footnote: "",
  },

  /** Confirmed operational details. Each null value stays off the live site. */
  operations: {
    visitPlatform: null as string | null,
    followUpArrangements: null as string | null,
    formsBeforeVisit: null as string | null,
    insurance: null as string | null,
    paymentTiming: null as string | null,
    portalAccessSteps: null as string | null,
  },

  /** Confirmed treatment options and program inclusions for the Weight Management page. */
  program: {
    treatmentOptions: [] as string[],
    inclusions: [] as string[],
  },

  social: [] as { label: string; href: string }[],
};

export const portalBlurb =
  "Access your shared visit information and securely message your provider through Tebra.";

export const bookingInstructions =
  "Choose an available time to request your consultation. Your appointment is confirmed once the practice approves your request.";

export type Site = typeof site;
