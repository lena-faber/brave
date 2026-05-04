import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books — Lena Faber" },
      { name: "description", content: "Brave · Wild · Curious — the trilogy by Lena Faber." },
      { property: "og:title", content: "Books — Lena Faber" },
      { property: "og:description", content: "Brave · Wild · Curious. The trilogy from the road." },
      { property: "og:image", content: IMG.books },
    ],
  }),
  component: Books,
});

function Books() {
  return (
    <PageShell>
      <PageHero
        kicker="05 — Words"
        title="Brave · Wild · Curious"
        intro="A trilogy written by headlamp, in tents, on trains, on ferries. About the courage to leave, the wildness of staying out, and the curiosity that keeps her going."
        image={IMG.books}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="reveal grid gap-12 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/3] overflow-hidden bg-card">
            <img src={IMG.braveBook} alt="Brave Wild Curious — book" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="kicker text-crimson">Now Available</p>
            <h2 className="display-lg mt-4 text-bone">The book the road wrote.</h2>
            <p className="mt-6 text-lg leading-relaxed text-bone/80">
              Part memoir, part manifesto, part field guide. <em>Brave</em> is
              for anyone who has stood at the edge of their old life and
              wondered what was on the other side. Spoiler: a bigger one.
            </p>
            <a
              href="mailto:hello@lenafaber.com?subject=Brave book"
              className="mt-10 inline-flex items-center gap-3 border border-crimson bg-crimson px-6 py-4 kicker text-bone transition hover:bg-transparent"
            >
              Order a Signed Copy
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
