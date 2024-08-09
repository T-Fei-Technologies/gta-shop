<script>
	import ItemsList from '$lib/components/ItemsList/ItemsList.svelte';
	import Totals from '$lib/components/Totals/Totals.svelte';
</script>

<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<ItemsList />
	<Totals />
</section>
