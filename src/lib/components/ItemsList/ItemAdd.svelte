<script lang="ts">
	import 'iconify-icon';
	import type { Item } from '$lib/stores/AppStore';


	export let item: Item;
	export let onAdd: (item: Item) => void;
	export let inputRef: HTMLElement;

	const onAddItem = (event: SubmitEvent) => {
		event.preventDefault();

		onAdd({
			id:    item.id,
			name:  item.name,
			price: +item.price
		});
	};
</script>

<form class="flex items-end gap-4" on:submit={onAddItem}>
	<div>
		<p>Work Order #</p>
		<input type="text" class="input px-2" bind:this={inputRef} bind:value={item.name} required />
	</div>
	<div class="text-right">
		<p>Amount Paid</p>
		<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] max-w-32">
			<div class="input-group-shim">$</div>
			<input type="number" bind:value={item.price} class="pl-2" required />
		</div>
	</div>
	<div>
		<button type="submit" class="btn variant-filled">
			<iconify-icon icon="mingcute:add-fill" title="Add Work Order"></iconify-icon>
		</button>
	</div>
</form>
