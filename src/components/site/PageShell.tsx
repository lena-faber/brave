import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { useReveal } from "@/hooks/use-reveal";

export function PageShell({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
  image,
}: {
  kicker: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker text-primary">{kicker}</p>
            <h1 className="display-lg mt-4 text-foreground">{title}</h1>
            {intro && <p className="mt-6 max-w-xl text-lg text-foreground/75">{intro}</p>}
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-foreground">
              <img src={image} alt={title} className="h-full w-full object-cover" loading="eager" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 h-1 w-full bg-primary" />
    </section>
  );
}
