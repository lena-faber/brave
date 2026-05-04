import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { PullQuote } from "@/components/site/PullQuote";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "The Story — Lena Faber" },
      { name: "description", content: "How a city girl from Moscow became one of the most relentless solo adventurers of her generation." },
      { property: "og:title", content: "The Story — Lena Faber" },
      { property: "og:description", content: "The spark, the doubt, the road. The story behind Brave." },
      { property: "og:image", content: IMG.moscow },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <PageShell>
      <PageHero
        kicker="01 — Origin"
        title="The Spark"
        intro="Born in Moscow. Lived in eleven countries. Walked out of a comfortable life and into the weather. This is how Brave began."
        image={IMG.moscow}
      />

      <article className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="reveal space-y-6 text-lg leading-relaxed text-bone/85">
          <p>
            Lena Faber grew up in Moscow, a city of long winters and longer
            silences. As a girl she filled notebooks with maps of places she
            had never been. She studied, she modelled, she built a career, and
            she did everything you are supposed to do — until one ordinary
            morning when she realised she could not breathe inside her own life.
          </p>
          <p>
            She gave away most of what she owned. She bought a small backpack
            and a pair of trail shoes. She told no one her plan, because she
            did not have one.
          </p>
        </div>

        <div className="reveal my-16 grid grid-cols-2 gap-4">
          <img src={IMG.model} alt="Before the road" className="aspect-[3/4] w-full object-cover" loading="lazy" />
          <img src={IMG.portrait11} alt="On the road" className="aspect-[3/4] w-full object-cover" loading="lazy" />
        </div>

        <div className="reveal space-y-6 text-lg leading-relaxed text-bone/85">
          <p>
            Four years later she had crossed the Appalachian Trail on foot,
            run across Africa, climbed in Scotland, paddled to Islesboro,
            stood on Machu Picchu, and started to write the book that would
            become <em>Brave · Wild · Curious</em>.
          </p>
          <p>
            She still travels with thirteen pounds on her back. She still
            sleeps under the sky more often than under a roof. And when people
            ask her where the courage came from, she shrugs and says the same
            thing every time.
          </p>
        </div>
      </article>

      <PullQuote attribution="— Lena Faber">
        Just go. Just now. Just by yourself.
      </PullQuote>
    </PageShell>
  );
}
