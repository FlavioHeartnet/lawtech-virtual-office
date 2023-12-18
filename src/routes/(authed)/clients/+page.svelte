<script>
	// TODO: conect this page in the backend
	import { IconRocket, IconSearch } from '@tabler/icons-svelte';
	import InputField from '../../../components/input-field.svelte';
	import Button from '../../../components/button.svelte';
	import { goto } from '$app/navigation';

	const newClientPage = () => {
		goto('/clients/newClient');
	};
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
	<table class="table-auto border-collapse">
		<thead class="font-bold">
			<tr>
				<th>Nome</th>
				<th>Tipo</th>
				<th>Nacionalidade</th>
				<th>Processo</th>
			</tr>
		</thead>
		<tbody>
			<th>Flavio</th>
			<th>Fisica</th>
			<th>Brasileiro</th>
			<th>5017579-20.2021.4.04.7200</th>
		</tbody>
	</table>
</div>
