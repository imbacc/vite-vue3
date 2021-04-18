import vue from '@vitejs/plugin-vue' // v2.0 核心现在与框架无关。现在通过提供Vue支持@vitejs/plugin-vue
import { resolve } from 'path'
import envPlugin from './vite-plugin/vite-plugin-env'

/**
 * @type {import('vite').UserConfig}
 */

const config = {
	server: {
		// port: 3000,
		// host: '127.0.0.1',
		// 压缩
		// minify: 'esbuild'
		// 热更新
		hmr: { overlay: false }
	},

	// 输出路径
	outDir: 'dist',

	//编译
	build: {
		outDir: 'dist',
		// 打包引入 输出
		rollupOptions: {
			format: 'commonjs'
			// external: ['vue']
			// output: {
			// 	globals: {
			// 		vue: 'Vue'
			// 	}
			// }
		},
		// 生成生产map
		sourcemap: false,
		// 关闭brotliSize显示可以稍微缩短打包时间
		brotliSize: false,
		chunkSizeWarningLimit: 1200
	},

	//部门优化选项
	optimizeDeps: {
		include: ['mockjs', 'axios', 'qs-stringify', 'nprogress', 'vue-router', 'vuex']
		// exclude: ['element-plus', 'mockjs', 'axios', 'qs', 'vuex']
	},

	// 别名包 必须以 / 开头、结尾
	alias: {
		// v2.0不再需要/开始/结束斜杠。 /@/ -> @
		// '/@': root, vite 内部在用，这里不能用了
		// '/root': __dirname, vite 内部在用，这里不能用了
		'@': resolve(__dirname, 'src'),
		'@assets': resolve(__dirname, 'src/assets'),
		'@components': resolve(__dirname, 'src/components'),
		'@views': resolve(__dirname, 'src/views'),
		'@common': resolve(__dirname, 'src/common'),
		'@styles': resolve(__dirname, 'src/styles')
	},

	// 资源路径
	assetsDir: 'assets',

	// 小于此数字（以字节为单位）的静态资产文件将内联为 base64字符串。默认限制为“4096”（4kb）。设置为“0”以禁用。
	assetsInlineLimit: 4096,

	//是否对CSS进行代码拆分。启用时，异步块中的CSS将在块中作为字符串内联，并通过动态创建的加载块时的样式标记。
	cssCodeSplit: true,

	// 插件
	plugins: [vue(), envPlugin()]

	// 要将一些共享的全局变量传递给所有的Less样式
	// cssPreprocessOptions: {
	//     less: {
	//       modifyVars: {
	//         'preprocess-custom-color': 'green'
	//       }
	//     }
	//   }
}

export default ({ command, mode }) => {
	const { VITE_USE_IMAGEMIN, VITE_USE_MOCK } = process.env

	console.log('command=', command)
	console.log('mode=', mode)
	if (command === 'build' && mode === 'production') {
		// 编译环境配置
		const vitePluginImgmin = require('./vite-plugin/vite-plugin-imgmin')
		const gzipPlugin = require('rollup-plugin-gzip')

		//vite-plugin-imagemin
		VITE_USE_IMAGEMIN && config.plugins.push(vitePluginImgmin())

		// rollup-plugin-gzip
		config.plugins.push(gzipPlugin())
	} else {
		// 开发环境配置
		if (VITE_USE_MOCK || false) {
			// vite-plugin-mock
			const { viteMockServe } = require('vite-plugin-mock')
			config.plugins.push(viteMockServe({ supportTs: false }))
		}
	}
	return config
}
