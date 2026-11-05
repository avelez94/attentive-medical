import { site, portalBlurb, bookingInstructions } from "@/config/site";

/**
 * FAQ content.
 *
 * Answers use confirmed information only. An FAQ whose answer depends on
 * a detail that is still pending lists that detail in `pendingNote`; it is
 * hidden from the live site and shown with a review note in review mode.
 * Paragraph strings may include links written as [label](/path).
 */

export type Faq = {
  id: string;
  question: string;
  answer: string[];
  category: "visits" | "care" | "booking" | "costs";
  /** Pages that show this question in their shortened FAQ list. */
  featuredOn?: ("home" | "how-it-works" | "weight-management" | "book")[];
  /** When present, the answer is not yet confirmed and stays unpublished. */
  pendingNote?: string;
};

const areas = "Maryland, Virginia and Washington, DC";

export const faqCategories: { id: Faq["category"]; label: string }[] = [
  { id: "visits", label: "Virtual visits" },
  { id: "care", label: "Care and treatment" },
  { id: "booking", label: "Appointments and portal" },
  { id: "costs", label: "Costs and ongoing care" },
];

export const faqs: Faq[] = [
  {
    id: "virtual-visits",
    question: "How do virtual visits work?",
    category: "visits",
    featuredOn: ["home", "how-it-works"],
    answer: [
      "Every visit takes place virtually, so you can meet with your provider from a quiet, private space without traveling to an office.",
      site.operations.visitPlatform
        ? site.operations.visitPlatform
        : "Instructions for joining your visit are shared with your appointment.",
    ],
  },
  {
    id: "service-area",
    question: "Where can I receive care?",
    category: "visits",
    featuredOn: ["home", "weight-management"],
    answer: [
      `Care is currently offered to patients in ${areas}.`,
      "Because visits are virtual, there is no walk in office. If you are unsure whether you are eligible to be seen, please ask when you request your consultation.",
    ],
  },
  {
    id: "primary-care",
    question: "Do you provide primary care?",
    category: "visits",
    featuredOn: ["weight-management"],
    answer: [
      "No. Attentive Medical Care & Wellness focuses on medical weight management. Please continue to see your primary care clinician for general health needs, screenings and other conditions.",
    ],
  },
  {
    id: "consultation",
    question: "What happens during a consultation?",
    category: "care",
    featuredOn: ["home", "how-it-works"],
    answer: [
      "Your consultation is a conversation. You will talk with your provider about your health history, your goals and any questions you bring.",
      "Together you will discuss options that may be appropriate for you, including whether GLP-1 treatment is worth considering.",
    ],
  },
  {
    id: "recommendations",
    question: "How are treatment recommendations made?",
    category: "care",
    featuredOn: ["how-it-works", "weight-management"],
    answer: [
      "Recommendations are based on an individual clinical evaluation of your health history, current health and goals.",
      "Medication is a clinical decision. A consultation does not guarantee a prescription, and GLP-1 treatment is not appropriate for everyone.",
    ],
  },
  {
    id: "glp1-everyone",
    question: "Is GLP-1 treatment right for everyone?",
    category: "care",
    featuredOn: ["home", "weight-management"],
    answer: [
      "No. GLP-1 medications can be helpful for some people and are not a fit for others. Whether treatment may be appropriate for you is discussed during your individual evaluation.",
    ],
  },
  {
    id: "request-appointment",
    question: "How do I request an appointment?",
    category: "booking",
    featuredOn: ["book"],
    answer: [
      "Visit the [Book a Consultation](/book) page and use the scheduler to choose an available time.",
      bookingInstructions,
    ],
  },
  {
    id: "confirmation",
    question: "When is my appointment confirmed?",
    category: "booking",
    featuredOn: ["book", "how-it-works"],
    answer: [
      "Submitting a time through the scheduler sends a request to the practice. Your appointment is confirmed once the practice approves your request.",
    ],
  },
  {
    id: "patient-portal",
    question: "How do I use the patient portal?",
    category: "booking",
    featuredOn: ["book"],
    answer: [
      `${portalBlurb} The portal is the right place for medical questions once you are a patient.`,
      site.operations.portalAccessSteps ?? "",
    ].filter(Boolean),
  },
  {
    id: "forms",
    question: "Do I need to complete forms before my visit?",
    category: "booking",
    featuredOn: ["how-it-works"],
    answer: site.operations.formsBeforeVisit
      ? [site.operations.formsBeforeVisit]
      : ["Please follow any instructions provided with your appointment."],
    pendingNote: site.operations.formsBeforeVisit
      ? undefined
      : "Confirm whether intake forms are required, and how patients receive them.",
  },
  {
    id: "cost",
    question: "How much does care cost?",
    category: "costs",
    featuredOn: ["home", "weight-management"],
    answer: site.pricing.published ? ["See [pricing and what is included](/weight-management#pricing)."] : [],
    pendingNote: site.pricing.published ? undefined : "Practice to supply confirmed pricing and what it includes.",
  },
  {
    id: "insurance",
    question: "Do you accept insurance?",
    category: "costs",
    answer: site.operations.insurance ? [site.operations.insurance] : [],
    pendingNote: site.operations.insurance ? undefined : "Confirm insurance and self pay policy.",
  },
  {
    id: "follow-up",
    question: "How are follow up visits arranged?",
    category: "costs",
    featuredOn: ["how-it-works"],
    answer: site.operations.followUpArrangements
      ? [site.operations.followUpArrangements]
      : ["Follow up timing is discussed with your provider as part of your plan."],
    pendingNote: site.operations.followUpArrangements
      ? undefined
      : "Confirm how follow up visits are scheduled and how often they typically occur.",
  },
  {
    id: "emergency",
    question: "What if I have an urgent medical concern?",
    category: "visits",
    answer: [
      "If you are experiencing a medical emergency, call 911 or go to the nearest emergency room. Please do not use the website, scheduler or patient portal for emergencies.",
    ],
  },
];

export function faqsFor(page: NonNullable<Faq["featuredOn"]>[number]) {
  return faqs.filter((f) => f.featuredOn?.includes(page));
}
