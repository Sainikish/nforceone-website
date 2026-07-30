import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Accordion } from "@/components/Accordion";
import { sharedFaq } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about working with NForceOne.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtext="Answers to what prospective clients ask us most before starting an engagement."
        icon="sparkles"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Accordion items={sharedFaq} />
          </div>
        </Container>
      </section>
    </>
  );
}
