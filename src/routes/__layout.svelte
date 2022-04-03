<script>
	// import Header from '$components/Header.svelte';
	import Navigation from '$components/Navigation/Nav.svelte';
</script>

<div id="base-wave" />
<div id="base-wave-extention" />
<div id="top-waves" />

<div class="container">
	<!-- <Header /> -->
	<div>
		<Navigation />
		<slot />
	</div>
</div>

<style>
	.container {
		height: 100%;
		max-width: 1070px;
		margin: auto;
		z-index: 2;
		position: relative;
	}

	#top-waves {
		position: absolute;
		top: 0;
		width: 100%;
		min-width: 1440px;
		min-height: 390px;
		aspect-ratio: 1440/390;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url('/top-waves.svg');
		z-index: 1;
	}

	#base-wave {
		position: absolute;
		top: 0;
		width: 100%;
		height: 690px;
		min-width: 1440px;
		background: #ebf5ff;
		z-index: 1;
	}

	#base-wave-extention {
		z-index: 1;
		position: absolute;
		top: 690px;
		left: 0;
		width: 100%;
		min-width: 1440px;
		min-height: 256px;
		aspect-ratio: 1440/256;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url('/base-wave-extention.svg');
	}
</style>
