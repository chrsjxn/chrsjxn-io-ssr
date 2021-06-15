<script>
	export let external = false;
	export let externalIndicator = true;
	export let href = '';
</script>

<a {href} rel={external ? 'noreferrer noopener' : null} target={external ? '_blank' : null}
	><slot />{#if external && externalIndicator}
		{' '}(↗️)
	{/if}</a
>

<style>
	a {
		color: var(--accent-color-2);
		text-decoration: none;
		font-weight: bold;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
