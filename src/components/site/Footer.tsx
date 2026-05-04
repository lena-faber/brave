import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="kicker text-crimson">Brave</p>
            <p className="mt-4 font-display text-3xl leading-tight text-bone">
              Just go. Just now.<br />Just by yourself.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <p className="kicker text-bone/50">Explore</p>
              <Link to="/story" className="block text-bone/80 hover:text-crimson">The Story</Link>
              <Link to="/adventures" className="block text-bone/80 hover:text-crimson">Adventures</Link>
              <Link to="/athlete" className="block text-bone/80 hover:text-crimson">Athlete</Link>
              <Link to="/racing" className="block text-bone/80 hover:text-crimson">Racing</Link>
            </div>
            <div className="space-y-2">
              <p className="kicker text-bone/50">More</p>
              <Link to="/books" className="block text-bone/80 hover:text-crimson">Books</Link>
              <Link to="/press" className="block text-bone/80 hover:text-crimson">Press</Link>
              <Link to="/contact" className="block text-bone/80 hover:text-crimson">Contact</Link>
              <a href="mailto:hello@lenafaber.com" className="block text-bone/80 hover:text-crimson">hello@lenafaber.com</a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-bone/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Lena Faber. All rights reserved.</p>
          <p className="kicker">Brave · Wild · Curious</p>
        </div>
      </div>
    </footer>
  );
}
