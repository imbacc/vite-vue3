import type { PluginOption, UserConfig } from 'vite'

import { resolve } from 'path'
import { loadEnv, defineConfig } from 'vite'

// npm plugin
import { viteMockServe } from 'vite-plugin-mock' // mock
import vue from '@vitejs/plugin-vue'
import gzipPlugin from 'rollup-plugin-gzip' // Gzip
import IconsPlugin from 'unplugin-icons/vite' // icon 按需引入
import compressionPlugin from 'vite-plugin-compression' // 使用gzip或brotli来压缩资源
import vueTsx from '@vitejs/plugin-vue-jsx'
import unocss from '@unocss/vite'
import inspectPlugin from 'vite-plugin-inspect'
// 使用gzip或brotli来压缩资源

// user plugin
import envPlugin from './vite-plugin/vite-plugin-env' // env 环境
import componentsPlugin from './vite-plugin/vite-plugin-components' // Vite 的按需组件自动导入
import routerPagePlugin from './vite-plugin/vite-plugin-routerPage' // 自动导入路由 需要可以用
import htmlInjectPlugin from './vite-plugin/vite-plugin-htmlInject' // html inject
// import type { ENV_DTYPE } from '#/env'

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
        // chunks 做操作 注释将减少分割
        manualChunks: {
          'vue': ['vue', 'vue-router'],
          'imba-libs': ['imba-cache', 'imba-request'],
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
    exclude: ['lodash-es'],
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
    componentsPlugin(),
    routerPagePlugin(),
    htmlInjectPlugin(),
    unocss(),
    vueTsx(),
  ],

  // 要将一些共享的全局变量传递给所有的Less样式
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/global.scss" as *;',
      },
    },
  },
}

export default defineConfig(({ command, mode }) => {
  const VITE_ENV = loadEnv(mode, process.cwd())
  const { VITE_USE_MOCK, VITE_BUILD_GZIP } = VITE_ENV
  // console.log('command=', command)
  // console.log('mode=', mode)

  // config

  if (command === 'build' && mode === 'production') {
    // 编译环境配置
    // Gzip
    if (VITE_BUILD_GZIP) {
      config.plugins?.push(gzipPlugin() as PluginOption)
      config.plugins?.push(compressionPlugin())
    }
  } else {
    // 开发环境配置
    // vite-plugin-mock
    const env = envPlugin(VITE_ENV)
    Object.assign(config, env)
    if (VITE_USE_MOCK) {
      config.plugins?.push(
        viteMockServe({ mockPath: 'mock', supportTs: false }),
      )
    }
    config.plugins?.push(inspectPlugin())
  }
  return config
})
