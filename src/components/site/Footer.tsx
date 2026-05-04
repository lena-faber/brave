import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Brave</p>
            <p className="mt-4 font-display text-4xl uppercase leading-tight text-foreground">
              Just go.<br />Just now.<br /><span className="text-primary">Just by yourself.</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm md:col-span-2">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">Explore</p>
              <Link to="/story" className="block text-foreground hover:text-primary">The Story</Link>
              <Link to="/adventures" className="block text-foreground hover:text-primary">Adventures</Link>
              <Link to="/athlete" className="block text-foreground hover:text-primary">Athlete</Link>
              <Link to="/racing" className="block text-foreground hover:text-primary">Racing</Link>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">More</p>
              <Link to="/books" className="block text-foreground hover:text-primary">Books</Link>
              <Link to="/press" className="block text-foreground hover:text-primary">Press</Link>
              <Link to="/contact" className="block text-foreground hover:text-primary">Contact</Link>
              <a href="mailto:hello@lenafaber.com" className="block text-foreground hover:text-primary">hello@lenafaber.com</a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t-2 border-foreground pt-6 text-xs uppercase tracking-widest text-foreground/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Lena Faber.</p>
          <p>Brave · Wild · Curious</p>
        </div>
      </div>
    </footer>
  );
}
