import { site, reviewMode } from "@/config/site";
import { Check } from "./Icons";
import { BookButton, Eyebrow } from "./ui";

/**
 * Confirmed pricing and inclusions. Renders nothing on the live site until
 * `site.pricing.published` is true. In review mode, a placeholder marks
 * where the section will appear.
 */
export function PricingSection({ id = "pricing" }: { id?: string }) {
  const { pricing } = site;

  if (!pricing.published || pricing.items.length === 0) {
    if (!reviewMode) return null;
    return (
      <section className="section pricing pricing-pending" id={id} aria-labelledby={`${id}-title`}>
        <div className="container">
          <div className="pending-block">
            <Eyebrow>Pricing</Eyebrow>
            <h2 id={`${id}-title`} className="h3">
              Pricing and what is included
            </h2>
            <p>
              This section is unpublished. It appears automatically once the practice supplies confirmed pricing and
              inclusions in <code>src/config/site.ts</code> and sets <code>pricing.published</code> to true.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section pricing" id={id} aria-labelledby={`${id}-title`} data-reveal>
      <div className="container">
        <div className="section-head center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 id={`${id}-title`}>Clear pricing. No guesswork.</h2>
          {pricing.intro && <p className="lead">{pricing.intro}</p>}
        </div>
        <div className="pricing-grid">
          {pricing.items.map((item) => (
            <article className="price-card" key={item.name}>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              {item.note && <p className="price-note">{item.note}</p>}
              <ul className="check-list">
                {item.includes.map((inc) => (
                  <li key={inc}>
                    <Check size={18} />
                    {inc}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        {pricing.footnote && <p className="fine-print center">{pricing.footnote}</p>}
        <div className="center">
          <BookButton />
        </div>
      </div>
    </section>
  );
}
