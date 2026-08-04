import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Icon } from "@/components/Icon";
import { RollingList } from "@/components/ui/rolling-list";
import { Auralis } from "@/components/ui/auralis";
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

const whatWeDoDetails: Record<
  string,
  { href: string; image: string; imageAlt: string }
> = {
  "Cost-effectiveness": {
    href: "/services/management-services",
    image: "/images/solutions/quality-assurance.webp",
    imageAlt: "Dashboard showing optimal system health and uptime",
  },
  "Innovative Technology": {
    href: "/services/artificial-intelligence",
    image: "/images/solutions/artificial-intelligence.webp",
    imageAlt: "Holographic AI visualization",
  },
  "Industry Expertise": {
    href: "/industries",
    image: "/images/solutions/software-development.webp",
    imageAlt: "Team collaborating on a tailored solution",
  },
  Scalability: {
    href: "/services/performance-testing",
    image: "/images/solutions/database-management.webp",
    imageAlt: "Scalable server infrastructure",
  },
};

export default function Home() {
  const whatWeDoRollingItems = whatWeDo.items.map((item) => ({
    ...item,
    ...whatWeDoDetails[item.title],
  }));

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

      <section className="relative overflow-hidden py-12 sm:py-16">
        <Container className="relative">
          <SectionHeading
            eyebrow={whatWeDo.eyebrow}
            title={whatWeDo.heading}
            align="center"
            className="mx-auto"
          />
          <div className="mt-8">
            <RollingList items={whatWeDoRollingItems} />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0">
          <Auralis height="100%" className="h-full" />
        </div>
        <Container className="relative">
          <SectionHeading
            eyebrow={ourCapabilities.eyebrow}
            title={ourCapabilities.heading}
            align="center"
            className="mx-auto"
            light
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
                iconImage={`/images/solutions/${s!.slug}.webp`}
                imageFit="cover"
                title={s!.title}
                teaser={s!.teaser}
                delay={(i % 4) * 60}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0">
          <Auralis height="100%" className="h-full" />
        </div>
        <Container className="relative">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Powering Innovation Across Every Industry"
            description="Our IT services empower organizations — startups, enterprises, and government bodies — to modernize infrastructure, enhance digital resilience, and scale innovation with confidence."
            align="center"
            className="mx-auto"
            light
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind, i) => (
              <Reveal key={ind!.slug} delay={(i % 6) * 50}>
                <Link
                  href={`/industries/${ind!.slug}`}
                  className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white p-5 text-center shadow-sm shadow-ink/[0.02] transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={ind!.icon} className="h-7 w-7" />
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
