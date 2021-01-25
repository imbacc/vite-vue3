import action from '@/common/tools/http_action.js'

// vite 自动化导入模块
const moduleFiles = import.meta.glob('./module/*.js')
// console.log('api moduleFiles', moduleFiles)

// 公共api
const api = {
	// 普通API 默认请求类型按http_action.js设定 当前默认POST
	app_111: 'api/ddd',
	app_222: 'api/:id/fff', // 在param传入 _id 即可

	// 定义API [地址,请求类型,缓存时间] 缓存时间默认0
	app_333: ['api/ddd/:id', 'GET'],
	app_444: ['api/www', 'GET', 10],
	app_555: ['api/eee', 'POST', 20],
	app_666: ['api/qqq/:id/update', 'POST'] // 修改或删除 不要定义缓存时间
}

export default (name, ...args) => {
	// 外链请求 不要可以去除
	if (args && args[0] && args[0]._onec) return name && action(name, ...args)

	// 懒加载其他API module
	if (name && name.indexOf('/') !== -1) {
		let [fileName, apiName] = name.split('/')
		let moduleName = `./module/${fileName}.js`
		let module = moduleFiles[moduleName]
		if (module && typeof module === 'function') {
			// 加载完替换懒加载函数 下次直接使用不再加载
			module().then((res) => {
				let moduleApi = res.default
				let actionApi = moduleApi[apiName]
				moduleFiles[moduleName] = moduleApi
				return actionApi && action(actionApi, ...args)
			})
		} else {
			return module && action(module[apiName], ...args)
		}
	}

	// 返回公共API
	return name && api[name] && action(api[name], ...args)
}
