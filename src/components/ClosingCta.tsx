import { site } from "@/config/site";
import type { ImageKey } from "@/content/images";
import { Botanical } from "./Botanical";
import { BookButton, Eyebrow, Photo } from "./ui";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  photo?: ImageKey;
  layout?: "band" | "card";
};

export function ClosingCta({ eyebrow, title, text, photo, layout = "band" }: Props) {
  return (
    <section className={`cta cta-${layout} ${photo ? "cta-has-photo" : ""}`} aria-labelledby="cta-title" data-reveal>
      <div className={layout === "card" ? "container" : undefined}>
        <div className="cta-inner">
          <Botanical variant="branch" className="cta-botanical" />
          <div className="cta-copy">
            {eyebrow && <Eyebrow className="eyebrow-light">{eyebrow}</Eyebrow>}
            <h2 id="cta-title" className="cta-title">
              {title}
            </h2>
            {text && <p className="cta-text">{text}</p>}
            <div className="cta-actions">
              <BookButton variant="light" />
              <p className="cta-area">{site.serviceAreaLine}</p>
            </div>
          </div>
          {photo && <Photo slot={photo} className="cta-photo" sizes="(max-width: 900px) 100vw, 40vw" />}
        </div>
      </div>
    </section>
  );
}
