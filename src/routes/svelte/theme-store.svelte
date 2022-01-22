<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/SvelteThemeStore.md';

	import { posts } from '$lib/modules/posts';

	const nextIndex = posts.findIndex(({ path }) => path === '/svelte/theme-store') + 1;
</script>

<svelte:head>
	<title>chrsjxn.io - Building a simple theme store with Svelte</title>
	<meta
		name="description"
		content="A quick example of using Svelte stores to implement light and dark theme toggling!"
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink nextPost={posts[nextIndex]} />
