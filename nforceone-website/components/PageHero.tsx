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
  imageWidth = 880,
  imageHeight = 680,
  imageBleed = false,
  backgroundImage,
  dark = false,
  breadcrumb,
  cta,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  subtext: string;
  icon?: IconName;
  image?: string;
  /** Intrinsic size of `image`, used to preserve its real aspect ratio. Defaults to a 880x680 (~4:3) box. */
  imageWidth?: number;
  imageHeight?: number;
  /** Bleeds `image` to the right edge of the viewport with a soft left fade, instead of a boxed grid column. */
  imageBleed?: boolean;
  /** Full-bleed cinematic background (dark scenes); use with `dark`. */
  backgroundImage?: string;
  /** Switches to light-on-dark text for use with `backgroundImage`. */
  dark?: boolean;
  breadcrumb?: { label: string; href: string }[];
  cta?: { label: string; href: string };
}) {
  return (
    <section
      className={
        dark
          ? "relative overflow-hidden border-b border-white/10 bg-ink"
          : "relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-50/60 via-white to-white"
      }
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            fill
            priority
            className="pointer-events-none select-none object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-ink/10" />
        </>
      )}
      {!dark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
        />
      )}
      {image && imageBleed && (
        <>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
            <Image
              src={image}
              alt=""
              aria-hidden="true"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div
            className={
              dark
                ? "pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] bg-gradient-to-r from-ink via-ink/10 to-transparent lg:block"
                : "pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] bg-gradient-to-r from-white via-white/5 to-transparent lg:block"
            }
          />
        </>
      )}
      <Container className="relative py-16 sm:py-24">
        {breadcrumb && (
          <nav
            className={
              dark
                ? "mb-8 flex items-center gap-2 text-sm text-white/50"
                : "mb-8 flex items-center gap-2 text-sm text-ink-muted"
            }
          >
            {breadcrumb.map((item, i) => (
              <span key={item.href} className="flex items-center gap-2">
                {i > 0 && (
                  <span className={dark ? "text-white/20" : "text-line"}>
                    /
                  </span>
                )}
                <Link
                  href={item.href}
                  className={dark ? "hover:text-white" : "hover:text-brand-700"}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        <div
          className={
            image && !imageBleed
              ? "grid items-center gap-12 lg:grid-cols-2"
              : "max-w-3xl"
          }
        >
          <div className={image && !imageBleed ? "" : undefined}>
            <div className="mb-5 flex items-center gap-3">
              {icon && (
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon name={icon} className="h-5 w-5" />
                </span>
              )}
              <p
                className={
                  dark
                    ? "text-sm font-semibold uppercase tracking-wider text-brand-300"
                    : "text-sm font-semibold uppercase tracking-wider text-brand-600"
                }
              >
                {eyebrow}
              </p>
            </div>
            <h1
              className={
                dark
                  ? "text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
                  : "text-4xl font-extrabold tracking-tight text-ink sm:text-5xl"
              }
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={
                  dark
                    ? "mt-3 text-xl font-semibold text-white/80"
                    : "mt-3 text-xl font-semibold text-ink-muted"
                }
              >
                {subtitle}
              </p>
            )}
            <p
              className={
                dark
                  ? "mt-5 max-w-2xl text-lg leading-relaxed text-white/70"
                  : "mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted"
              }
            >
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

          {image && !imageBleed && (
            <div className="relative -mx-4 sm:mx-0">
              <Image
                src={image}
                alt=""
                aria-hidden="true"
                width={imageWidth}
                height={imageHeight}
                priority
                className="mx-auto h-auto w-full max-w-lg object-contain"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
