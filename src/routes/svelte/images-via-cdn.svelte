<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/CloudinarySupport.md';

	export let nextPost = null;
</script>

<svelte:head>
	<title>chrsjxn.io - Building a blog with Svelte: Fetching images via CDN</title>
	<meta
		name="description"
		content="Unoptimized images are a much heavier cost during page load than our JS bundle. This blog post covers how to integrate with Cloudinary for better image performance!"
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink {nextPost} />
