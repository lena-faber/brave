export function Ticker({ items, className = "" }: { items: string[]; className?: string }) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-fast flex shrink-0 whitespace-nowrap">
        {repeated.map((t, i) => (
          <span key={i} className="flex items-center gap-8 px-8 font-display text-3xl uppercase md:text-5xl">
            <span>{t}</span>
            <span className="text-primary">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
