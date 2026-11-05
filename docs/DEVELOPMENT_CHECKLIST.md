# Development checklist

Status of content, integrations, verification and launch readiness. Items marked **Pending** need information or confirmation from the practice. Nothing below has been assumed on the website: each missing item is either hidden on the live site or shown only as a review note.

Last updated: November 5, 2026

## 1. Practice facts to confirm

These appear on the site today. Please confirm each one.

* [ ] Practice name exactly as it should appear: "Attentive Medical Care & Wellness"
* [ ] Provider name and credentials: "Ladawana Crawford, DNP, FNP-BC"
* [ ] Role: "Family Nurse Practitioner", described as a Doctor of Nursing Practice and board certified
* [ ] Service areas: Maryland, Virginia and Washington, DC
* [ ] Whether patients must be physically located in a service area at the time of each visit (the site currently says only that care is offered to patients in those areas)
* [ ] All care is virtual and there is no walk in office
* [ ] The practice does not provide primary care (stated on Weight Management and in the FAQs)
* [ ] Emergency wording: "In an emergency, call 911" and "Please do not use the website, scheduler or patient portal for emergencies"
* [ ] Provider page biography wording, which is limited to her credentials and approach

## 2. Missing content

* [ ] **Pending:** Verified phone number, email address and hours (`site.contact`). The Contact page and footer show none until supplied.
* [ ] **Pending:** Whether a mailing or administrative address should be listed. If so, it will be labeled as administrative only, not a clinic location.
* [ ] **Pending:** Dr. Crawford's actual portrait (`provider.portrait`). A marked placeholder is shown on the homepage and once on the provider page. No stock or generated person is substituted.
* [ ] **Pending:** Education details: schools, years, certifying body and state licensure, if she would like them listed (`provider.education`).
* [ ] **Pending:** Any additional biography details she would like to share.
* [ ] **Pending:** Pricing and what each price includes (`site.pricing`). The pricing section on Home and Weight Management stays unpublished until `pricing.published` is true.
* [ ] **Pending:** Treatment options offered (`program.treatmentOptions`). No specific medications are named.
* [ ] **Pending:** Program inclusions (`program.inclusions`).
* [ ] **Pending:** Follow up arrangements and typical timing (`operations.followUpArrangements`).
* [ ] **Pending:** Whether messaging between visits is included.
* [ ] **Pending:** Insurance or self pay policy (`operations.insurance`). The insurance FAQ is hidden until supplied.
* [ ] **Pending:** Whether intake forms are required, and how patients receive them (`operations.formsBeforeVisit`).
* [ ] **Pending:** Video visit platform and joining instructions (`operations.visitPlatform`).
* [ ] **Pending:** Payment timing (`operations.paymentTiming`).
* [ ] **Pending:** How new patients get portal access (`operations.portalAccessSteps`).
* [ ] **Pending:** Privacy policy and any other legal pages the practice requires (for example a notice of privacy practices). None have been written, because legal text must come from the practice.
* [ ] **Pending:** Social media links, if any.
* [ ] **Pending:** Logo files, if the practice has an existing logo. The current mark is a simple botanical line drawing created for this redesign.
* [ ] Not assumed anywhere on the site: medication shipping, pharmacy relationships, required labs, visit frequency, eligibility criteria, outcomes, testimonials or a guaranteed prescription.

## 3. Photography

All 15 photo slots are listed in `src/content/images.ts` with alt text and art direction. They currently show soft placeholders.

* [ ] **Pending:** Source appropriately licensed photos for each slot (for example from Unsplash or a paid stock library), or use the practice's own.
* [ ] Record the credit, license and source URL for each photo in the manifest.
* [ ] Confirm diverse adult representation across the site: men and women, different skin tones, ages and natural body types.
* [ ] Confirm no photo is reused and no illustrative person could be mistaken for a patient, staff member or Dr. Crawford.
* [ ] Optimize each image (about 1600px on the long edge, under 400 KB).

Note: the development environment used to build this site could not reach stock photo sites, so no photos have been downloaded yet.

## 4. Integrations

### Tebra scheduler

* [ ] **Pending:** Official Tebra scheduling URL or embed code from the practice (`NEXT_PUBLIC_TEBRA_SCHEDULER_URL`).
* [ ] **Practice review in Tebra:** the current scheduler has shown "In person" and "Counseling". Update visit reasons so they match virtual weight management. Website styling cannot change settings inside Tebra.
* [ ] Verify visit reasons, provider availability, appointment durations and time zone inside Tebra.
* [ ] Confirm that Tebra treats submissions as requests that the practice approves, matching the site wording: "Choose an available time to request your consultation. Your appointment is confirmed once the practice approves your request."
* [ ] Test the embedded scheduler on desktop, tablet and mobile (iOS Safari and Android Chrome). Adjust the iframe height in `globals.css` (`.scheduler-frame iframe`) if Tebra's content is cut off or leaves large gaps.
* [ ] Confirm the **Open Tebra Scheduler** fallback link opens the correct page.
* [ ] Confirm Tebra allows its scheduler to be framed on the practice domain.

### Tebra patient portal

* [ ] **Pending:** Tebra patient portal URL (`NEXT_PUBLIC_TEBRA_PORTAL_URL`). It may differ from the scheduling URL.
* [ ] Confirm every Patient Portal link (header, mobile menu, footer, Contact, Book, FAQ) opens the correct portal in a new tab.

### Payments

* [ ] **Pending:** Confirm whether the practice will use Tebra for payments.
* [ ] **Pending:** If so, the confirmed payment URL (`NEXT_PUBLIC_PAYMENT_URL`). A footer link appears automatically once set.
* [ ] Confirm the payment link opens the correct destination.

## 5. Verification before approval

Completed during development (with placeholder photos and review mode):

* [x] Desktop (1440px) and mobile (390px) layouts for all seven pages, with no horizontal overflow
* [x] Header, footer and mobile menu behavior (opens below header, focus moves into the menu, Escape closes it and returns focus, page scroll locks, menu closes on navigation)
* [x] Active navigation item highlighted in header and mobile menu
* [x] Keyboard navigation with visible focus states, skip link
* [x] FAQ accordions with Enter and Space, `aria-expanded`, and links such as `/faqs#cost` opening the matching question
* [x] Reduced motion: no reveal animation, all content visible immediately
* [x] Content visible without JavaScript
* [x] Mobile booking button appears after the opening section, hides near the footer and on the booking page, and the footer reserves space for it
* [x] Production build with review mode off: no review notes, unconfirmed FAQs hidden, pricing unpublished
* [x] All internal links resolve; portal links use `target="_blank"` and `rel="noopener noreferrer"`

Still to do once content and photos arrive:

* [ ] Repeat the desktop, tablet and mobile review with real photos (check cropping and layered image overlaps)
* [ ] Check repeated content and spacing across pages with final copy
* [ ] Automated accessibility scan (for example axe or Lighthouse) and a screen reader pass
* [ ] Scheduler sizing and fallback access once connected
* [ ] Final read through for wording, including the no dash style preference

## 6. Launch sequence

* [x] Review link approved by the owner: Vercel project `attentive-medical` connected to this repository. Every push to `main` updates https://attentive-medical.vercel.app
* [x] Vercel environment variables set: `NEXT_PUBLIC_REVIEW_MODE=true` (review notes shown, search engines told not to index) and `NEXT_PUBLIC_SITE_URL=https://attentive-medical.vercel.app`
* [ ] Practice reviews and approves the finished website
* [ ] Add the scheduler, portal and payment URLs in Vercel once supplied
* [ ] Final checks on a Vercel preview deployment, including the booking, portal and payment flows
* [ ] Only after the live launch is explicitly authorized: set `NEXT_PUBLIC_REVIEW_MODE=false`, set `NEXT_PUBLIC_SITE_URL=https://attentivemedcare.com`, then connect the domain and update DNS. Do not change the existing website, domain or DNS before then.
* [ ] After launch: confirm the live domain, metadata and search indexing
