const modules = import.meta.glob('./module/*.js')

// 自动导入当前文件夹下的所有自定义指令(默认导出项)
export default (app) => {
	Object.values(modules).forEach((mod) => mod.default(app))
}
