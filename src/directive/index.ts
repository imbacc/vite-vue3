import type { App } from 'vue'

const modules = import.meta.glob('./module/*.ts')

type mode_DTYPE = () => Promise<any>
interface res_DTYPE { default: (app: App) => void }

export default {
  install: (app: App) => {
    Object.values(modules).forEach((mod: mode_DTYPE) => {
      mod().then((res: res_DTYPE) => res.default(app))
    })
  },
}
