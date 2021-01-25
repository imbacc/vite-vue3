import { createStore } from 'vuex'

// vite 自动化导入模块
let modules = {}
const moduleFiles = import.meta.globEager('./module/*.js')
Object.keys(moduleFiles).forEach((name) => {
	let key = name.replace('./module/', '').replace('.js', '').trim()
	modules[key] = moduleFiles[name].default
})
console.log('vuex modules=', modules)

const store = createStore({
	state: {
		title: 'i am title'
	},
	mutations: {
		/**
		 * @param {Object} info
		 * 0是状态属性名称
		 * 1是赋予状态属性的值
		 */
		set_vuex(state, info) {
			state[info[0]] = info[1]
		}
	},
	actions: {},
	modules: {
		...modules
	}
})

export default store
