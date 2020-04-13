<script>
	// @ts-ignore: No default export
	import Nav from '../components/Nav/index.svelte'

	export let segment;
</script>

<style>
	main {
		position: relative;
		display: grid;
		grid-template-columns: 10vw 2fr;
		min-height: 100vh;
		grid-column-gap: .5em;
		padding-right: .5em;
	}

	wrapper {
		padding-top: 1rem;
	}
</style>

<main>
	<Nav />
	<wrapper>
		<slot></slot>
	</wrapper>
</main>