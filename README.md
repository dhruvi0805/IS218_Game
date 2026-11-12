# IS218 Game · NeuroNet

[Visit the live NeuroNet research site](https://dhruvi0805.github.io/IS218_Game/)

NeuroNet is an IS218 project that explores how introductory college students read their progress in a practice game. The planned first release follows one pattern challenge from sign-in through a saved score and private attempt history.

## Repository contents

- [Research notebook](docs/) covers the comparison with Chemistry Alchemy, NeuroNet's game components and architecture, research sources and methods, and the classroom review process.
- [Project planning](docs/plan.md) includes the first-release scope, five user stories, planned tests, the network-versus-list experiment, and peer-review tasks.
- [GitHub Pages workflow](.github/workflows/pages.yml) builds the VitePress site and publishes changes pushed to `main`.

## Local development

Use Node.js 22 or later.

```sh
npm ci
npm run docs:dev
```

Run `npm run docs:build` to build the site, then `npm run docs:preview` to preview that build locally.
