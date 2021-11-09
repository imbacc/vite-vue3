const modules = import.meta.glob('./module/*.js')

// 自动导入当前文件夹下的所有自定义指令(默认导出项)
export default {
	install: (app) => {
		for (const path in modules) {
			// 排除当前文件
			if (path !== './index.js') {
				modules[path]().then((mod) => mod.default(app))
			}
		}
	}
}
