<script>
	import Link from './Link.svelte';
	export let nextPost = null;
</script>

{#if nextPost}
	<Link href={nextPost.path}>
		<b>Continue reading:</b><br /><span class="title"
			>{nextPost.title}
			({nextPost.date})</span
		>
	</Link>
{/if}

<style>
	.title {
		color: var(--primary-color);
	}

	@media print {
		div {
			display: none;
		}
	}
</style>
