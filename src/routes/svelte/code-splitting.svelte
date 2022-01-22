<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/CodeSplittingInSvelte.md';

	export let nextPost = null;
</script>

<svelte:head>
	<title>chrsjxn.io - Building a blog with Svelte: Code splitting</title>
	<meta
		name="description"
		content="This post explains how to add code splitting with rollup to a Svelte blog, for better performance and caching!"
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink {nextPost} />
