import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/athlete")({
  head: () => ({
    meta: [
      { title: "Athlete — Lena Faber" },
      { name: "description", content: "Trail runner, cyclist, certified instructor. The body she built to carry her further." },
      { property: "og:title", content: "Athlete — Lena Faber" },
      { property: "og:description", content: "Trail running, cycling, coaching. Discipline, not motivation." },
      { property: "og:image", content: IMG.trailRun },
    ],
  }),
  component: Athlete,
});

const DISCIPLINES = [
  { img: IMG.trailRun, kicker: "Trail Running", title: "Long miles, longer thoughts.", body: "Ultra-distance trail runner. The first kilometre is always the hardest; the hundredth is the most honest." },
  { img: IMG.bike, kicker: "Cycling", title: "Two wheels, no schedule.", body: "Solo bikepacking across continents. The bike doesn’t care who you used to be." },
  { img: IMG.instructor, kicker: "Coaching", title: "Certified instructor.", body: "Teaching others how to start — because starting is the hardest part, and it’s the part nobody talks about." },
];

function Athlete() {
  return (
    <PageShell>
      <PageHero
        kicker="03 — Discipline"
        title="Built for the long haul."
        intro="Discipline beats motivation every single morning. Here’s how she trains, races, and coaches the next ones to the start line."
        image={IMG.trailRun}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="space-y-32">
          {DISCIPLINES.map((d, i) => (
            <article
              key={d.kicker}
              className={`reveal grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-card">
                <img src={d.img} alt={d.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div>
                <p className="kicker text-crimson">{d.kicker}</p>
                <h2 className="display-lg mt-4 text-bone">{d.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-bone/80">{d.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
