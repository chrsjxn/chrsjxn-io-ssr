<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/CodeSplittingInSvelte.md';

	import { posts } from '$lib/modules/posts';

	const nextIndex = posts.findIndex(({ path }) => path === '/svelte/code-splitting') + 1;
</script>

<svelte:head>
	<title>chrsjxn.io - Building a blog with Svelte: Code splitting</title>
	<meta
		name="description"
		content="This post explains how to add code splitting with rollup to a Svelte blog, for better performance and caching!"
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink nextPost={posts[nextIndex]} />
