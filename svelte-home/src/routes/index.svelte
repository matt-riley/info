<script lang="typescript">
	export let title: string = "Hello Typescript"
</script>

<style>
	h1 {
		margin: 0;
		padding: 0;
	}
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>