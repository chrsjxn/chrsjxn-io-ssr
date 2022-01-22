<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/DynamicImportsForSvelteComponents.md';
	import { posts } from '$lib/modules/posts';

	const nextIndex = posts.findIndex(({ path }) => path === '/svelte/dynamic-imports') + 1;
</script>

<svelte:head>
	<title>chrsjxn.io - Building a blog with Svelte: Dynamic imports for Svelte components</title>
	<meta
		name="description"
		content="Dynamically importing components can help reduce JS bundle sizes. This blog post explains how I used it with Svelte!"
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink nextPost={posts[nextIndex]} />
