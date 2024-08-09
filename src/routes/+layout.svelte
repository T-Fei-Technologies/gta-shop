<script lang="ts">
	import '../app.postcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar><h1 class="h1">Stellar Shop</h1></AppBar>
	</svelte:fragment>

	<article class="container flex flex-col gap-4 items-center justify-center p-8">
		<slot />
	</article>

</AppShell>
