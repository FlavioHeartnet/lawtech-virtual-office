<script>
	export let name;
	export let placeholder;
	export let value = '';
	export let label = '';
	export let required = false;
</script>

<div class="w-full">
	<label class="font-bold ml-1" for={name}>{label}</label>
	<input
		id={name}
		bind:value
		class="py-2.5 px-3 mb-2 w-full border-2 rounded-lg box-border focus:outline-none focus:border-blue-modernize"
		type="password"
		{name}
		{placeholder}
		{required}
	/>
</div>
