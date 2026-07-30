import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { IndexTileCard } from "@/components/IndexTileCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import {
  industriesIndex,
  industriesIndexIntro,
} from "@/lib/content/industries-index";

export const metadata: Metadata = {
  title: "Industries",
  description: industriesIndexIntro.heroSubtext,
};

export default function IndustriesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow={industriesIndexIntro.heroEyebrow}
        title={industriesIndexIntro.heroHeadline}
        subtitle={industriesIndexIntro.heroSubheadline}
        subtext={industriesIndexIntro.heroSubtext}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industriesIndex.map((industry, i) => (
              <IndexTileCard
                key={industry.slug}
                href={industry.hasPage ? `/industries/${industry.slug}` : "/contact"}
                icon={industry.icon}
                title={industry.title}
                teaser={industry.teaser}
                disabled={!industry.hasPage}
                delay={(i % 4) * 60}
              />
            ))}
          </div>

          <Reveal>
            <div className="mt-14 rounded-2xl border border-dashed border-line bg-surface p-8 text-center">
              <h3 className="text-lg font-semibold text-ink">
                {industriesIndexIntro.notFoundHeading}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                {industriesIndexIntro.notFoundText}
              </p>
              <div className="mt-5 flex justify-center">
                <Button href="/contact" variant="secondary" size="sm">
                  Get in touch
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-ink py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {industriesIndexIntro.whyHeading}
              </h2>
              <div className="mt-8 flex justify-center">
                <Button href="#consultation" size="lg" showArrow>
                  Talk to an expert
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
