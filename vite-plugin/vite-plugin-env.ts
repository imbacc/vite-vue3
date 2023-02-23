import type { PluginOption } from 'vite'

const createProxy = (list: string) => {
  list = JSON.parse(list)
  const ret: { [key: string]: any } = {}
  for (const [prefix, target] of list) {
    ret[prefix] = {
      target,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(new RegExp(`^${prefix}`), ''),
    }
  }
  return ret
}

export default (VITE_ENV: { [key: string]: any }): PluginOption => {
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE, VITE_LEGACY } = VITE_ENV

  return {
    name: 'env-config',
    config: () => {
      return {
        base: VITE_PUBLIC_PATH,
        server: {
          port: parseInt(VITE_PORT),
          proxy: createProxy(VITE_PROXY),
          open: true,
        },
        build: {
          polyfillDynamicImport: Boolean(VITE_LEGACY) || false,
          terserOptions: {
            compress: {
              keep_infinity: true,
              drop_console: Boolean(VITE_DROP_CONSOLE) || false,
            },
          },
        },
      }
    },
  }
}
