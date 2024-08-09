<script lang="ts">
	import 'iconify-icon';
	import { AppStore } from '$lib/stores/AppStore';
	import { currencyFormatter } from '$lib/formatters';

	let percentage = $AppStore.percentage;
	$: subtotal = $AppStore.Items.reduce((acc, item) => acc + item.price, 0);
	$: total = subtotal * (1 + ($AppStore.percentage) / 100);
</script>

<div class="card flex flex-col">
	<header class="card-header h3 font-bold">Total</header>
	<section class="flex flex-col items-end justify-between gap-2 p-4 flex-1">
		<div class="flex justify-between w-full">
			<span>Sub Total</span>
			<span>{currencyFormatter.format(subtotal)}</span>
		</div>
		<div class="flex flex-col md:flex-row gap-4 w-full">
			<p>Percentage</p>
			<div class="input-group input-group-divider grid-cols-[1fr_auto]">
				<input type="text" class="text-right" bind:value={percentage} />
				<span class="input-group-shim px-2">%</span>
			</div>
		</div>
		<div class="flex justify-between w-full">
			<span>Total</span>
			<span>{currencyFormatter.format(total)}</span>
		</div>
	</section>
</div>
