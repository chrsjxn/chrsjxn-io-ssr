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
</script>

<button on:click={cycleAndPersistTheme} aria-label="Toggle theme">{$theme.icon}</button>

<style>
	button {
		border: solid 1px var(--accent-color);
		border-radius: 4px;
		background: none;
		padding: 8px 16px;
	}

	@media (prefers-reduced-motion: no-preference) {
		button:active {
			transform: scale(0.95);
		}
	}
</style>
