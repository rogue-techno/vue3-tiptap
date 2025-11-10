# Usage

This repository contains a small Vue 3 component library scaffold. It is intended as a starting point for building reusable, documented Vue components.

Install as a dependency in your project (the library expects `vue` as a peer dependency):

1. Build the library (from this repo)

```bash
npm install
npm run build
```

2. Use in your project

Direct import:

```js
import { MyButton } from 'vue3-tiptap-components/dist'
// or import the built ESM bundle
import { MyButton } from 'path/to/your/local/dist/index.es.js'
```

Or install as a plugin:

```js
import Vue from 'vue'
import Vue3TiptapComponents from 'vue3-tiptap-components'
Vue.use(Vue3TiptapComponents)
```

Docs and tests live in `docs/` and `tests/`. Use `npm run test` to run unit tests.
