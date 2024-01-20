<script>
// @ts-nocheck
    import Select from 'svelte-select';
    export let selecteditems = '';
    export let clients = [
        {
            value: '1',
            label: 'John'
        },
        {
            value: '2',
            label: 'Marie'
        },
        {
            value: '3',
            label: 'Claire'
        },
    ]

    
</script>
<Select bind:value={selecteditems} multiple={true} items={clients}  class="rounded border-2 py-2.5 px-3"/>
        