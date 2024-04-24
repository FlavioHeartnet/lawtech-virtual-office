<script>
    // @ts-nocheck
        import { IconSearch } from '@tabler/icons-svelte';
        import InputField from '../../../components/input-field.svelte';
        import Button from '../../../components/button.svelte';
        import { onMount } from 'svelte';
        import TableLoader from './tableLoader.svelte';
        let listClients = [];
        let isLoading = true;
        let searchTerm = '';
        let searchbleItems = [];
        export let data;
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        onMount(async () => {
            listClients = data.listClients;
            isLoading = false;
            filterItems();
        });
        function filterItems() {
            const filteredItems = listClients.filter((item) => {
                if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item;
                }
                if (searchTerm === '') {
                    return item;
                }
            });
    
            searchbleItems = filteredItems;
        }
        function onInputChange(event) {
            searchTerm = event.target.value;
            filterItems();
        }
    </script>
<div class="searchBar">
    <form class="flex">
        <div class="flex-auto mr-5">
            <InputField input={onInputChange} name="search" placeholder="Pesquise aqui" />
        </div>
        <div>
            <Button buttonStyle="primary" isIcon={true} buttonTitle={IconSearch} funcHandler />
        </div>
    </form>
</div>
<div class="modernize-table mt-5">
    <table class="table-auto border-collapse overflow-x-auto">
        <thead class="font-bold">
            <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {#each searchbleItems as client}
                <tr>
                    <th>{client.name}</th>
                    <th>{client.legal_documents[0].type == 6 ? 'Júridica' : 'Física'}</th>
                    <th>{client.email}</th>
                    <th>{client.phone}</th>
                    <th
                        ><!--TODO: this is not working properly should have a smooth trasition-->
                        <a
                            class="text-blue-modernize cursor-pointer"
                            href="/clients/{client.id}">Detalhes</a 
                        ></th
                    >
                </tr>
            {/each}
        </tbody>
    </table>
    {#if isLoading}
        <TableLoader />
    {/if}
</div>