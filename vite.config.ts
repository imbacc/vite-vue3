import type { UserConfig } from 'vite'

import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path'

// npm plugin
import vue from '@vitejs/plugin-vue'
import gzipPlugin from 'rollup-plugin-gzip' //Gzip
import IconsPlugin from 'unplugin-icons/vite' // icon 按需引入
import compressionPlugin from 'vite-plugin-compression' // 使用gzip或brotli来压缩资源
import { viteMockServe } from 'vite-plugin-mock' // mock

// user plugin
import envPlugin from './vite-plugin/vite-plugin-env' // env 环境
import componentsPlugin from './vite-plugin/vite-plugin-components' // Vite 的按需组件自动导入
import routerPagePlugin from './vite-plugin/vite-plugin-routerPage' // 自动导入路由 需要可以用
import htmlInjectPlugin from './vite-plugin/vite-plugin-htmlInject' //html inject

const config: UserConfig = {
	publicDir: 'public',

	//编译
	build: {
		minify: 'esbuild',
		target: 'modules',
		outDir: 'dist',
		assetsDir: 'assets',
		cssCodeSplit: true,
		sourcemap: false,
		brotliSize: true,
		chunkSizeWarningLimit: 500,
		assetsInlineLimit: 4096,
		rollupOptions: {
			output: {
				// chunks 做操作 注释将减少分割
				manualChunks: {
					'vue': ['vue', 'vue-router'],
					'imba-libs': ['imba-cache', 'imba-lazy', 'imba-request'],
					'lodash-es': ['lodash-es'],
				}
			}
		}
	},

	//部门优化选项
	optimizeDeps: {
		// entries: ['vue', 'nprogress', 'vue-router', 'axios'],
	},

	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},

	// 插件
	plugins: [vue(), envPlugin(), IconsPlugin(), componentsPlugin(), routerPagePlugin(), windicssPlugin(), htmlInjectPlugin()],

	// 要将一些共享的全局变量传递给所有的Less样式
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/styles/global.scss" as *;`
			}
		}
	}
}

export default ({ command, mode }) => {
	const { VITE_USE_MOCK, VITE_BUILD_GZIP, VITE_REMOTE_ASSETS } = loadEnv(mode, process.cwd()) as unknown as ENV_DTYPE;
	console.log('command=', command)
	console.log('mode=', mode)

	if (command === 'build' && mode === 'production') {
		// 编译环境配置
		// Gzip
		if (VITE_BUILD_GZIP) config.plugins.push(gzipPlugin())
		config.plugins.push(compressionPlugin())
	} else {
		// 开发环境配置
		// vite-plugin-mock
		if (VITE_USE_MOCK) config.plugins.push(viteMockServe({ mockPath: 'mock', supportTs: false }))
	}
	return config
}
