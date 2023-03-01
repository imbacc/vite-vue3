import type { Component } from 'vue'

export interface CompRender_DTYPE {
	comp: Component | any
	option: { [key in string]: any }
	container: HTMLElement | null
}
