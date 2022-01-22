import netlify from '@sveltejs/adapter-netlify';

import { Mode, plugin as markdown } from 'vite-plugin-markdown'
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import hljsSvelte from 'highlightjs-svelte'
import MarkdownIt from 'markdown-it'
import Anchor from 'markdown-it-anchor'
import { replaceCodePlugin } from "vite-plugin-replace"

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)

hljsSvelte(hljs)

const markdownIt = new MarkdownIt({
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(str, { language: lang }).value
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error('Failed to highlight string')
			}
		}

		return '' // use external default escaping
	},
}).use(Anchor, {
	slugify: (str) =>
		str
			.replace(/[^a-zA-Z-_ ]/g, '')
			.toLowerCase()
			.split(' ')
			.join('-'),
})

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: netlify({ split: false }),
		vite: {
			plugins: [
				markdown({
					mode: Mode.HTML,
					markdownIt
				}),
				replaceCodePlugin({
					replacements: [{
						from: "__img_path__",
						to: "images"
					}]
				})
			]
		}
	},
};

export default config;
