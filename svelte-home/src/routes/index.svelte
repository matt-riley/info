<script lang="typescript">
	// @ts-ignore
	import Card from '../components/Card/index.svelte'
	let title: string = "Matt Riley (dot) Info"
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
	.wrapper {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		height: 100%;
		overflow: hidden;
	}
	.card-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1em;
		width: 100%;
		margin: 0;
		height: 35vh;
		align-self: flex-end;
		margin-bottom: 1em;
	}

</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="wrapper">
	<header class="header">
		<h1>PLACEHOLDER</h1>
		<p>Software Engineer in Leeds, UK.</p>
	</header>
	<div class="card-container">
		{#each cards as card }
			<Card {...card}/>
		{/each}
	</div>
</div>