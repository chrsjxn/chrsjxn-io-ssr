<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/CodeSplittingInSvelte.md';

	export let nextPost = null;
</script>

<MarkdownPost markdown={html} />
<NextPostLink {nextPost} />
