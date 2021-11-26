import action from '@/common/tools/cmake_zintercept.js'
import { lazyModule } from 'imba-lazy'
import { METHOD } from './cfg.js'

// 公共api
const api = {
	// 普通API 默认请求类型按http_action.js设定 当前默认POST
	app_111: 'index/ddd',
	app_222: 'index/:id/fff', // 在param传入 _id 即可

	// 定义API [地址,请求类型,缓存时间] 缓存时间默认0
	app_333: ['index/ddd/:id', METHOD.GET],
	app_444: ['index/www', METHOD.GET, 10],
	app_555: ['index/eee', METHOD.POST, 20],
	app_666: ['index/qqq/:id/update', METHOD.POST], // 修改或删除 不要定义缓存时间
	error: ['error', METHOD.POST] // 试错请求 没有配置mock
}

// vite 自动化导入模块
const moduleFiles = import.meta.glob('./module/*.js')
// console.log('api moduleFiles', moduleFiles)

export default (name, ...args) => {
	// 外链请求 不要可以去除
	if (args && args[0] && args[0]._onec) return name && action(name, ...args)

	// 懒加载其他API module js
	if (name && name.indexOf('/') !== -1) {
		let [fileName, apiName] = name.split('/')
		return new Promise((resolve) => {
			lazyModule(fileName, moduleFiles).then((moduleApi) => {
				resolve(action(moduleApi[apiName], ...args))
			})
		})
	}

	// 返回公共API
	return name && api[name] && action(api[name], ...args)
}
