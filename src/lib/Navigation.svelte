<script>
	import Link from './Link.svelte';
	import ThemePicker from './ThemePicker.svelte';
	import { browser } from '$app/env';

	const toggleTerminal = () => {
		if (browser) {
			const cl = document.getElementById('svelte').classList;
			if (cl.contains('terminal')) {
				cl.remove('terminal');
			} else {
				cl.add('terminal');
			}
		}
	};
</script>

<nav>
	<div class="left-nav">
		<Link href="/">Home</Link>
	</div>
	<div class="right-nav">
		<Link href="/about">About</Link>
		<ThemePicker />
		<button on:click={toggleTerminal}>💻</button>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		font-weight: bolder;

		padding: 16px 0;
	}

	.right-nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
	}

	@media print {
		nav {
			display: none;
		}
	}

	button {
		border: solid 1px var(--accent-color);
		border-radius: 4px;
		background: none;
		padding: 8px 16px;
	}
</style>
