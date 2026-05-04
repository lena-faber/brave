import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { PullQuote } from "@/components/site/PullQuote";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/racing")({
  head: () => ({
    meta: [
      { title: "Racing — Lena Faber" },
      { name: "description", content: "From dirt to asphalt — Lena Faber behind the wheel." },
      { property: "og:title", content: "Racing — Lena Faber" },
      { property: "og:description", content: "Speed, focus, and the line you don’t cross." },
      { property: "og:image", content: IMG.carRace },
    ],
  }),
  component: Racing,
});

function Racing() {
  return (
    <PageShell>
      <PageHero
        kicker="04 — Speed"
        title="The line you don’t cross."
        intro="Behind the wheel, the world narrows to a single corner. Then the next. Racing taught her how to be fully present — or fully out."
        image={IMG.carRace}
      />

      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="reveal space-y-6 text-lg leading-relaxed text-bone/85">
          <p>
            Racing is the strangest kind of meditation. There is no tomorrow.
            There is only this corner, this brake point, this line. Get it
            right and the car rewards you. Get it wrong and physics doesn’t
            negotiate.
          </p>
          <p>
            What the trail teaches over a thousand miles, the track teaches
            in a thousand metres: trust your inputs, breathe, look where you
            want to go.
          </p>
        </div>
      </section>

      <PullQuote>You drive where you look. Always look at the exit.</PullQuote>
    </PageShell>
  );
}
