import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/story" as const, label: "Story" },
  { to: "/adventures" as const, label: "Adventures" },
  { to: "/athlete" as const, label: "Athlete" },
  { to: "/racing" as const, label: "Racing" },
  { to: "/books" as const, label: "Books" },
  { to: "/press" as const, label: "Press" },
  { to: "/contact" as const, label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b-2 border-foreground" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl uppercase tracking-tight text-foreground">Lena Faber</span>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">/ Brave</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs font-bold uppercase tracking-widest text-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "text-xs font-bold uppercase tracking-widest text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t-2 border-foreground bg-background md:hidden">
          <div className="flex flex-col px-6 py-6">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
