import type { CompRender_DTYPE } from '#/loadingRender'
import type { Component } from 'vue'

import { render, h } from 'vue'
import loadingComp from '@/components/loading/loading.vue'

class CompRender implements CompRender_DTYPE {
	public comp: Component | any
	public option: { [x: string]: any }
	public container: HTMLElement | null
	private time: NodeJS.Timeout | null

	constructor(option?: { [key in string]: any }) {
		this.comp = null
		this.option = option || {}
		this.container = null
		this.time = null
	}

	init() {
		const { comp, option } = this
		if (comp) return comp.component.proxy
		this.comp = h(loadingComp, option)
		this.container = document.createElement('div')
		// 渲染组件
		render(this.comp, this.container)
		// 将模态框添加至 body
		document.querySelector('#app')?.appendChild(this.container.firstElementChild as Element)
		return this.comp.component.proxy
	}

	// 调用组件函数
	open() {
		this.init().open()
		return this
	}

	close() {
		clearTimeout(this.time as NodeJS.Timeout)
		this.time = setTimeout(() => {
			clearTimeout(this.time as NodeJS.Timeout)
			this.init().close()
		}, 300)
		return this
	}

	// 卸载
	destroy() {
		render(null, this.container as Element)
		this.comp = null
		this.option = {}
		this.container = null
		this.time = null
	}
}

export default new CompRender()
