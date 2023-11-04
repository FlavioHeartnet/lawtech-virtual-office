<script>
    export let name;
    export let placeholder;
    export let value='';
</script>
<input
    bind:value
    class="py-3.5 px-3 w-full border-2 rounded-lg box-border focus:outline-none focus:border-blue-modernize"
    type="text" 
    name={name}
    placeholder={placeholder} 
    />