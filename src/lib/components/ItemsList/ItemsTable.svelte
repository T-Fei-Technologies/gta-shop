<script lang="ts">
	import Item from './Item.svelte';
	import 'iconify-icon';
	import { AppStore, type Item as ItemType } from '$lib/stores/AppStore';
	import ItemAdd from '$lib/components/ItemsList/ItemAdd.svelte';
	import { createNewItem } from '$lib/createNewItem';
	import { onMount } from 'svelte';

	let newItem = createNewItem();
	let inputRef: HTMLElement;

	const onAdd = (item: ItemType) => {

		$AppStore.Items = [...$AppStore.Items, item];
		newItem = createNewItem();
		inputRef.focus();
	}

	const onRemove = (id: string) => {
		$AppStore.Items = $AppStore.Items.filter(item => item.id !== id);
	}
</script>

<div class="card">
	<header class="card-header h3 font-bold">Work Orders</header>
	<section class="p-4">
		<ItemAdd item={newItem} {onAdd} {inputRef} />
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
