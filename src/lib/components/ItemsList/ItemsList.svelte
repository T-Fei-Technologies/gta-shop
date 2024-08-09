<script lang="ts">
	import Item from './Item.svelte';
	import 'iconify-icon';
	import { AppStore, type Item as ItemType } from '$lib/stores/AppStore';
	import ItemAdd from '$lib/components/ItemsList/ItemAdd.svelte';
	import { createNewItem } from '$lib/createNewItem';

	let newItem = createNewItem();

	const onAdd = (item: ItemType) => {
		$AppStore.Items = [...$AppStore.Items, item];
		newItem = createNewItem();
	}

	const onRemove = (id: string) => {
		$AppStore.Items = $AppStore.Items.filter(item => item.id !== id);
	}
</script>

<div class="card">
	<header class="card-header h3 font-bold">Items</header>
	<section class="p-4">
		<ItemAdd item={newItem} {onAdd} />
		{#if $AppStore.Items.length === 0}
			<p class="text-center mt-4">No Items</p>
		{/if}
		{#if $AppStore.Items.length > 0}
			<ul class="list">
				{#each $AppStore.Items as item (item.id)}
					<Item {item} {onRemove} />
				{/each}
			</ul>
		{/if}
	</section>
</div>
