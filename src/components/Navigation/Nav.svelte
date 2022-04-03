<script>
	import MobileView from './MobileView.svelte';
	import Button from '$src/components/common/Button.svelte';
	import { page } from '$app/stores';
	console.log($page);
</script>

<nav>
	<div class="name">Д-р Николай Георгиев</div>
	<ul>
		<li class:active={$page.url.pathname === '/'}>
			<a href="/">Начало</a>
		</li>
		<li class:active={$page.url.pathname === '/articles'}>
			<a href="/articles">За Пациента</a>
		</li>
		<li>
			<a
				href="https://superdoc.bg/lekar/nikolay-georgiev?fbclid=IwAR38hBrLN0TioI-gwT5wngVNaewR_WuSiPlAOVPMmcQs3pbvzqHPrfyik5c"
			>
				<Button class="button">Запази час</Button>
			</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30px 50px 30px 0px;
		color: #053d76;
	}

	nav :global(.button) {
		font-size: 14px !important;
	}

	.name {
		font-family: Raleway;
		font-size: 18px;
		font-weight: 600;
		font-style: normal;
		line-height: 21px;
		letter-spacing: 0em;
		text-align: left;
	}

	ul {
		list-style-type: none;
		display: flex;
		align-items: center;
		gap: 40px;
	}

	a {
		text-decoration: none;
		font-family: Raleway;
		font-size: 14px;
		font-weight: 600;
		font-style: normal;
		line-height: 20px;
		letter-spacing: 0em;
		text-align: left;
	}

	li {
		position: relative;
	}

	.active::after {
		content: '';
		position: absolute;
		bottom: -14px;
		width: 5px;
		height: 5px;
		border-radius: 5px;
		background: #0075ff;
		left: 50%;
	}
</style>
