<script lang="typescript">
	// @ts-ignore
	import Card from '../components/Card/index.svelte'
	let title: string = "Typescript"
	export const cards = [
		{
			title: "Github",
			img: "https://via.placeholder.com/50"
		},
		{
			title: "Twitter",
			img: "https://via.placeholder.com/50"
		},
		{
			title: "Music",
			img: "https://via.placeholder.com/50"
		},
		{
			title: "Insta",
			img: "https://via.placeholder.com/50"
		}
	]
</script>

<style>
	.card-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1em;
		width: 100%;
		margin: 0;
		height: 50vh;
	}

</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="card-container">
	{#each cards as card }
		<Card {...card}/>
	{/each}
</div>