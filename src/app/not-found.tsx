import { Botanical } from "@/components/Botanical";
import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container narrow center">
        <Botanical variant="sprig" className="not-found-botanical" />
        <Eyebrow>Page not found</Eyebrow>
        <h1>This page has wandered off.</h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <div className="not-found-actions">
          <ButtonLink href="/">Return home</ButtonLink>
          <ButtonLink href="/faqs" variant="outline">
            Browse FAQs
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
