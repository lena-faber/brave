import { TESTIMONIALS } from "@/lib/images";

const QUOTES = [
  "Reading Brave felt like permission. I packed a bag the next weekend.",
  "Lena moves through the world like nothing can stop her. It’s contagious.",
  "She doesn’t talk about courage. She just does the next hard thing, on camera, in real time.",
  "I trained with her for three months. I came back a different athlete.",
  "The most honest voice in adventure writing right now.",
  "She crossed our country with thirteen pounds and a smile. Unreal.",
  "Watching her race is like watching someone breathe — total focus, zero noise.",
  "If you’ve been waiting for a sign, this is it. Go.",
  "Brave. Wild. Curious. And the realest person I’ve filmed.",
];

export function Testimonials() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker text-primary">Voices · Testimonials</p>
            <h2 className="display-lg mt-3">What they say.</h2>
          </div>
          <p className="max-w-md text-sm uppercase tracking-widest text-background/60">
            Athletes, readers, editors, fellow racers — everyone she’s crossed
            paths with on the road.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-background/10 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className="reveal flex flex-col bg-foreground p-8 md:p-10">
              <svg width="32" height="24" viewBox="0 0 32 24" className="text-primary" fill="currentColor">
                <path d="M0 24V14C0 6.268 6.268 0 14 0v6c-4.418 0-8 3.582-8 8h8v10H0zm18 0V14c0-7.732 6.268-14 14-14v6c-4.418 0-8 3.582-8 8h8v10H18z" />
              </svg>
              <blockquote className="mt-6 text-xl leading-snug text-background md:text-2xl">
                {QUOTES[i]}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-background/10 pt-6">
                <img
                  src={t.url}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover grayscale"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-lg uppercase tracking-wider">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-background/50">Reader · Athlete</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
