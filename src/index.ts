import type { App } from 'vue'
import * as components from './components'

// named exports
export * from './components'

// default export: plugin
export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      // @ts-ignore
      const comp = (components as any)[key]
      if (comp && comp.name) {
        // @ts-ignore
        app.component(comp.name, comp)
      }
    })
  }
}
