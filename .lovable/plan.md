# Brave — Lena Faber Rebuild

A cinematic, modern action-hero portfolio inspired by lenafaber.com/brave, using the photos hosted at github.com/lena-faber/brave.

## Look & Feel

- Dark editorial aesthetic: near-black background (#0B0B0C), bone white text (#F2EEE6), crimson accent (#C9352B), warm sand secondary (#C2A878).
- Typography: condensed display serif for headlines (Playfair Display / Cormorant), tight uppercase sans for kickers (Inter), generous tracking on labels.
- Motion: slow fade-in on scroll, subtle parallax on hero images, hover zoom on chapter cards, sticky translucent nav with backdrop blur.
- Full-bleed hero photography, asymmetric editorial grids, large quoted pull text between sections.

## Routes

```text
/             Home — hero, manifesto, stats, chapter grid, press marquee
/story        The Spark + biography long-form with portrait collage
/adventures   Appalachian Trail, Africa run, Machu Picchu, Scotland, Islesboro
/athlete      Trail running, biking, training, instructor
/racing       Car racing imagery + narrative
/press        Press logos grid + clippings
/books        Book covers, "Brave • Wild • Curious" promo
/contact      Mailto form, social links
```

Each route ships its own `head()` with unique title, description, og:title/description, and og:image pulled from the hero photo of that page.

## Home Page Sections

1. **Hero** — full-bleed `lena-faber-brave.jpg`, kicker "JUST GO • JUST NOW • JUST BY YOURSELF", massive "BRAVE" headline, scroll cue.
2. **Manifesto** — short editorial paragraph, crimson rule.
3. **Stats strip** — 4 years on the road · 13-lb pack · Appalachian Trail · 30+ countries.
4. **The Spark teaser** — split layout with `lena-faber-moscow.jpeg`, link to /story.
5. **Chapters grid** — 6 cards (Adventures, Athlete, Racing, Books, Press, Story), each with hero photo + hover zoom.
6. **Press marquee** — infinite-scroll logo strip (fox-tv, kansas-tv, daily press, portland-leader, portland-phoenix, the-forecaster, ski-mag, kormorant-newspaper).
7. **Footer** — contact CTA, social, copyright.

## Image Mapping

Pulled directly from `raw.githubusercontent.com/lena-faber/brave/main/assets/images/`:

- Hero / brand: `lena-faber-brave.jpg`, `lena-faber-11.jpeg`
- Adventures: `lena-machu-picchu.jpg`, `lena-scotland.jpg`, `lena-faber-run-africa.jpg`, `lena-faber-islesboro-crossing.jpg`, `lena-faber-aircroft.jpeg`
- Athlete: `lena-faber-trail-run.jpeg`, `lena-faber-bike.jpeg`, `lena-faber-instructor.jpg`
- Racing: `lena-faber-car-race.jpeg`
- Story portraits: `lena-faber-moscow.jpeg`, `lena-faber-model.jpg`
- Books: `lena-faber-books.jpg`, `brave-wild-curious-screenshot.jpg`
- Testimonials: `casey.jpg`, `jane.jpg`, `michael.jpg`, `terence.jpg`, `belleville.jpg`, `oconee.jpg`, `alexandr-mihailov.jpg`, `jury-apenchenko.jpg`, `voffka.jpg`
- Press logos: `fox-tv.jpg`, `kansas-tv.jpg`, `dailypress.jpg`, `portland-leader.jpg`, `portland-phoenix.jpg`, `the-forecaster.jpg`, `ski-mag.jpg`, `kormorant-newspaper.jpg`
- Favicon: `favicon-lena-faber.jpg`

## Components

`Nav` (sticky, blur), `Footer`, `Hero`, `StatStrip`, `ChapterCard`, `PressMarquee`, `PhotoGrid`, `Lightbox`, `PullQuote`, `TestimonialCard`.

## Technical Notes

- TanStack Start file routes under `src/routes/` (one file per page above).
- Tailwind v4 design tokens in `src/styles.css` (colors, fonts, spacing scale).
- Google Fonts via `<link>` in `__root.tsx` head.
- Images referenced by raw GitHub URLs (no upload needed); favicon wired via root head links.
- Reusable IntersectionObserver hook for scroll-reveal; CSS-only marquee for press strip.
- Contact uses `mailto:` — no backend.

## Out of Scope

CMS, real form backend, blog engine, e-commerce, video hosting.
