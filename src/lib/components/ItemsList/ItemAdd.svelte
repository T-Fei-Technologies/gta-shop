<script lang="ts">
	import 'iconify-icon';
	import type { Item } from '$lib/stores/AppStore';


export let item: Item;
export let onAdd: (item: Item) => void;
export let inputRef: HTMLElement;

const onAddItem = (event: SubmitEvent) => {
	event.preventDefault();

	onAdd({
		id: item.id,
		name: item.name,
		price: +item.price,
	});
}
</script>

<div class="card">
	<form class="grid grid-cols[1fr] md:grid-cols-[3fr_1fr_auto] gap-4 p-4" on:submit={onAddItem}>
		<div>
			<p>Item</p>
			<input type="text" class="input px-2" bind:this={inputRef} bind:value={item.name} />
		</div>
		<div>
			<p>Price</p>
			<div class="input-group input-grop-divider grid-cols-[auto_1fr]">
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
