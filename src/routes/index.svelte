<script>
	import { goto } from '$app/navigation';
	import Hero from '$src/components/Hero.svelte';
	import Section1 from '$components/Section1.svelte';
	import Section2 from '$components/Section2.svelte';
	import Biography from '$components/Biography.svelte';

	import { user } from '$src/store';
	import { supabase } from '$src/supabaseClient';
	import Contacts from '$components/Contacts.svelte';

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
		goto('/admin');
	});
</script>

<Hero />
<Section1 />
<Section2 />
<Biography />
<Contacts />
