import type { AxiosRequestHeaders } from 'axios'
import type { repeatRecord_DTYPE, repeatRecord_KEYOF, requestUseData_DTYPE } from '#/cmakeIntercept'

import axios from 'axios'
import message from '@/render/messageRender'

import { env, timeOut, pageKey, sizeKey, isDev } from '@/common/cfg.js'
import { setRequestInit, requestAction } from 'imba-request'
import { useUserStore } from '@/store/user.js'

import loadingRender from '@/render/loadingRender.js'

const baseURL = env.VITE_GLOB_API_URL
const http = axios.create({
	baseURL: baseURL, // url = base url + request url
	timeout: timeOut
})

// 初始化封装请求包
setRequestInit({
	page: pageKey,
	size: sizeKey,
	dev: isDev,
	http: http
})

const error_msg = async (msg = '服务器开小差了~') => {
	console.error(msg)
	message.send(msg, 'error').hide()
}

const go_logion = () => {
	localStorage.removeItem('token')
	window.location.href = '/login'
}

const repeat_function = (cacheName: repeatRecord_KEYOF) => {
	// 处理重复请求
	const repeatMark = repeatRecord[cacheName]
	if (!repeatMark) {
		repeatRecord[cacheName] = true
		return false
	}
	console.error(`${cacheName} 请求重复!`)
	return true
}

const repeatRecord: repeatRecord_DTYPE = {}
const repeat_clear = () => Object.keys(repeatRecord).forEach((key) => repeat_delete(key))
const repeat_delete = (cacheName: repeatRecord_KEYOF) => delete repeatRecord[cacheName]

// 请求拦截器
http.interceptors.request.use(
	(config) => {
		const userStore = useUserStore()

		// 在发送请求之前做些什么
		let _data: requestUseData_DTYPE = {}

		try {
			_data = JSON.parse(config.data)
		} catch (error) {
			_data = typeof config.data === 'object' ? config.data : {}
		}

		const { _noToken, _formData, _header } = _data
		const url = config.url

		const _repeat = repeat_function(url as repeatRecord_KEYOF)
		if (_repeat) return Promise.reject(`_repeat_${url}`)

		const token = userStore.token
		if (token) (config.headers as AxiosRequestHeaders)['Authorization'] = `bearer ${token}`

		if (_noToken) {
			delete config.data['_noToken']
			delete (config.headers as any)['x-access-token']
			delete (config.headers as any)['Authorization']
		}

		if (_formData) {
			(config.headers as any)['Content-Type'] = 'application/x-www-form-urlencoded'
			delete config.data['_formData']
		}

		if (_header) {
			config.headers = { ...config.headers, ..._header }
			delete config.data['_header']
		}

		loadingRender.open()

		// console.log("【config】 " + JSON.stringify(config))
		return config
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 响应拦截器
http.interceptors.response.use(
	(response) => {
		const { status, data, config } = response

		repeat_delete(config.url as repeatRecord_KEYOF)

		loadingRender.close()

		if (status === 401) {
			go_logion()
			return
		}

		if (status === 200) {
			if (data.code === 0 || data?.msg === 'success') return data.data
		}

		if ((data && data?.code < 0) || data?.msg === 'error') {
			error_msg(data.msg)
			return Boolean(false)
		}

		return Boolean(false)
	},
	(error) => {
		// 对响应错误做点什么
		const err = error.toString()
		console.error('response error', err)
		const { message } = error.response?.data || {}

		if (error.response?.config) repeat_delete(error.response.config.url)

		loadingRender.close()

		// 重复请求
		if (err.indexOf('_repeat_') !== -1) {
			let key = err.split('_repeat_')
			key = key[key.length - 1].trim()
			repeat_delete(key)
			return Boolean(false)
		}

		if (err.indexOf('code 400') !== -1) {
			error_msg(message || '400 error')
			return Boolean(false)
		}

		if (err.indexOf('code 500') !== -1) {
			error_msg(message || '500 error')
			return Boolean(false)
		}

		if (err.indexOf('code 503') !== -1) {
			error_msg(message || '503 error')
			return Boolean(false)
		}

		if (err.indexOf('code 401') !== -1) {
			error_msg(message || '401 error')
			go_logion()
			return Boolean(false)
		}

		if (err.indexOf('code 403') !== -1) {
			// 服务器错误信息回应
			error_msg(message || '403 error')
			return Boolean(false)
		}

		if (err.indexOf('Error') !== -1) {
			repeat_clear()
			error_msg(message || '网络异常')
			return Boolean(false)
		}

		return Promise.reject(error)
	}
)

export default requestAction
