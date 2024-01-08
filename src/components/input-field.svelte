<script>
	export let name;
	export let placeholder;
	export let value = '';
	export let label = '';
	export let required = false;
	export let type = 'text';
	function typeAction(node) {
		node.type = type;
	}
	export let input= ()=>{};
</script>

<div class="w-full">
	<label class="font-bold ml-1" for={name}>{label}</label>
	<input
		id={name}
		bind:value
		on:input={input}
		class="py-2.5 px-3 mb-2 w-full border-2 rounded-lg box-border focus:outline-none focus:border-blue-modernize"
		use:typeAction
		{name}
		{placeholder}
		{required}
	/>
</div>
