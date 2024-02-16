<script>
	/*TODO: 
		- Make the table a component to be re-used
		- Implement the input search functional searching through the list
		- Page detail to see more info of the customer
*/ import { IconRocket, IconSearch } from '@tabler/icons-svelte';
	import InputField from '../../../components/input-field.svelte';
	import Button from '../../../components/button.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import TableLoader from './tableLoader.svelte';
	let listClients = [];
	let isLoading = true;
	let searchTerm = '';
	let searchbleItems = [];
	let showMenu = false;
	const newClientPage = () => {
		goto('/clients/newClient/client');
	};
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	};
	onMount(async () => {
		const response = await fetch('/clients', requestOptions);
		const data = await response.json();
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
<style>
@media (max-width: 768px) { /* Adjust breakpoint as needed */
    .side-menu {
      position: fixed;
      top: 0;
      right: -100%; /* Hide completely off-screen */
      width: 100%; /* Occupy full width on mobile */
      height: 100%;
    }

    .side-menu.open ~ .main-content {
      margin-left: 0; /* No "push" effect on smaller screens */
    }
  }
	.side-menu {
		position: fixed;
		top: 0;
		right: -70%; /* Start off-screen on the right */
		height: 100%;
		width: 70%;
		background-color: #e2e8f0;
		transition: right 0.3s ease; /* Transition the 'right' property */
	}
	
	.main-content {
	  transition: margin-left 0.3s ease; /* Optional for smooth push effect */
	}
	
	.side-menu.open {
		right: 0; /* Slide in from the right */
	}
	</style>
  
  
  <div class="side-menu" class:open={showMenu}>
	<button on:click={() => (showMenu = !showMenu)}>X</button>
	<p>Menu Item 1</p>
	<p>Menu Item 2</p>
	<p>Menu Item 3</p>
  </div>
  
<div class="main-content">
	<div class="p-5 text-blue-modernize rounded-lg flex">
		<div class="flex-shrink w-7">
			<IconRocket />
		</div>
		<div class="flex-auto">
			<h1 class="text-2xl">Clientes, Credores e Parceiros</h1>
		</div>
		<div>
			<Button buttonStyle="secondary" buttonTitle="Cadastrar" funcHandler={newClientPage} />
		</div>
	</div>
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
						<th><button on:click={() => (showMenu = !showMenu)}>Toggle Menu</button></th>
					</tr>
				{/each}
			</tbody>
		</table>
		{#if isLoading}
			<TableLoader />
		{/if}
	</div>
</div>

