import type { StatItem } from "@/lib/types";
import { Reveal } from "@/components/Reveal";

export function StatsRow({
  stats,
  light = false,
}: {
  stats: StatItem[];
  light?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 80}>
          <div>
            <p
              className={
                light
                  ? "text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                  : "text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
              }
            >
              {stat.value}
            </p>
            <p
              className={
                light
                  ? "mt-1.5 text-sm font-medium text-white/70"
                  : "mt-1.5 text-sm font-medium text-ink-muted"
              }
            >
              {stat.label}
            </p>
            {stat.description && (
              <p
                className={
                  light
                    ? "mt-0.5 text-xs text-white/50"
                    : "mt-0.5 text-xs text-ink-muted/70"
                }
              >
                {stat.description}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
