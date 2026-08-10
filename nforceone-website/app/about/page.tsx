import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Reveal } from "@/components/Reveal";
import { Auralis } from "@/components/ui/auralis";
import { DestinationCard } from "@/components/ui/card-21";
import {
  aboutHero,
  caseStudies,
  whyUs,
  coreValues,
  whyChooseUs,
} from "@/lib/content/about";

const whyChooseUsMedia = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Engineers reviewing code together on a laptop",
    stats: "100+ professionals across India & the US",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Team members laughing together while working",
    stats: "Real partnerships, real fun",
  },
];

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
                <div className="h-full bg-stone-200 p-6">
                  <h3 className="text-xl font-bold text-ink">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
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
            eyebrow="Our team"
            title={whyChooseUs.heading}
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:h-[450px] lg:grid-cols-2">
            {whyChooseUs.blocks.map((block, i) => (
              <Reveal key={block.heading} delay={i * 100}>
                <div className="h-[450px] sm:h-full">
                  <DestinationCard
                    imageUrl={whyChooseUsMedia[i].imageUrl}
                    imageAlt={whyChooseUsMedia[i].imageAlt}
                    location={block.heading}
                    stats={whyChooseUsMedia[i].stats}
                    href={block.cta.href}
                    themeColor="0 72% 45%"
                    ctaLabel={block.cta.label}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
