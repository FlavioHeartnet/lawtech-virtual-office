<script>
// @ts-nocheck
    import Select from 'svelte-select';
    export let selecteditems = [];
    export let clients = []

    
</script>
<Select bind:value={selecteditems} multiple={true} items={clients} placeholder={'Selecione um item'}  class="rounded border-2 py-2.5 px-3"/>
        