<script context="module">
	export const prerender = true;
</script>

<script>
	import Link from '../lib/Link.svelte';
	import Polaroid from '../lib/Polaroid.svelte';
</script>

<svelte:head>
	<title>chrsjxn.io - About</title>
</svelte:head>

<h1>Chris Jackson <span class="pronouns">(he/they)</span></h1>
<div class="polaroid-wrapper">
	<Polaroid src="/images/githubProfile.jpg" alt="self portrait, github profile pic" disableFilter>
		Hello!
	</Polaroid>
</div>
<p>
	I am a Staff Software Engineer, focused on web technology, tooling, and performance. Formerly:
	DoorDash, Zendesk.
</p>
<p>I love code review, with an emphasis on useful and empathetic feedback.</p>
<p>I believe diverse voices improve products, teams, and the world.</p>
<p>
	Find me elsewhere:
	<Link href="https://github.com/chrsjxn" external>github</Link>
	-
	<Link href="https://twitter.com/c_jackson_js" external>twitter</Link>
</p>

<style>
	.pronouns {
		font-size: 14pt;
	}

	.polaroid-wrapper {
		transform: rotate(1deg);
	}
</style>
