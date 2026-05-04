import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Zap } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { PressMarquee } from "@/components/site/PressMarquee";
import { Testimonials } from "@/components/site/Testimonials";
import { Ticker } from "@/components/site/Ticker";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lena Faber — BRAVE. Action Hero." },
      { name: "description", content: "Just go. Just now. Just by yourself. Adventurer · Athlete · Racer · Author." },
      { property: "og:title", content: "Lena Faber — BRAVE" },
      { property: "og:description", content: "Just go. Just now. Just by yourself." },
      { property: "og:image", content: IMG.brave },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMG.brave },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "04", label: "Years on the road" },
  { value: "13", label: "Pounds in the pack" },
  { value: "2K+", label: "Trail miles" },
  { value: "30+", label: "Countries" },
];

const CHAPTERS = [
  { to: "/story" as const, num: "01", title: "Story", image: IMG.moscow },
  { to: "/adventures" as const, num: "02", title: "Adventures", image: IMG.machuPicchu },
  { to: "/athlete" as const, num: "03", title: "Athlete", image: IMG.trailRun },
  { to: "/racing" as const, num: "04", title: "Racing", image: IMG.carRace },
  { to: "/books" as const, num: "05", title: "Books", image: IMG.books },
  { to: "/press" as const, num: "06", title: "Press", image: IMG.aircroft },
];

const GRID_IMAGES = [
  IMG.scotland,
  IMG.africaRun,
  IMG.islesboro,
  IMG.bike,
  IMG.instructor,
  IMG.portrait11,
  IMG.model,
  IMG.braveBook,
];

const TICKER_WORDS = ["Brave", "Wild", "Curious", "Just Go", "Just Now", "Just By Yourself"];

function Home() {
  return (
    <PageShell>
      {/* HERO — full bleed image, overlaid action text */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img
          src={IMG.brave}
          alt="Lena Faber — Brave"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        {/* readability gradient — bottom-left for text */}
        <div className="absolute inset-0 bg-gradient-to-tr from-foreground/85 via-foreground/40 to-transparent" />

        {/* floating action tags */}
        <div className="absolute left-6 top-28 z-10 inline-flex items-center gap-2 bg-background px-3 py-2 text-xs font-bold uppercase tracking-widest text-foreground md:left-10 md:top-32">
          <Zap className="h-3 w-3 text-primary" /> Now Filming
        </div>
        <div className="absolute right-6 top-28 z-10 bg-primary px-3 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground md:left-10 md:right-auto md:top-44">
          Brave / 2026
        </div>

        {/* live indicator */}
        <div className="absolute right-6 bottom-32 z-10 flex items-center gap-2 md:right-10 md:bottom-36">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary" />
          <p className="text-xs font-bold uppercase tracking-widest text-background">Live · On The Road · 2026</p>
        </div>

        {/* main content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-28 md:px-10 md:pb-36">
          <h1 className="display-xl text-background drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            BR<span className="text-primary">A</span>VE.
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-xl uppercase md:text-3xl">
            <span className="bg-background px-3 py-1 text-foreground">Adventurer</span>
            <span className="bg-primary px-3 py-1 text-primary-foreground">Athlete</span>
            <span className="bg-accent px-3 py-1 text-accent-foreground">Racer</span>
            <span className="bg-background px-3 py-1 text-foreground">Author</span>
          </div>

          <p className="mt-8 max-w-xl text-lg text-background/95 md:text-xl">
            Lena Faber. Four years moving. Thirteen pounds on her back.
            Thirty countries down. Zero permission asked.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/adventures"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-background hover:text-foreground"
            >
              Watch the Action
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              to="/story"
              className="inline-flex items-center gap-3 border-2 border-background px-6 py-4 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-background hover:text-foreground"
            >
              Why She Started
            </Link>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-background/80">
          ↓ Scroll
        </div>
      </section>

      {/* Ticker */}
      <div className="border-y-2 border-foreground bg-primary py-4 text-primary-foreground">
        <Ticker items={TICKER_WORDS} />
      </div>

      {/* STATS */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`relative px-6 py-12 md:px-10 md:py-16 ${i < 3 ? "md:border-r-2" : ""} ${i < 2 ? "border-b-2 md:border-b-0" : ""} border-foreground`}
            >
              <div className="font-display text-7xl uppercase text-foreground md:text-8xl">{s.value}</div>
              <div className="mt-3 text-xs font-bold uppercase tracking-widest text-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO + IMAGE COLLAGE */}
      <section className="border-t-2 border-foreground bg-foreground text-background">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-stretch md:grid-cols-4">
          <div className="px-6 py-24 md:col-span-3 md:px-10 md:py-32">
            <p className="kicker text-primary">No archive. No memories. Just the next move.</p>
            <h2 className="display-lg mt-6 text-background">
              She doesn’t look back. <span className="text-primary">She runs forward.</span>
            </h2>
          </div>
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-foreground p-6 md:col-span-1 md:min-h-0 md:p-8">
            <img
              src={IMG.instructor}
              alt="Lena Faber instructing"
              className="block max-h-full max-w-full scale-[1.2] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* IMAGE GRID — uses every photo */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-0 md:grid-cols-4">
          {GRID_IMAGES.map((src, i) => (
            <figure key={i} className="reveal group relative aspect-square overflow-hidden bg-foreground">
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-primary/0 transition group-hover:bg-primary/20" />
            </figure>
          ))}
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="border-t-2 border-foreground bg-background">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="kicker text-primary">Six Chapters</p>
              <h2 className="display-lg mt-3 text-foreground">Pick a lane.</h2>
            </div>
            <p className="max-w-md text-sm uppercase tracking-widest text-foreground/60">
              Six lives lived in parallel. Click any one to dive in.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CHAPTERS.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="reveal group relative block overflow-hidden bg-foreground"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <p className="font-display text-2xl text-primary">{c.num}</p>
                    <h3 className="font-display text-4xl uppercase text-background">{c.title}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground transition group-hover:rotate-45">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <PressMarquee />
    </PageShell>
  );
}
