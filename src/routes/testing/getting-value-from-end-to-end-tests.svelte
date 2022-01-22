<script>
	import { MarkdownPost, NextPostLink } from '$lib';
	import { html } from '$lib/markdown/GettingValueFromE2ETests.md';

	import { posts } from '$lib/modules/posts';

	const nextIndex =
		posts.findIndex(({ path }) => path === '/testing/getting-value-from-end-to-end-tests') + 1;
</script>

<MarkdownPost markdown={html} />
<NextPostLink nextPost={posts[nextIndex]} />
