<script>
	import mainImage from '../../static/main-image.png';
	import Button from './common/Button.svelte';
</script>

<section>
	<div class="content">
		<h1>Д-р Николай Георгиев</h1>
		<div>Специалист гастроентеролог</div>
		<div>
			Д-р Николай Георгиев е специалист гастроентеролог във Варна с над 10 години опит и интереси в
			областта на ултразвукова и ендоскопска диагностика на гастроинтестиналния тракт и
			интервенционалната ендоскопия, диагностика, терапия и спешна ендоскопска хемостаза при остри
			кръвоизливи на ГИТ, премахване на полипи по хода на ГИТ, дилатация на стенотични участъци,
			диагностика и лечение на болести свързани с черен дроб и панкреас и др.
		</div>
		<Button class="button">Запази час</Button>
	</div>
	<img src={mainImage} alt="main image" />
</section>

<style>
	section {
		display: flex;
		justify-content: space-between;
		padding: 50px 0;
		gap: 30px;
	}

	section :global(.button) {
		padding: 15px 23px;
		border-radius: 25px;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-evenly;
	}
</style>
