<script>
	import Logo from './logo.svelte'
	let items = [
		{ id: 1, name: 'Home', url: "/"},
		{ id: 2, name: 'About', url: '/about'},
	]
</script>

<style>
	nav {
		background: #333;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em 0;
		justify-content: space-between;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style: none;
		width: 100%;
	}

	li {
		border-bottom: 1px solid #fff;
		padding: 1em 0;
		width: 90%;
		text-align: right;
	}

	li:first-of-type {
		border-top: #fff solid 1px;
	}

	a {
		text-decoration: none;
		font-weight: 700;
		text-transform: uppercase;
		font-synthesis: weight;
		margin: 0px; 
		display: block; 
		width: 100%; 
		height: 100%; 
	}
</style>

<nav>
	<Logo />
	<ul>
		{#each items as item}
			<li><a href={item.url}>{item.name}</a></li>
		{/each}
	</ul>
</nav>
