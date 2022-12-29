import routerPages from 'vite-plugin-pages'
import { camelCase } from 'lodash-es'

export default () => {
  return routerPages({
    extendRoute(route, parent) {
      if (route.path === '/') return route
      const split = route.path.split('/').filter((f) => f)
      const name = split[split.length - 1]
      route.name = camelCase(name)
      route.path = `/${name}`
      return route
    },
    pagesDir: 'src/views',
    extensions: ['vue']
  })
}
