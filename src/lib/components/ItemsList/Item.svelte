<script lang="ts">
	import 'iconify-icon';
	import { type Item } from '$lib/stores/AppStore';
	import { currencyFormatter } from '$lib/formatters';


	export let item: Item;
	export let onRemove: (id: string) => void;
</script>

<li class="card p-4 flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
	<div class="flex w-full">
		<div class="w-full">
			<p>Work Order #</p>
			{item.name}
		</div>
		<div class="w-full text-right">
			<p>Amount Paid</p>
			{currencyFormatter.format(item.price)}
		</div>
	</div>
	<button type="button" class="btn variant-ghost-error self-end" on:click={() => onRemove(item.id)}>
		<iconify-icon icon="ion:trash" title={`Delete ${item.name}`} />
	</button>
</li>
