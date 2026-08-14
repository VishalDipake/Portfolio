# Vishal Dipake — Portfolio

A Vite + React + GSAP + Tailwind v4 portfolio, cloned from the layout/animation
structure of https://portfolio-website-jade-three-40.vercel.app/, with your
own content, projects and links wired in.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## What's in here

- **Loading intro** (`Components/LoadingPage.jsx`) — animated laptop sketch +
  progress counter, then a 3D "page fold" reveal into the site.
- **Navbar** — sticky header, name "Vishal", mobile fullscreen menu.
- **Hero** — full-bleed background, staggered letter animation on your name,
  parallax on scroll.
- **About** — your bio pulled from your existing `aboutData.ts`, with a
  photo card (using `public/profilePic.png`).
- **Work** — your 4 real projects (Edemy LMS, Social Media Platform,
  Wanderlust Travel, AI Workflow Automation), pulled from `projectData.ts`,
  with sticky stacking cards and scroll reveals.
- **Journey** — a timeline built from your education + tech-stack progression.
- **Contact / Social** — GitHub, LinkedIn, Email, LeetCode — pulled from the
  links in your old `leftsidebar.tsx`.
- **Footer** — big link wall + copyright.

## Things you'll probably want to swap in

The original reference site uses real video/screenshot assets (`heroVideo.mp4`,
`about.mp4`, project screenshots) that don't exist in your old repo, so this
version uses stand-ins instead:

- **Hero** — no video. Instead it's a paper-cream backdrop with a dot-grid
  texture, a giant outline watermark ("Build & Ship") that parallaxes on
  scroll, and two floating stat badges. If you want a background video like
  the reference, add one to `public/` and swap in a `<video>` tag.
- **Resume button** — new, on the Hero page next to "View More" / "Contact".
  It has a magnetic hover pull, a bouncing download icon, a "PDF" stamp badge
  that punches in on load, and a black wipe-fill on hover. It downloads
  `public/resume.pdf` — **I generated a placeholder resume PDF from your
  existing project/skills data so the button works out of the box. Replace
  `public/resume.pdf` with your real resume** (keep the filename, or update
  the `href` in `src/pages/HeroPage.jsx`).
- **Work / project cards** — no real screenshots exist yet, so each card now
  shows a custom-illustrated "browser window" mockup of that product's UI
  (course cards + progress bars for the LMS, a feed with avatars/likes for
  the social app, listing cards for Wanderlust, a flowchart canvas for the
  AI workflow tool) instead of a flat placeholder tile. They tilt in 3D on
  mouse-move and their signature detail animates in on scroll (progress bars
  fill, likes pop, flow lines draw themselves). Swap `<Mock accent={...} />`
  in `ProjectVisual` (`src/pages/WorkPage.jsx`) for a real
  `<img src="/your-screenshot.png" />` once you have actual screenshots —
  that will look even better than the mockups.
- `public/profilePic.png` is used in the About section instead of a video.

## Notes

- This is a static Vite/React app — no database, no auth, no CMS, matching
  the reference project's stack. Your old Next.js + MongoDB + NextAuth setup
  is not used here.
- Colors, fonts (JetBrains Mono + Playfair Display) and animation timings are
  kept close to the reference for a near-identical feel.
