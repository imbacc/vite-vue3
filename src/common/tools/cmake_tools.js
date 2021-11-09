// 克隆
export const clone = (obj) => {
	let o = obj instanceof Array ? [] : {}
	for (let k in obj) o[k] = typeof obj[k] === Object ? clone(obj[k]) : obj[k]
	return o
}

// 到时间隐藏
export const timeHide = (time = 300) => {
	return new Promise((resovle) => {
		let t = setTimeout(() => {
			clearTimeout(t)
			resovle()
		}, time)
	})
}
	