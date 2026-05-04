import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function ChapterCard({
  to,
  kicker,
  title,
  image,
}: {
  to: string;
  kicker: string;
  title: string;
  image: string;
}) {
  return (
    <Link
      to={to}
      className="reveal group relative block overflow-hidden bg-card"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <div>
          <p className="kicker text-crimson">{kicker}</p>
          <h3 className="mt-2 font-display text-3xl text-bone">{title}</h3>
        </div>
        <ArrowUpRight className="h-6 w-6 translate-y-2 text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
