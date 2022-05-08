const modules = import.meta.glob('./module/*.js')

export default {
  install: (app) => {
    Object.values(modules).forEach((mod) => {
      if (typeof mod === 'object') mod.default(app)
      if (typeof mod === 'function') mod().then((res) => res.default(app))
    })
  }
}
