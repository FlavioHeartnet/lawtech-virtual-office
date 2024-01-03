<script>
	// TODO: conect this page in the backend and make the table a component to be re-used, and make the input search functional searching through the list
	import { IconRocket, IconSearch } from '@tabler/icons-svelte';
	import InputField from '../../../components/input-field.svelte';
	import Button from '../../../components/button.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	let listClients = [];
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
	});
</script>

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
			
			<InputField name="search" placeholder="Pesquise aqui" />
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
			</tr>
		</thead>
		<tbody>
		{#each listClients as client}
			<tr>
				<th>{client.name}</th>
				<th>{client.legal_documents[0].type == 6 ? 'Júridica' : 'Física'}</th>
				<th>{client.email}</th>
				<th>{client.phone}</th>
			</tr>
		{/each}
		</tbody>
	</table>
</div>

