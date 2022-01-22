<script context="module">
	export const prerender = true;
</script>

<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/WritingCodeReviewFeedback.md';

	export let nextPost = null;
</script>

<svelte:head>
	<title>chrsjxn.io - Do's and don't's of writing code review feedback</title>
	<meta
		name="description"
		content="Writing good PR feedback is hard. Here's a list of tips for more empathetic and effective feedback."
	/>
</svelte:head>

<MarkdownPost markdown={html} />
<NextPostLink {nextPost} />
