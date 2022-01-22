<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/SvelteThemeStore.md';

	export let nextPost = null;
</script>

<svelte:head>
	<title>chrsjxn.io - Building a simple theme store with Svelte</title>
	<meta
		name="description"
		content="A quick example of using Svelte stores to implement light and dark theme toggling!"
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink {nextPost} />
