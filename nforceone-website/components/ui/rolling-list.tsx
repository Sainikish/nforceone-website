import Image from "next/image";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/Icon";
import type { FeatureItem } from "@/lib/types";

export interface RollingListItem extends FeatureItem {
  image: string;
  imageAlt: string;
}

function RollingListRow({ item }: { item: RollingListItem }) {
  return (
    <div className="group relative w-full cursor-pointer border-b border-line py-6">
      {/* Rolling title */}
      <div className="relative h-[52px] overflow-hidden sm:h-16 md:h-20">
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          {/* State 1: normal */}
          <div className="flex h-[52px] items-center gap-4 sm:h-16 md:h-20">
            {item.icon && (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:h-11 sm:w-11">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
            )}
            <h3 className="text-2xl font-black uppercase tracking-tight text-ink sm:text-4xl md:text-5xl">
              {item.title}
            </h3>
          </div>

          {/* State 2: hover (italic + brand color) */}
          <div className="flex h-[52px] items-center gap-4 sm:h-16 md:h-20">
            {item.icon && (
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white sm:h-11 sm:w-11">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
            )}
            <h3 className="text-2xl font-black italic uppercase tracking-tight text-brand-500 sm:text-4xl md:text-5xl">
              {item.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Description */}
      {item.description && (
        <p className="mt-2 text-sm leading-relaxed text-ink-muted transition-opacity duration-300 md:absolute md:right-0 md:top-8 md:mt-0 md:max-w-xs md:text-right md:group-hover:opacity-0">
          {item.description}
        </p>
      )}

      {/* Image reveal */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 top-1/2 z-20 hidden h-32 w-48 -translate-y-1/2 overflow-hidden rounded-lg shadow-2xl md:block",
          "transition-all duration-500 ease-out",
          "translate-x-4 rotate-3 scale-95 opacity-0",
          "group-hover:translate-x-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100"
        )}
      >
        <div className="relative h-full w-full">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-brand-600/15 mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
}

export function RollingList({ items }: { items: RollingListItem[] }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col">
      {items.map((item) => (
        <RollingListRow key={item.title} item={item} />
      ))}
    </div>
  );
}
