# DreamsTech Labs

Website for [DreamsTech Labs](https://dreamstechlabs.in): a searchable catalog of final-year projects for B.Tech, MCA and M.Tech students.

Built with React, Vite and a single stylesheet (`src/index.css`). Deployed to GitHub Pages on every push to `main`.

## Adding or editing a project

All projects live in `src/data/projects.js`. Add a line with the next number:

```js
p(73, 'Project title', 'ai', 'btech', ['Python', 'Flask'],
  'One sentence on what it does.',
  ['Feature one', 'Feature two', 'Feature three']),
```

- Area: `web`, `ai`, `iot`, `sec`, `cloud` or `chain`
- Level: `btech` or `mtech`

Counts on the page update automatically.

## Run locally

```bash
npm ci
npm run dev
```
