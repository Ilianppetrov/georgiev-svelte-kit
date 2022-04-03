<script lang="ts">
	import Button from './common/Button.svelte';
	export let title;
	export let description = '';
	export let buttonLabel;
	export let href;
</script>

<div>
	<h3>{title}</h3>
	<p>{description}</p>
	<Button>
		<a {href}>
			{buttonLabel}
		</a>
	</Button>
</div>

<style>
	div {
		width: 200px;
		height: 220px;
		margin: 20px 0;
		background: white;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		transition: transform 0.5s ease-in-out;
	}

	div:hover {
		background: #0075ff;
		color: #fff;
		/* height: 240px; */
		transform: scale(1.2);
	}

	div:hover > button {
		color: red;
	}
</style>
