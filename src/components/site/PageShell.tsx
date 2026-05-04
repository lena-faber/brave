import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { useReveal } from "@/hooks/use-reveal";

export function PageShell({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-bone">
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
  align = "left",
}: {
  kicker: string;
  title: string;
  intro?: string;
  image: string;
  align?: "left" | "center";
}) {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div
        className={`relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:px-10 ${
          align === "center" ? "items-center text-center" : ""
        }`}
      >
        <p className="kicker text-crimson">{kicker}</p>
        <h1 className="display-lg mt-4 max-w-4xl text-balance text-bone">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/80">{intro}</p>
        )}
      </div>
    </section>
  );
}
