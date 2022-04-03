<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { supabase } from '$src/supabaseClient';
	import { goto } from '$app/navigation';

	// export let data: EditorConfig['data'] = [];

	let editor;
	let title;

	onMount(async () => {
		let articlesId = $page.url.searchParams.get('id');

		let data = [];

		if (articlesId) {
			let { data: article, error } = await supabase
				.from('Articles')
				.select('*')
				.eq('id', articlesId);

			data = article[0].data;
			title = article[0].name;
		}

		let { default: EditorJS } = await import('@editorjs/editorjs');
		let { default: Header } = await import('@editorjs/header');
		let { default: List } = await import('@editorjs/list');
		let { default: Delimiter } = await import('@editorjs/delimiter');
		const config = {
			autofocus: true,
			holder: 'editor',
			tools: {
				header: Header,
				list: List,
				delimiter: Delimiter
			},
			data: {
				blocks: data
			}
		};

		editor = new EditorJS(config);
	});

	async function onClick(e) {
		console.log(editor);
		let { blocks } = await editor.save();
		await supabase.from('Articles').upsert({ data: blocks, name: title });
		goto('/admin');
	}
</script>

<input type="text" bind:value={title} />
<div id="editor" />
<button on:click={onClick}> save </button>

<style>
	div {
		background: #fff;
	}
</style>
