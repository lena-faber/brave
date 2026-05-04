import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { IMG, PRESS, TESTIMONIALS } from "@/lib/images";

export const Route = createFileRoute("/press")({
  head: () => ({
    meta: [
      { title: "Press — Lena Faber" },
      { name: "description", content: "Featured by Fox TV, Kansas TV, Daily Press, Portland Phoenix, Ski Magazine, and more." },
      { property: "og:title", content: "Press — Lena Faber" },
      { property: "og:description", content: "Selected press, features and conversations." },
      { property: "og:image", content: IMG.aircroft },
    ],
  }),
  component: Press,
});

function Press() {
  return (
    <PageShell>
      <PageHero
        kicker="06 — In The News"
        title="Selected press"
        intro="Conversations and features about the road, the books, and what brave actually means."
        image={IMG.aircroft}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <p className="kicker text-crimson">Outlets</p>
        <div className="reveal mt-8 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {PRESS.map((p) => (
            <div key={p.name} className="flex h-32 items-center justify-center bg-background p-6">
              <img src={p.url} alt={p.name} className="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <p className="kicker text-crimson">Voices</p>
        <h2 className="display-lg mt-2 text-bone">What people say.</h2>
        <div className="reveal mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-card p-6">
              <div className="flex items-center gap-4">
                <img src={t.url} alt={t.name} className="h-14 w-14 rounded-full object-cover" loading="lazy" />
                <figcaption>
                  <p className="font-display text-lg text-bone">{t.name}</p>
                  <p className="kicker text-bone/50">Reader</p>
                </figcaption>
              </div>
              <blockquote className="mt-6 text-bone/80">
                “Reading <em>Brave</em> felt like permission. I packed a bag the next weekend.”
              </blockquote>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
