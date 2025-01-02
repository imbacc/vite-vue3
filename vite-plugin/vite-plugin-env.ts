import type { PluginOption } from 'vite'

const createProxy = (list: any) => {
  list = JSON.parse(list)
  const result: Record<string, any> = {}
  for (const [prefix, target] of list) {
    result[prefix] = {
      target,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(new RegExp(`^${prefix}`), ''),
    }
  }
  return result
}

export const formatEnv = (viteEnv: Record<string, any>): ViteEnv_DTYPE => {
  const entries = Object.entries(viteEnv)
  const reg = /^-?\d+(?:\.\d+)?$/

  for (const [key, val] of entries) {
    if (val === 'true') {
      viteEnv[key] = true
      continue
    }

    if (val === 'false') {
      viteEnv[key] = false
      continue
    }

    if (key === 'VITE_PROXY') {
      viteEnv[key] = createProxy(val)
      continue
    }

    if (reg.test(val)) {
      viteEnv[key] = Number.parseInt(val)
      continue
    }

    viteEnv[key] = val
  }

  return viteEnv as ViteEnv_DTYPE
}

export default (VITE_ENV: ViteEnv_DTYPE): PluginOption => {
  const { VITE_HOST, VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE, VITE_LEGACY } = VITE_ENV

  return {
    name: 'env-config',
    config: () => {
      return {
        base: VITE_PUBLIC_PATH,
        server: {
          host: VITE_HOST,
          port: VITE_PORT,
          proxy: VITE_PROXY,
          open: false,
          warmup: {
            clientFiles: [
              './src/components/*.vue',
              './src/views/*.vue',
              './src/utils/*.js',
            ],
          },
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
