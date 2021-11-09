import { ref, render, h } from 'vue'
import messageComp from '@/components/message/message.vue'

class messageRender {
	constructor(option) {
		this.comp = null
		this.option = option || {}
		this.container = null
		this.time = null
	}

	init() {
		const { comp, option } = this
		if (comp) return comp.component.proxy
		this.comp = h(messageComp, option)
		this.container = document.createElement('div')
		// 渲染组件
		render(this.comp, this.container)
		// 将模态框添加至 body
		document.querySelector('#app').appendChild(this.container.firstElementChild)
		return this.comp.component.proxy
	}

	// 调用组建函数
	send(...args) {
		this.init().message(...args)
		return this
	}

	hide() {
		clearTimeout(this.time)
		this.time = setTimeout(() => {
			clearTimeout(this.time)
			this.init().hide()
		}, 6000)
	}

	// 卸载
	destroy() {
		render(null, this.container)
	}
}

export default new messageRender()
