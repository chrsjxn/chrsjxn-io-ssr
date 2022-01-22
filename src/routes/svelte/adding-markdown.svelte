<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/AddingMarkdownToSvelte.md';

	import { posts } from '$lib/modules/posts';

	const nextIndex = posts.findIndex(({ path }) => path === '/svelte/adding-markdown') + 1;
</script>

<svelte:head>
	<title>chrsjxn.io - Building a blog with Svelte: Adding Markdown</title>
	<meta
		name="description"
		content="Markdown helps generate HTML content without managing all the tags. This post describes how to add a markdown rendering component to a svelte blog!"
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink nextPost={posts[nextIndex]} />
