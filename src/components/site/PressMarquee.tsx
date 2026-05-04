import { PRESS } from "@/lib/images";

export function PressMarquee() {
  const items = [...PRESS, ...PRESS];
  return (
    <section className="overflow-hidden border-y-2 border-foreground bg-background py-10">
      <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-foreground/60">As Featured In</p>
      <div className="relative flex">
        <div className="marquee-track flex shrink-0 items-center gap-16 pr-16">
          {items.map((p, i) => (
            <img
              key={i}
              src={p.url}
              alt={p.name}
              className="h-12 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-16"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
