import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { StatsRow } from "@/components/StatsRow";
import { Icon } from "@/components/Icon";
import type { StatItem } from "@/lib/types";

export function Hero({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  stats,
}: {
  headline: string;
  subtext: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: StatItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src="/backgrounds/hero.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="pointer-events-none select-none object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <Container className="relative pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="max-w-2xl">
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80">
            <Icon name="sparkles" className="h-3.5 w-3.5 text-brand-300" />
            Scale at Speed
          </div>
          <h1 className="animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            style={{ animationDelay: "100ms" }}
          >
            {subtext}
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <Button href={primaryCta.href} size="lg" showArrow>
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="outline-light" size="lg">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-up mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          style={{ animationDelay: "260ms" }}
        >
          <StatsRow stats={stats} light />
        </div>
      </Container>
    </section>
  );
}
