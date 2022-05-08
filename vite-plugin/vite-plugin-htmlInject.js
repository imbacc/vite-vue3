import html from 'vite-plugin-html'
import { resolve } from 'path'

const env = process.env
const is_dev = env.NODE_ENV === 'development'
const path = '.'

// inject
const title = env.VITE_GLOB_APP_TITLE
const injectHeader = `<link defer="defer" href="${path}/inject-test.css" />`
const injectScript = `<script crossorigin defer="defer" type="text/javascript" src="${path}/inject-test.js"></script>`

export default () => {
	return html({
		inject: {
			injectData: {
				title,
				injectHeader,
				injectScript
			}
		},
		minify: true
	})
}
