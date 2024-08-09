<script lang="ts">
	import 'iconify-icon';
	import { type Item } from '$lib/stores/AppStore';
	import { currencyFormatter } from '$lib/formatters';


	export let item: Item;
	export let onRemove: (id: string) => void;
</script>

<li class="card p-4 flex flex-col items-center justify-between gap-4">
	<div class="grid grid-cols-[1fr_1fr_auto] gap-4 w-full text-left">
		<div class="w-full">
			<p>Item</p>
			{item.name}
		</div>
		<div class="w-full">
			<p>Price</p>
			{currencyFormatter.format(item.price)}
		</div>
		<button type="button" class="btn variant-ghost-error self-end" on:click={() => onRemove(item.id)}>
			<iconify-icon icon="ion:trash" title={`Delete ${item.name}`} />
		</button>
	</div>
</li>
