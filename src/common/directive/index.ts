import type { App } from 'vue'

const modules = import.meta.glob('./module/*.ts')

export default {
	install: (app: App) => {
		Object.values(modules).forEach((mod: any) => {
			if (typeof mod === 'object') mod.default(app)
			if (typeof mod === 'function') mod().then((res: any) => res.default(app))
		})
	}
}
