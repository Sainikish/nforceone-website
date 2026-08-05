"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";
import type { IconName } from "@/lib/types";

export interface FeaturedCarouselItem {
  title: string;
  description?: string;
  icon?: IconName;
}

export function FeaturedCarousel({ items }: { items: FeaturedCarouselItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-1.5">
        {items.map((item, i) => (
          <span
            key={item.title}
            aria-hidden="true"
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === active ? "w-8 bg-brand-600" : "w-4 bg-ink/15"
            )}
          />
        ))}
      </div>

      <div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        onMouseLeave={() => setActive(0)}
      >
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <div
              key={item.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              className={cn(
                "flex cursor-default flex-col items-center gap-4 rounded-2xl p-6 text-center transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                isActive
                  ? "z-10 -translate-y-2 scale-105 bg-white shadow-2xl shadow-ink/10"
                  : "translate-y-0 scale-100 bg-transparent shadow-none"
              )}
            >
              {item.icon && (
                <Icon name={item.icon} className="h-12 w-12 text-ink" />
              )}
              <h3 className="text-lg font-bold text-brand-600">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
