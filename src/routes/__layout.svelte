<script>
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>

<div class="center-content">
	<Navigation />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	main {
		min-width: 30ch;
	}

	.center-content {
		margin: auto;
		width: clamp(20ch, 75%, 80ch);
		padding-bottom: 60px;
	}
</style>
