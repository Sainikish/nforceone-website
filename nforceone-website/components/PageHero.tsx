import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/lib/types";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  subtext,
  icon,
  image,
  breadcrumb,
  cta,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  subtext: string;
  icon?: IconName;
  image?: string;
  breadcrumb?: { label: string; href: string }[];
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-50/60 via-white to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <Container className="relative py-16 sm:py-24">
        {breadcrumb && (
          <nav className="mb-8 flex items-center gap-2 text-sm text-ink-muted">
            {breadcrumb.map((item, i) => (
              <span key={item.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-line">/</span>}
                <Link href={item.href} className="hover:text-brand-700">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        <div
          className={
            image
              ? "grid items-center gap-12 lg:grid-cols-2"
              : "max-w-3xl"
          }
        >
          <div className={image ? "" : undefined}>
            <div className="mb-5 flex items-center gap-3">
              {icon && (
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon name={icon} className="h-5 w-5" />
                </span>
              )}
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                {eyebrow}
              </p>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 text-xl font-semibold text-ink-muted">
                {subtitle}
              </p>
            )}
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {subtext}
            </p>
            {cta && (
              <div className="mt-8">
                <Button href={cta.href} size="lg" showArrow>
                  {cta.label}
                </Button>
              </div>
            )}
          </div>

          {image && (
            <div className="relative -mx-4 sm:mx-0">
              <Image
                src={image}
                alt=""
                aria-hidden="true"
                width={880}
                height={680}
                priority
                className="mx-auto w-full max-w-lg"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
