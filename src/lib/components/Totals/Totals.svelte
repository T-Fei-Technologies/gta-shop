<script lang="ts">
	import 'iconify-icon';
	import { AppStore } from '$lib/stores/AppStore';
	import { currencyFormatter } from '$lib/formatters';

	let percentage = $AppStore.percentage;
	$: subtotal = $AppStore.Items.reduce((acc, item) => acc + item.price, 0);
	$: total = subtotal * (1 + ($AppStore.percentage) / 100);
</script>

<div class="card">
	<header class="card-header h3 font-bold">Total</header>
	<section class="flex flex-col items-end justify-between gap-2 p-4">
		<div class="flex justify-between w-full">
			<span>Sub Total</span>
			<span>{currencyFormatter.format(subtotal)}</span>
		</div>

		<div class="grid grid-cols-[1fr_auto] w-full gap-4">
			<p>Percentage</p>
			<div class="flex">
				<input type="text" class="input text-right pr-2 mr-1" bind:value={percentage} />%
			</div>
		</div>

		<div class="flex justify-between w-full">
			<span>Total</span>
			<span>{currencyFormatter.format(total)}</span>
		</div>
	</section>
</div>
