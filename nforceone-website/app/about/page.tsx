import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Auralis } from "@/components/ui/auralis";
import {
  aboutHero,
  caseStudies,
  whyUs,
  coreValues,
  whyChooseUs,
} from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About",
  description: aboutHero.subtext,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
        subtext={aboutHero.subtext}
        backgroundImage="/backgrounds/about-hero.webp"
        dark
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {caseStudies.map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <div className="rounded-2xl border border-line bg-white p-6 shadow-sm shadow-ink/[0.02]">
                  <p className="text-sm font-semibold text-brand-600">
                    {item.year}
                  </p>
                  <p className="mt-1 text-lg font-bold text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-line py-20 sm:py-28">
        <div className="absolute inset-0">
          <Auralis height="100%" className="h-full" />
        </div>
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                {whyUs.heading}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {whyUs.text}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our core values"
            title={coreValues.heading}
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <FeatureGrid items={coreValues.items} columns={4} />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            title={whyChooseUs.heading}
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {whyChooseUs.blocks.map((block, i) => (
              <Reveal key={block.heading} delay={i * 100}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 shadow-sm shadow-ink/[0.02]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={block.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">
                    {block.heading}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-ink-muted">
                    {block.text}
                  </p>
                  <Button
                    href={block.cta.href}
                    variant="secondary"
                    className="mt-6 self-start"
                    showArrow
                  >
                    {block.cta.label}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
