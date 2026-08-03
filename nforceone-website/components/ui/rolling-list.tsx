import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import type { FeatureItem } from "@/lib/types";

export interface RollingListItem extends FeatureItem {
  href: string;
  image: string;
  imageAlt: string;
}

function RollingListRow({ item }: { item: RollingListItem }) {
  return (
    <Link
      href={item.href}
      className="group relative block w-full border-b border-line py-3 focus-visible:outline-none"
    >
      {/* Rolling title */}
      <div className="relative h-9 overflow-hidden sm:h-11 md:h-14">
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
          {/* State 1: normal */}
          <div className="flex h-9 items-center gap-3 sm:h-11 md:h-14">
            {item.icon && (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 sm:h-9 sm:w-9">
                <Icon name={item.icon} className="h-4 w-4" />
              </span>
            )}
            <h3 className="text-lg font-black uppercase tracking-tight text-ink sm:text-2xl md:text-3xl">
              {item.title}
            </h3>
          </div>

          {/* State 2: hover/focus (italic + brand color) */}
          <div className="flex h-9 items-center gap-3 sm:h-11 md:h-14">
            {item.icon && (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white sm:h-9 sm:w-9">
                <Icon name={item.icon} className="h-4 w-4" />
              </span>
            )}
            <h3 className="text-lg font-black italic uppercase tracking-tight text-brand-500 sm:text-2xl md:text-3xl">
              {item.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Description */}
      {item.description && (
        <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-muted">
          {item.description}
        </p>
      )}

      {/* Learn more, shown on hover/focus */}
      <span className="mt-1 hidden items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex">
        Learn more
        <Icon name="arrow-right" className="h-4 w-4" />
      </span>

      {/* Image reveal */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-20 hidden h-28 w-44 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl md:block",
          "transition-all duration-500 ease-out",
          "translate-x-4 rotate-3 scale-95 opacity-0",
          "group-hover:translate-x-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100",
          "group-focus-visible:translate-x-0 group-focus-visible:rotate-0 group-focus-visible:scale-100 group-focus-visible:opacity-100"
        )}
      >
        <div className="relative h-full w-full">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-focus-visible:grayscale-0"
          />
          <div className="absolute inset-0 bg-brand-600/15 mix-blend-overlay" />
        </div>
      </div>

      {/* Focus ring, since the row itself is the interactive element */}
      <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 outline outline-2 outline-offset-4 outline-brand-500 group-focus-visible:opacity-100" />
    </Link>
  );
}

export function RollingList({ items }: { items: RollingListItem[] }) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 80}>
          <RollingListRow item={item} />
        </Reveal>
      ))}
    </div>
  );
}
