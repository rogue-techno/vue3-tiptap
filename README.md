# Vue 3 Reusable Component Library (scaffold)

This repository is a small scaffold for a Vue 3 component library. It includes a Vite-based library build configuration, TypeScript support, testing with Vitest, and linting/formatting presets.

What you'll find here

- A library build configured with Vite (`vite.config.ts`) for producing ESM/CJS/UMD outputs.
- TypeScript configuration with declaration file generation (`tsconfig.json`).
- An example component: `src/components/MyButton.vue`.
- A simple test for the component using Vitest and Vue Test Utils: `tests/MyButton.spec.ts`.
- ESLint + Prettier configuration for consistent formatting.
- Docs folder with usage notes and a starting `README.md`.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Run tests

```bash
npm test
```

4. Build the library

```bash
npm run build
```

Next steps

- Add more components under `src/components` and export them from `src/components/index.ts`.
- Add documentation pages to `docs/` and consider automating docs site generation (e.g., VitePress).
- Publish the built `dist/` artifacts to npm when ready; ensure `vue` remains a peer dependency.
# vue3-tiptap
Vue3 + Vuetify 3 Tiptap component
