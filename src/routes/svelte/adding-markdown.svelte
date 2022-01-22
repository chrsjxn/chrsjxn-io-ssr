<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/AddingMarkdownToSvelte.md';

	export let nextPost = null;
</script>

<svelte:head>
	<title>chrsjxn.io - Building a blog with Svelte: Adding Markdown</title>
	<meta
		name="description"
		content="Markdown helps generate HTML content without managing all the tags. This post describes how to add a markdown rendering component to a svelte blog!"
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink {nextPost} />
