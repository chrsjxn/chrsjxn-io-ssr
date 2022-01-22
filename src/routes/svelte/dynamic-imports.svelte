<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/DynamicImportsForSvelteComponents.md';

	export let nextPost = null;
</script>

<svelte:head>
	<title>chrsjxn.io - Building a blog with Svelte: Dynamic imports for Svelte components</title>
	<meta
		name="description"
		content="Dynamically importing components can help reduce JS bundle sizes. This blog post explains how I used it with Svelte!"
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink {nextPost} />
