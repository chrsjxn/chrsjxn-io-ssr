<script context="module">
	export const prerender = true;
</script>

<script>
	import Link from '../lib/Link.svelte';
	import { posts } from '../modules/posts';
</script>

<h1>Writing</h1>
<ul>
	{#each posts as post}
		<li class="post">
			<Link href={post.path}>{post.title}</Link>
			({post.date})
		</li>
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
