<script>
	export let type = 'primary';
</script>

<button class={`${type} ${$$props.class}`}>
	<slot />
</button>

<style>
	button {
		border: 0;
		cursor: pointer;
		border-radius: 25px;
		padding: 8px 12px;
		box-shadow: 0px 0px 5px -2px #000000;
		min-width: 140px;
		border-radius: 20px;

		font-family: Raleway;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0em;
		text-align: center;
	}

	.primary {
		background: #0075ff;
		color: #fff;
	}

	/* .primary:hover {
		color: #0075ff;
	} */

	.secondary {
		box-shadow: 0px 5px 20px rgba(5, 61, 118, 0.05);
		background: #fff;
		color: #000;
	}
</style>
