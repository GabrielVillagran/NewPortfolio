# Gabriel Portfolio — Metal Edition

An experimental, personal developer portfolio inspired by modern industrial sci-fi interfaces, futuristic HUDs, and heavy metal artwork. This is **original styling**, not an official DOOM or Megadeth project.

## Run locally

Requirements: Node.js 20.19+ (Node 22 LTS recommended), npm.

```bash
git clone https://github.com/GabrielVillagran/NewPortfolio.git
cd NewPortfolio
npm install
npm run dev
```

Open the local URL printed by Astro (usually http://localhost:4321).

## Quality checks

```bash
npm run check
npm run build
npm run preview
```

## Project structure

- `src/pages/`: Home, Work, Projects, Writing, About
- `src/layouts/BaseLayout.astro`: shared HUD header, navigation, footer, metadata
- `src/data/site.ts`: work history, project entries and technology groups
- `src/styles/global.css`: design tokens, layout and responsive styles
- `public/favicon.svg`: original favicon

## Design principles

- Text stays readable; effects stay secondary.
- No official game logos, album covers, or copyrighted assets.
- Built with Astro and CSS; no heavy runtime required.
- Respect reduced-motion settings and mobile screen sizes.
- Content can be expanded without touching page layouts.

## Scope

This repo is **local-development only for now**. There is no deployment workflow or configured hosting service. We'll evaluate free hosting options after the design is tested locally.

## Next steps

- Add original illustrated thumbnails and imagery.
- Migrate selected original articles from the existing portfolio, keeping attribution and publication dates.
- Add project source links and demos only once available.
- Test on real phones, check accessibility and refine interactions.
