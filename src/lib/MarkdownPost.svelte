<script>
	import hljs from 'highlight.js/lib/core';
	import bash from 'highlight.js/lib/languages/bash';
	import javascript from 'highlight.js/lib/languages/javascript';
	import css from 'highlight.js/lib/languages/css';
	import hljsSvelte from 'highlightjs-svelte/dist/index.js';
	import 'highlight.js/styles/a11y-light.css';
	import MarkdownIt from 'markdown-it';
	import Anchor from 'markdown-it-anchor';

	import { beforeUpdate } from 'svelte';

	hljs.registerLanguage('bash', bash);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('css', css);

	hljsSvelte(hljs);

	export let markdown = '';

	const md = new MarkdownIt({
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(lang, str).value;
				} catch (e) {
					// eslint-disable-next-line no-console
					console.error('Failed to highlight string');
				}
			}

			return ''; // use external default escaping
		}
	}).use(Anchor, {
		slugify: (str) =>
			str
				.replace(/[^a-zA-Z-_ ]/g, '')
				.toLowerCase()
				.split(' ')
				.join('-')
	});

	let rendered = '';

	beforeUpdate(() => {
		rendered = md.render(markdown);
	});
</script>

<!-- Render with the `@html` directive -->
{@html rendered}
