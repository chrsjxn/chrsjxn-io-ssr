<script>
	import hljs from 'highlight.js/lib/core';
	import bash from 'highlight.js/lib/languages/bash';
	import javascript from 'highlight.js/lib/languages/javascript';
	import css from 'highlight.js/lib/languages/css';
	import hljsSvelte from 'highlightjs-svelte/dist/index.js';
	import 'highlight.js/styles/a11y-light.css';

	hljs.registerLanguage('bash', bash);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('css', css);

	hljsSvelte(hljs);

	export let markdown = '';
</script>

<!-- Render with the `@html` directive -->
{@html markdown}
