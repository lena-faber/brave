import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { ChapterCard } from "@/components/site/ChapterCard";
import { PressMarquee } from "@/components/site/PressMarquee";
import { PullQuote } from "@/components/site/PullQuote";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lena Faber — Brave · Wild · Curious" },
      { name: "description", content: "Just go. Just now. Just by yourself. The cinematic story of Lena Faber — adventurer, athlete, racer, author." },
      { property: "og:title", content: "Lena Faber — Brave" },
      { property: "og:description", content: "Just go. Just now. Just by yourself. Adventurer · Athlete · Author." },
      { property: "og:image", content: IMG.brave },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMG.brave },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "4", label: "Years on the road" },
  { value: "13 lb", label: "Pack on her back" },
  { value: "2,200 mi", label: "Appalachian Trail" },
  { value: "30+", label: "Countries crossed" },
];

const CHAPTERS = [
  { to: "/story", kicker: "01 — Origin", title: "The Spark", image: IMG.moscow },
  { to: "/adventures", kicker: "02 — On Foot", title: "Adventures", image: IMG.machuPicchu },
  { to: "/athlete", kicker: "03 — Discipline", title: "Athlete", image: IMG.trailRun },
  { to: "/racing", kicker: "04 — Speed", title: "Racing", image: IMG.carRace },
  { to: "/books", kicker: "05 — Words", title: "Books", image: IMG.books },
  { to: "/press", kicker: "06 — In The News", title: "Press", image: IMG.aircroft },
] as const;

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img
          src={IMG.brave}
          alt="Lena Faber — Brave"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-24 md:px-10">
          <p className="kicker text-crimson">Just Go · Just Now · Just By Yourself</p>
          <h1 className="display-xl mt-6 text-bone">BRAVE</h1>
          <p className="mt-6 max-w-xl text-lg text-bone/85 md:text-xl">
            The cinematic chronicle of Lena Faber — adventurer, athlete, racer,
            author. Four years on the road. One thirteen-pound pack. No excuses.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/story"
              className="group inline-flex items-center gap-3 border border-bone/30 px-6 py-4 kicker text-bone transition hover:bg-crimson hover:border-crimson"
            >
              Read the Story
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link to="/adventures" className="kicker text-bone/70 underline-offset-4 hover:underline hover:text-bone">
              See the Adventures →
            </Link>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 kicker text-bone/50">
          ↓ Scroll
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="reveal mx-auto max-w-5xl px-6 py-24 md:py-32 md:px-10">
        <p className="kicker text-crimson">Manifesto</p>
        <p className="mt-8 font-display text-3xl leading-snug text-balance text-bone md:text-5xl">
          She walked out of a comfortable life and into the weather. No plan,
          no permission, no map. Only an unshakable certainty that the only
          way to find a bigger life is to <span className="text-crimson italic">go look for it</span>.
        </p>
        <div className="mt-10 h-px w-24 bg-crimson" />
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-px bg-border md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background p-8 text-center md:p-12">
              <div className="font-display text-5xl text-bone md:text-6xl">{s.value}</div>
              <div className="kicker mt-3 text-bone/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE SPARK TEASER */}
      <section className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <div className="reveal relative aspect-[4/5] overflow-hidden">
          <img src={IMG.moscow} alt="Lena Faber, the spark" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="reveal flex flex-col justify-center">
          <p className="kicker text-crimson">The Spark</p>
          <h2 className="display-lg mt-4 text-bone">It started with a question she couldn’t un-ask.</h2>
          <p className="mt-6 text-lg leading-relaxed text-bone/80">
            What if the life you’re told to want isn’t the one you actually need?
            Lena left a city, a job, and a quiet kind of fear behind. What she
            found in the wild changed everything — and the road is still going.
          </p>
          <Link
            to="/story"
            className="mt-10 inline-flex w-fit items-center gap-3 border-b border-crimson pb-2 kicker text-bone hover:text-crimson"
          >
            Continue the Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <PullQuote attribution="— Lena Faber">
        I didn’t become brave out there. I just stopped pretending I wasn’t.
      </PullQuote>

      {/* CHAPTERS */}
      <section className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="reveal mb-12 flex items-end justify-between">
          <div>
            <p className="kicker text-crimson">Chapters</p>
            <h2 className="display-lg mt-2 text-bone">Six lives, one woman.</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((c) => (
            <ChapterCard key={c.to} {...c} />
          ))}
        </div>
      </section>

      <PressMarquee />
    </PageShell>
  );
}
