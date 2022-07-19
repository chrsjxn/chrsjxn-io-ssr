<script context="module">
	export const prerender = true;
</script>

<script>
	import Link from '../lib/Link.svelte';
	import { posts } from '../lib/modules/posts';

	const sortedPosts = {};
	const categories = []

	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		const category = post.category;

		if (sortedPosts[category] === undefined) {
			sortedPosts[category] = [];
			categories.push(category);
		}

		sortedPosts[category].push(post);
	}
</script>

<svelte:head>
	<title>chrsjxn.io - Writing</title>
</svelte:head>

<h1>Writing</h1>
<ul>
	{#each categories as category}
	  <h2>{category}</h2>
		{#each sortedPosts[category] as post}
			<li class="post">
				<Link href={post.path}>{post.title}</Link>
				({post.date})
			</li>
		{/each}
	{/each}
</ul>

<style>
	li {
		list-style-position: outside;
		line-height: 2em;
	}

	li.post {
		list-style-type: '📓 ';
	}
</style>
