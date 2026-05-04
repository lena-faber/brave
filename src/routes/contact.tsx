import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { IMG } from "@/lib/images";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lena Faber" },
      { name: "description", content: "Speaking, press, collaborations, signed books. Get in touch." },
      { property: "og:title", content: "Contact — Lena Faber" },
      { property: "og:description", content: "Reach out for speaking, press and collaborations." },
      { property: "og:image", content: IMG.portrait11 },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <section className="relative min-h-screen w-full overflow-hidden pt-32">
        <img src={IMG.portrait11} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

        <div className="relative z-10 mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-2 md:px-10">
          <div>
            <p className="kicker text-crimson">Get in touch</p>
            <h1 className="display-lg mt-4 text-bone">Let’s talk.</h1>
            <p className="mt-6 max-w-md text-lg text-bone/80">
              Speaking, press, collaborations, signed copies of <em>Brave</em>.
              The fastest way to reach Lena is by email — she answers from
              wherever she happens to be.
            </p>

            <div className="mt-12 space-y-6">
              <a href="mailto:hello@lenafaber.com" className="group flex items-center justify-between border-b border-bone/20 pb-4 hover:border-crimson">
                <span className="kicker text-bone/60">Email</span>
                <span className="font-display text-2xl text-bone group-hover:text-crimson">hello@lenafaber.com</span>
              </a>
              <a href="#" className="group flex items-center justify-between border-b border-bone/20 pb-4 hover:border-crimson">
                <span className="kicker text-bone/60">Instagram</span>
                <span className="font-display text-2xl text-bone group-hover:text-crimson">@lenafaber</span>
              </a>
              <a href="#" className="group flex items-center justify-between border-b border-bone/20 pb-4 hover:border-crimson">
                <span className="kicker text-bone/60">Speaking</span>
                <span className="font-display text-2xl text-bone group-hover:text-crimson">speakers@lenafaber.com</span>
              </a>
            </div>
          </div>

          <form
            action="mailto:hello@lenafaber.com"
            method="post"
            encType="text/plain"
            className="space-y-6 bg-card/60 p-8 backdrop-blur md:p-10"
          >
            <div>
              <label className="kicker text-bone/60">Name</label>
              <input name="name" required className="mt-2 w-full border-b border-bone/30 bg-transparent py-3 text-bone outline-none focus:border-crimson" />
            </div>
            <div>
              <label className="kicker text-bone/60">Email</label>
              <input type="email" name="email" required className="mt-2 w-full border-b border-bone/30 bg-transparent py-3 text-bone outline-none focus:border-crimson" />
            </div>
            <div>
              <label className="kicker text-bone/60">Message</label>
              <textarea name="message" rows={5} required className="mt-2 w-full border-b border-bone/30 bg-transparent py-3 text-bone outline-none focus:border-crimson" />
            </div>
            <button type="submit" className="group inline-flex items-center gap-3 border border-crimson bg-crimson px-6 py-4 kicker text-bone transition hover:bg-transparent">
              Send Message <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
