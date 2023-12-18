<script>
	export let funcHandler;
	export let buttonTitle; // * can be an icon(SvelteComponent) or text
	export let buttonStyle = 'primary';
	export let isIcon = false; // * if true in buttonTitle you should pass an svelte component with your icon
	let colorbutton;
	switch (buttonStyle) {
		case 'primary':
			colorbutton = 'bg-blue-modernize hover:bg-blue-modernize-dark text-white ';
			break;
		case 'secondary':
			colorbutton = 'bg-slate-200 text-blue-modernize hover:bg-blue-modernize hover:text-white ';
			break;
		default:
			colorbutton = 'bg-blue-modernize hover:bg-blue-modernize-dark text-white ';
	}
</script>

<button
	on:click={funcHandler}
	class="
        w-full
        font-jakarta
        rounded-lg
        {colorbutton}
        py-2.5
        px-4
        transition
        mb-2
        "
>
	{#if isIcon}<svelte:component this={buttonTitle} /> {:else}{buttonTitle}{/if}
</button>
