import type { UserConfig } from 'vite'
import type { ENV_DTYPE } from './types/vite-plugin/auto-env'

import { resolve } from 'path'
import { loadEnv, defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

// vue
import vue from '@vitejs/plugin-vue'
// icon 按需引入
import IconsPlugin from 'unplugin-icons/vite'
// 使用gzip或brotli来压缩资源
import compressionPlugin from 'vite-plugin-compression'
// tsx写法
import vueTsx from '@vitejs/plugin-vue-jsx'
// 原子和属性css写法
import unocss from '@unocss/vite'

// env 环境
import envPlugin, { formatEnv } from './vite-plugin/vite-plugin-env'
// 自动导入路由 需要可以用
import routerPagePlugin from './vite-plugin/vite-plugin-routerPage'
// Vite 的按需组件自动导入
import autoImportPlugin from './vite-plugin/vite-plugin-auto-import'
// Vite 的按需组件自动导入
import autoComponentsPlugin from './vite-plugin/vite-plugin-auto-components'
// env类型
import htmlInject from './vite-plugin/vite-plugin-htmlInject'

import packageJson from './package.json'
import dayjs from 'dayjs'

const { dependencies, name, version } = packageJson
const __APP_INFO__ = {
  package: { dependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
}

const config: UserConfig = {
  publicDir: 'public',

  // 编译
  build: {
    minify: 'esbuild',
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // chunks
        manualChunks: {
          'vue': ['vue', 'vue-router'],
          'imba-packages': ['imba-cache', 'imba-request'],
          'lodash-es': ['lodash-es'],
        },
      },
    },
  },

  define: {
    __VUE_OPTIONS_API__: false, // 明确不使用 options api
    __APP_INFO__: JSON.stringify(__APP_INFO__),
  },

  optimizeDeps: {
    // exclude: ['lodash-es'],
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#': resolve(__dirname, 'types'),
    },
  },

  // 插件
  plugins: [
    vue(),
    IconsPlugin(),
    routerPagePlugin(),
    unocss(),
    vueTsx(),
    autoImportPlugin(),
    autoComponentsPlugin(),
  ],

  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '',
  //     },
  //   },
  // },
}

export default defineConfig(({ command, mode }) => {
  const VITE_ENV = formatEnv(loadEnv(mode, process.cwd())) as ENV_DTYPE
  const { VITE_GLOB_APP_TITLE, VITE_USE_MOCK, VITE_BUILD_GZIP } = VITE_ENV
  // console.log('command=', command)
  // console.log('mode=', mode)

  config.plugins?.push(envPlugin(VITE_ENV))
  config.plugins?.push(htmlInject(VITE_GLOB_APP_TITLE))

  if (command === 'build' && mode === 'production') {
    // 编译环境配置
    if (VITE_BUILD_GZIP) {
      config.plugins?.push(compressionPlugin({
        verbose: true,
        algorithm: 'gzip',
        ext: '.gz',
      }))
    }
  } else {
    // 开发环境配置
    if (VITE_USE_MOCK) {
      config.plugins?.push(viteMockServe({ mockPath: 'mock', supportTs: false }))
    }
  }

  return config
})
