import Image from "next/image";
import { cn } from "@/lib/cn";

/** Decorative corner-anchored tech mesh, meant to sit behind section content at reduced opacity. */
export function TechBackground({ className }: { className?: string }) {
  return (
    <Image
      src="/bg-tech-mesh.svg"
      alt=""
      aria-hidden="true"
      fill
      className={cn(
        "pointer-events-none select-none object-cover",
        className
      )}
    />
  );
}
