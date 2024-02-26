<script>
	import { IconSquareX } from '@tabler/icons-svelte';
	export let showMenu = false;
</script>

<div class="side-menu p-5" class:open={showMenu}>
	<div class="flex">
		<div class="flex-auto" />
		<div>
			<button on:click={() => (showMenu = !showMenu)}><IconSquareX /></button>
		</div>
	</div>
	<slot />
</div>
