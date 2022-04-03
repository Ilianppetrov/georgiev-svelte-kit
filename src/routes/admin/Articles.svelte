<script lang="ts">
	import type { Article } from '$src/models.td';
	import ArticleCard from '$src/components/ArticleCard.svelte';

	import { supabase } from '../../supabaseClient';

	async function getArticles() {
		let { data, error } = await supabase.from<Article>('Articles').select('id, name');

		return { data, error };
	}
</script>

<div class="container">
	<h1>Articles</h1>
	{#await getArticles()}
		<p>...loading</p>
	{:then { data }}
		<div class="articles">
			{#each data as { id, name }, i}
				<ArticleCard {...{ title: name, buttonLabel: 'Edit', href: `/admin/editor?id=${id}` }} />
				<!-- <div class="article">
					<span>{name}</span>
					<a href={`/admin/editor?id=${id}`}> Edit </a>
				</div> -->
			{/each}
			<li>
				<a href={`/admin/editor`}> add new article </a>
			</li>
		</div>
	{:catch error}
		<p style="color: red">{error}</p>
	{/await}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.articles {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		gap: 10px;
	}
</style>
