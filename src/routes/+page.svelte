<script>
	import ItemsTable from '$lib/components/ItemsList/ItemsTable.svelte';
	import Totals from '$lib/components/Totals/Totals.svelte';
</script>

<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
	<ItemsTable />
	<Totals />
</section>
