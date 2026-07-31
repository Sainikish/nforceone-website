import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import type { IconName } from "@/lib/types";

export function IndexTileCard({
  href,
  icon,
  iconImage,
  imageFit = "contain",
  title,
  teaser,
  disabled = false,
  delay = 0,
}: {
  href: string;
  icon: IconName;
  /** Optional premium icon-badge artwork; replaces the lucide icon badge when set. */
  iconImage?: string;
  /** "contain" (default) for transparent icon badges; "cover" for full-bleed photos. */
  imageFit?: "contain" | "cover";
  title: string;
  teaser: string;
  disabled?: boolean;
  delay?: number;
}) {
  if (iconImage) {
    const cover = imageFit === "cover";
    return (
      <Reveal delay={delay}>
        <Link
          href={href}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm shadow-ink/[0.02] transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={iconImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className={
                cover
                  ? "object-cover transition-transform duration-300 group-hover:scale-105"
                  : "object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              }
            />
            {cover && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-ink/0 to-transparent" />
            )}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-base font-semibold text-ink">{title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
              {teaser}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
              {disabled ? "Get in touch" : "Learn more"}
              <Icon
                name="arrow-right"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm shadow-ink/[0.02] transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {teaser}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
          {disabled ? "Get in touch" : "Learn more"}
          <Icon
            name="arrow-right"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </Reveal>
  );
}
