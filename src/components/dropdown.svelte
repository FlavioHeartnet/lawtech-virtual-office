<script>
	// @ts-nocheck
	import Select from 'svelte-select';
	export let selecteditems = [];
	export let clients = [];
	export let name = '';
	export let multiple = true;
</script>

<Select
	{name}
	bind:value={selecteditems}
	{multiple}
	items={clients}
	placeholder={'Selecione um item'}
	class="rounded border-2 py-2.5 px-3"
/>
