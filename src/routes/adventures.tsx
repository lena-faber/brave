import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/adventures")({
  head: () => ({
    meta: [
      { title: "Adventures — Lena Faber" },
      { name: "description", content: "The Appalachian Trail, running across Africa, Machu Picchu, Scotland, Islesboro and beyond." },
      { property: "og:title", content: "Adventures — Lena Faber" },
      { property: "og:description", content: "Four years. Thirty countries. One pack." },
      { property: "og:image", content: IMG.machuPicchu },
    ],
  }),
  component: Adventures,
});

const GALLERY = [
  { src: IMG.machuPicchu, label: "Machu Picchu, Peru", span: "md:col-span-2 md:row-span-2 aspect-square" },
  { src: IMG.scotland, label: "Highlands, Scotland", span: "aspect-[4/5]" },
  { src: IMG.africaRun, label: "Running across Africa", span: "aspect-[4/5]" },
  { src: IMG.islesboro, label: "Islesboro Crossing", span: "md:col-span-2 aspect-[16/9]" },
  { src: IMG.aircroft, label: "Aircroft", span: "aspect-[4/5]" },
  { src: IMG.portrait11, label: "Portrait, on the move", span: "aspect-[4/5]" },
];

function Adventures() {
  return (
    <PageShell>
      <PageHero
        kicker="02 — On Foot"
        title="The road that wouldn’t end."
        intro="From Georgia to Maine on the Appalachian Trail. Across the savannah of East Africa. Up the spine of the Andes. The places that taught her the meaning of enough."
        image={IMG.machuPicchu}
      />

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10">
        <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[260px]">
          {GALLERY.map((g) => (
            <figure key={g.label} className={`reveal group relative overflow-hidden bg-card ${g.span}`}>
              <img
                src={g.src}
                alt={g.label}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                <span className="kicker text-bone">{g.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
