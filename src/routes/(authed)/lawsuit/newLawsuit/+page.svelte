<script>
	import { goto } from '$app/navigation';
	import { IconFileCheck } from '@tabler/icons-svelte';
	import Button from '../../../../components/button.svelte';
	import InputField from '../../../../components/input-field.svelte';
	import Dropdown from '../../../../components/dropdown.svelte';

	let selectedclients = [];
	let selecteddefendant = [];
	let selectedClass = '';
	let selectedQualification = '';
	export let data;
	let clients = data.clientsTobeSelected;
	let classsuits = data.classsuits;
	let qualifications = data.qualifications;
	export let form;
	const backpage = () => {
		goto('/lawsuit');
	};
</script>

<div class="mt-5 mb-5 lg:p-5 text-blue-modernize rounded-lg flex">
	<div class="flex-shrink w-7 mt-1">
		<IconFileCheck />
	</div>
	<div class="flex-auto">
		<h1 class="text-2xl">Cadastro de Processo</h1>
	</div>
	<div>
		<Button buttonStyle="secondary" buttonTitle="Voltar" funcHandler={backpage} />
	</div>
</div>
<div class="addClient">
	<form method="POST" id="lawsuitform">
		{#if form?.success}<p class="mb-5 p-2 success bg-green-400 text-white font-bold rounded">
				Parabéns!!! Processo cadastrado com sucesso!!
			</p>{/if}
		{#if form?.errormessage}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				{form.errormessage}
			</p>{/if}
		<InputField label="Número do Processo" name="cnj" placeholder="Digite o CNJ" required />
		<div class="flex gap-2">
			<div class="flex-auto">
				<InputField label="Assunto" name="subject" placeholder="Digite o assunto" required />
			</div>
			<div class="flex-auto">
				<InputField
					type="date"
					label="Data de Distribuição"
					name="distributionDate"
					placeholder="Digite a data de distribuição"
					required
				/>
			</div>
		</div>
		<h3 class="font-bold">Classe</h3>
		<Dropdown
			name="class"
			multiple={false}
			bind:selecteditems={selectedClass}
			clients={classsuits}
		/>
		<InputField label="Foro" name="foro" placeholder="Digite o foro" required />
		<InputField label="Vara" name="vara" placeholder="Digite a vara" required />
		<h3 class="font-bold">Clientes</h3>
		<div class="flex gap-2 mb-2">
			<div class="grow w-64">
				<Dropdown name="clients" bind:selecteditems={selectedclients} {clients} />
			</div>
		</div>
		<h3 class="font-bold">Partes contraria</h3>
		<div class="flex gap-2 mb-2">
			<div class="grow w-64">
				<Dropdown bind:selecteditems={selecteddefendant} {clients} name="defendants" />
			</div>
		</div>
		<h3 class="font-bold">Qualificação</h3>
		<div class="flex gap-2 mb-2">
			<div class="grow w-64">
				<Dropdown
					multiple={false}
					bind:selecteditems={selectedQualification}
					clients={qualifications}
					name="qualification"
				/>
			</div>
		</div>
		<div class="flex gap-2">
			<div class="flex-auto">
				<InputField
					label="Custo do caso"
					name="cost_case"
					placeholder="Digite a o custo do caso"
					required
					type="number"
				/>
			</div>
			<div class="flex-auto">
				<InputField label="Honorarios" name="fee" placeholder="Digite o Honorario" type="number" />
			</div>
		</div>
		<br />
		<Button buttonTitle="Cadastrar" funcHandler />
	</form>
</div>
