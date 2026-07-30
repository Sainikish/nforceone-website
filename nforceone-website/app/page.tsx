import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { IndexTileCard } from "@/components/IndexTileCard";
import { Testimonials } from "@/components/Testimonials";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import {
  homeHero,
  homeStats,
  whatWeDo,
  ourCapabilities,
  homeSolutionsSlugs,
  industriesWeServeSlugs,
} from "@/lib/content/home";
import { servicesIndex } from "@/lib/content/services-index";
import { industriesIndex } from "@/lib/content/industries-index";
import { trustBand } from "@/lib/content/site";

export default function Home() {
  const solutions = homeSolutionsSlugs
    .map((slug) => servicesIndex.find((s) => s.slug === slug))
    .filter(Boolean);
  const industries = industriesWeServeSlugs
    .map((slug) => industriesIndex.find((i) => i.slug === slug))
    .filter(Boolean);

  return (
    <>
      <Hero
        headline={homeHero.headline}
        subtext={homeHero.subtext}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
        stats={homeStats}
      />

      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image
          src="/backgrounds/what-we-do.webp"
          alt=""
          aria-hidden="true"
          fill
          className="pointer-events-none select-none object-cover opacity-[0.08]"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow={whatWeDo.eyebrow}
            title={whatWeDo.heading}
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <FeatureGrid items={whatWeDo.items} columns={4} />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-surface py-20 sm:py-28">
        <Image
          src="/backgrounds/capabilities-devops.webp"
          alt=""
          aria-hidden="true"
          fill
          className="pointer-events-none select-none object-cover opacity-[0.10]"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow={ourCapabilities.eyebrow}
            title={ourCapabilities.heading}
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <FeatureGrid items={ourCapabilities.items} columns={4} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="Solutions built to move fast"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <IndexTileCard
                key={s!.slug}
                href={`/services/${s!.slug}`}
                icon={s!.icon}
                iconImage={`/icons/solutions/${s!.slug}.webp`}
                title={s!.title}
                teaser={s!.teaser}
                delay={(i % 4) * 60}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Industries we serve"
            title="Powering Innovation Across Every Industry"
            description="Our IT services empower organizations — startups, enterprises, and government bodies — to modernize infrastructure, enhance digital resilience, and scale innovation with confidence."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind, i) => (
              <Reveal key={ind!.slug} delay={(i % 6) * 50}>
                <Link
                  href={`/industries/${ind!.slug}`}
                  className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white p-5 text-center shadow-sm shadow-ink/[0.02] transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
                >
                  <span className="flex h-14 w-14 items-center justify-center">
                    <Image
                      src={`/icons/industries/${ind!.slug}.webp`}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                    />
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {ind!.title}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <Image
          src="/backgrounds/testimonials.webp"
          alt=""
          aria-hidden="true"
          fill
          className="pointer-events-none select-none object-cover"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="Reviews"
            title="What our clients say"
            align="center"
            className="mx-auto"
            light
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <Container>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-muted">
            {trustBand.heading}
          </p>
          <div className="mt-10">
            <PartnerLogos />
          </div>
        </Container>
      </section>
    </>
  );
}
