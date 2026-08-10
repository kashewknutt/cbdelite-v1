# The Leo Club of CBD Elites — Website

A cinematic, GSAP + Lenis-driven single-page site for The Leo Club of CBD Elites (Lions Clubs International, District 3231 A4, Leo Multiple 3231). Built with Vite + React + TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Dropping in real images

The site renders on-brand gradient placeholders wherever an image is missing, so it's fully usable before any photos are added. To swap in real assets, drop files into `public/images/` using these exact paths (component code references them directly):

| Path | Purpose | Suggested size |
| --- | --- | --- |
| `public/images/logo.png` | Club emblem (header, footer) | 512×512, transparent PNG |
| `public/images/lions-badge.png` | Lions Clubs International badge (header) | 400×400, transparent PNG |
| `public/images/og-image.jpg` | Social share preview | 1200×630 |
| `public/images/hero/hero-bg.jpg` | Hero background layer | 1920×1080 |
| `public/images/about/about-collage.jpg` | About section image | 1200×900 |
| `public/images/leadership/<slug>.jpg` | Leadership headshots — see `src/data/content.ts` for exact filenames (e.g. `chaitanya-obhan.jpg`) | 600×600, square |
| `public/images/gallery/<slug>.jpg` | Gallery activity photos — see `src/data/content.ts` for exact filenames (e.g. `vanmahotsav-plantation.jpg`) | 1200×800 |
| `public/favicon.svg` | Browser tab icon | any (SVG) |

## Content that still needs filling in

These are rendered as visible bracketed placeholders in `src/data/content.ts` — search for them and replace once available:

- `contactInfo.phonePlaceholder` — club phone/WhatsApp number
- `contactInfo.joinFormHref` — the real Google Form link for membership interest
- `contactInfo.meetingSchedulePlaceholder` — regular meeting schedule
- A Fellowship Director name was not provided, so that leadership row is omitted entirely from `leadershipBoard` in `src/data/content.ts`.
