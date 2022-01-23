<script>
	import { theme, cycleTheme, nextTheme, removeOSThemeListener } from '$lib/stores/theme';
	import { browser } from '$app/env';

	const cycleAndPersistTheme = () => {
		if (browser) {
			window.localStorage.setItem('theme', nextTheme($theme).name);
			removeOSThemeListener();
			cycleTheme();
		}
	};

	const defaultTheme = {
		name: 'full',
		icon: '🌕'
	};
</script>

<button on:click={cycleAndPersistTheme} aria-label="Toggle theme">{$theme?.icon}</button>

<style>
	button {
		border: none;
		background: none;
		padding: 0 16px;
	}

	@media (prefers-reduced-motion: no-preference) {
		button:active {
			transform: scale(0.95);
		}
	}
</style>
