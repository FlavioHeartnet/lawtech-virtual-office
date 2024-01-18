<script>
// @ts-nocheck

	import { slide } from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    let isOpen = false;
    let inputValues = [];
    let searchInput = '';
    const clients = [
        {
            id: '1',
            name: 'John'
        },
        {
            id: '2',
            name: 'Marie'
        },
        {
            id: '3',
            name: 'Claire'
        },
    ]
    const handleOpen = ()=>{
        isOpen = !isOpen;
    }
    const handleDropdownOption = (id) => {
        console.log(id);
        const clientName = clients.find((client) => client.id = id );
        if(!inputValues.includes(id)){
            inputValues.push(clientName.name);
        }
    }

</script>
<div class="" id="search-select-client">
    <input bind:value={searchInput} on:click={handleOpen} on:ended={handleOpen} placeholder="Selecione o cliente" class="py-2.5 px-3 w-full border-2 rounded-lg box-border focus:outline-none focus:border-blue-modernize" type="text" name="clients"> 
    <div class="flex">
        {#each inputValues as client }
            <div class="flex-auto"><p>{client}</p></div>  
        {/each}
    </div>
    
    {#if isOpen}
        <div transition:slide={{ delay: 150, duration: 300, easing: quintOut, axis: 'x' }} class="rounded border-2 py-2.5 px-3">
            {#each clients as client }
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <a href="#" on:click={handleDropdownOption(client.id)}
                    class="hover:bg-slate-200 hover:rounded p-2">{client.name}
                </a>
            {/each}
        </div>
    {/if}
    
</div>