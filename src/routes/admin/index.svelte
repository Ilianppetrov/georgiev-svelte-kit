<script context="module">
	import { onMount } from 'svelte';
	import Auth from './Auth.svelte';
	import Articles from './Articles.svelte';
	import { user } from '../../store';
	import { supabase } from '../../supabaseClient';
	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div class="container" style="padding: 50px 0 100px 0;">
	{#if $user}
		<Articles />
	{:else}
		<Auth />
	{/if}
</div>

<!-- <button on:click={onClick}>save</button> -->
<style>
	#editor {
		background: #fff;
	}
</style>
