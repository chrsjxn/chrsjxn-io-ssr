<script context="module">
	export const prerender = true;
</script>

<script>
	import Link from '../lib/Link.svelte';
	import { categories, sortedPosts } from '../lib/modules/posts';
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
