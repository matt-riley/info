<script lang="typescript">
	// @ts-ignore: No default export
	import Nav from '../components/Nav.svelte'

	export let segment;
</script>

<style>
	main {
		position: relative;
		display: grid;
		grid-template-columns: 10vw 2fr;
		min-height: 100vh;
		grid-column-gap: 1em;
	}

	wrapper {
		padding-top: 1rem;
	}
</style>

<main>
	<Nav {segment}/>
	<wrapper>
		<slot></slot>
	</wrapper>
</main>