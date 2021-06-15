<script context="module">
	export const prerender = true;
</script>

<script>
	import Polaroid from '$lib/Polaroid.svelte';
	import MarkdownPost from '$lib/MarkdownPost.svelte';
	import NextPostLink from '$lib/NextPostLink.svelte';
	import markdown from '$lib/markdown/PolaroidDemo';

	export let nextPost = null;
</script>

<h1>Polaroid demo</h1>
<div class="demo-container">
	<div>
		<Polaroid src="/images/raven.jpg" alt="Raven" effect="drama">Yellowstone 08/31/2015</Polaroid>
	</div>
	<div style="transform: rotate(1deg);">
		<Polaroid src="/images/gull.jpg" alt="Gull" effect="vignette">Marin 03/26/2016</Polaroid>
	</div>
	<div style="transform: rotate(-2deg);">
		<Polaroid src="/images/profile.jpg" alt="Developer self portrait" effect="drama">
			SF 11/01/2020
		</Polaroid>
	</div>
	<div style="transform: rotate(5deg);">
		<Polaroid
			src="/images/orange.jpg"
			alt="SF with orange sky due to wildfire smoke"
			effect="vignette"
		>
			SF 09/09/2020
		</Polaroid>
	</div>
</div>

<MarkdownPost {markdown} />
<NextPostLink {nextPost} />

<style global>
	.demo-container {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap-reverse;
		justify-content: center;
		margin-bottom: 20px;
	}
</style>
