<script lang="ts">
	import 'iconify-icon';
	import type { Item } from '$lib/stores/AppStore';


export let item: Item;
export let onAdd: (item: Item) => void;
</script>

<div class="card">
	<form class="grid grid-cols[1fr] md:grid-cols-[3fr_1fr_auto] gap-4 p-4" on:submit={() => onAdd(item)}>
		<div>
			<p>Item</p>
			<input type="text" class="input px-2" bind:value={item.name} />
		</div>
		<div>
			<p>Price</p>
			<div class="input-group input-group-divider grid-cols-[auto_1fr]">
				<div class="input-group-shim">$</div>
				<input type="text" bind:value={item.price} />
			</div>
		</div>
		<button
			type="submit"
			class="btn variant-filled self-end w-full"
		>
			<iconify-icon icon="mingcute:add-fill" title="Add Item"></iconify-icon>
		</button>
	</form>
</div>
