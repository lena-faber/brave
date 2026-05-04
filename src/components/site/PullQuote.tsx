export function PullQuote({ children, attribution }: { children: React.ReactNode; attribution?: string }) {
  return (
    <figure className="reveal mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
      <span className="kicker text-crimson">—</span>
      <blockquote className="mt-6 font-display text-3xl leading-tight text-balance text-bone md:text-5xl">
        “{children}”
      </blockquote>
      {attribution && <figcaption className="mt-6 kicker text-bone/50">{attribution}</figcaption>}
    </figure>
  );
}
