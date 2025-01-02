import type { App } from 'vue'

const modules = import.meta.glob('./modules/*.ts', { eager: true }) as Record<string, any>

export default {
  install: (app: App) => {
    Object.values(modules).forEach((res) => res.default(app))
  },
}
