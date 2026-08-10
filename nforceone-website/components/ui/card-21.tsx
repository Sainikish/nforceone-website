import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt?: string;
  location: string;
  flag?: string;
  stats: string;
  href: string;
  themeColor: string; // e.g., "150 50% 25%" for a deep green
  ctaLabel?: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt = "",
      location,
      flag,
      stats,
      href,
      themeColor,
      ctaLabel = "Explore Now",
      ...props
    },
    ref
  ) => {
    return (
      // The 'group' class enables hover effects on child elements
      <div
        ref={ref}
        style={
          {
            "--theme-color": themeColor,
          } as React.CSSProperties
        }
        className={cn("group h-full w-full", className)}
        {...props}
      >
        <a
          href={href}
          className="relative block h-full w-full overflow-hidden rounded-2xl shadow-lg
                     transition-all duration-500 ease-in-out
                     group-hover:scale-105 group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
          aria-label={`Explore details for ${location}`}
          style={{
            boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.5)`,
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.9), hsl(var(--theme-color) / 0.6) 30%, transparent 60%)`,
            }}
          />

          {/* Content */}
          <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <h3 className="text-3xl font-bold tracking-tight">
              {location} {flag && <span className="ml-1 text-2xl">{flag}</span>}
            </h3>
            <p className="mt-1 text-sm font-medium text-white/80">{stats}</p>

            {/* Explore Button */}
            <div
              className="mt-8 flex items-center justify-between rounded-lg border
                         border-[hsl(var(--theme-color)/0.3)] bg-[hsl(var(--theme-color)/0.2)] px-4 py-3
                         backdrop-blur-md transition-all duration-300
                         group-hover:border-[hsl(var(--theme-color)/0.5)] group-hover:bg-[hsl(var(--theme-color)/0.4)]"
            >
              <span className="text-sm font-semibold tracking-wide">{ctaLabel}</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
