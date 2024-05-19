<script>
	import { IconRocket, IconSearch } from '@tabler/icons-svelte';
	import InputField from '../../../components/input-field.svelte';
	import Button from '../../../components/button.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import TableLoader from './../../../components/tableLoader.svelte';
	let listTasks = [];
	let isLoading = true;
	let searchTerm = '';
	let searchbleItems = [];
	const newTaskPage = () => {
		goto('/tasks/newtasks/');
	};
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	};
	onMount(async () => {
		const response = await fetch('/tasks', requestOptions);
		const data = await response.json();
		listTasks = data.listTasks;
		isLoading = false;
		filterItems();
	});
	function filterItems() {
		const filteredItems = listTasks.filter((item) => {
			const clientsNamesString = item.clients.map((client) => client.name).join(', ');
			const defendantNamesString = item.defendants.map((defendant) => defendant.name).join(', ');
			if (clientsNamesString.toLowerCase().includes(searchTerm.toLowerCase())) {
				return item;
			}
			if (defendantNamesString.toLowerCase().includes(searchTerm.toLowerCase())) {
				return item;
			}
			if (item.cnj.toLowerCase().includes(searchTerm.toLowerCase())) {
				return item;
			}
			if (item.subject.toLowerCase().includes(searchTerm.toLowerCase())) {
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

<div class="p-5 text-blue-modernize rounded-lg flex">
	<div class="flex-shrink w-7">
		<IconRocket />
	</div>
	<div class="flex-auto">
		<h1 class="text-2xl">Processos e casos</h1>
	</div>
	<div>
		<Button buttonStyle="secondary" buttonTitle="Cadastrar" funcHandler={newTaskPage} />
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
				<th>CNJ</th>
				<th>Clientes</th>
				<th>Qualificação</th>
				<th>Parte contraria</th>
				<th>Ações</th>
			</tr>
		</thead>
		<tbody>
			{#each searchbleItems as tasks}
				<tr>
					<th>{tasks.cnj}</th>
					<th>
						<ul>
							{#each tasks.clients as client}
								<li>{client.name}</li>
							{/each}
						</ul>
					</th>
					<th>{tasks.subject}</th>
					<th>
						<ul>
							{#each tasks.defendants as defendant}
								<li>{defendant.name}</li>
							{/each}
						</ul>
					</th>
					<th>
                        <a
                            class="text-blue-modernize cursor-pointer"
                            href="/tasks/{tasks.cnj}">Detalhes</a 
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
