<script>
	import Link from './Link.svelte';
	export let nextPost = null;
</script>

{#if nextPost}
	<div class="text-m mb-10">
		<Link href={nextPost.path}>
			<b>Continue reading:</b><br /><span class="title"
				>{nextPost.title}
				({nextPost.date})</span
			>
		</Link>
	</div>
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
