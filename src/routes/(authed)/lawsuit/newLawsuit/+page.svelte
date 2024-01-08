<script>
	import { goto } from '$app/navigation';
	import { IconFileCheck, IconPlus } from '@tabler/icons-svelte';
	import Button from '../../../../components/button.svelte';
	import InputField from '../../../../components/input-field.svelte';

	export let form;

	const backpage = () => {
		goto('/lawsuit');
	};
</script>

<div class="mt-5 mb-5 lg:p-5 text-blue-modernize rounded-lg flex">
	<div class="flex-shrink w-7">
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
		{#if form?.incorrect}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				Dados inválidos, verifique os dados e tente novamente!
				{form.errormessage}
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
				<InputField type="date" label="Data de Distribuição" name="distributionDate" placeholder="Digite a data de distribuição" required />
			</div>
		</div>
		<InputField
			label="Foro"
			name="foro"
			placeholder="Digite o foro"
			required
		/>
		<InputField label="Vara" name="vara" placeholder="Digite a vara" required />
		<h1 class="font-bold">Clientes</h1>
		<div class="flex gap-2">
			<div class="grow w-64">
				<select class="py-2.5 px-3 mb-2 w-full border-2 rounded-lg box-border focus:outline-none focus:border-blue-modernize" name="clients" form="lawsuitform">
					<option value="John">John</option>
					<option value="Marie">Marie</option>
					<option value="Carlos">Carlos</option>
				</select>
				<select class="py-2.5 px-3 mb-2 w-full border-2 rounded-lg box-border focus:outline-none focus:border-blue-modernize" name="clients" form="lawsuitform">
					<option value="John">John</option>
					<option value="Marie">Marie</option>
					<option value="Carlos">Carlos</option>
				</select>
				<select class="py-2.5 px-3 mb-2 w-full border-2 rounded-lg box-border focus:outline-none focus:border-blue-modernize" name="clients" form="lawsuitform">
					<option value="John">John</option>
					<option value="Marie">Marie</option>
					<option value="Carlos">Carlos</option>
				</select>
				
			</div>
			<div class="flex-auto mt-auto mb-4">
				<a class="" href="#"><IconPlus/></a>
			</div>
			
		</div>

		<InputField label="Profissão" name="job_title" placeholder="Digite a profissão" required />

		<div class="flex gap-2">
			<div class="flex-auto">
				<InputField
					label="Nacionalidade"
					name="nacionality"
					placeholder="Digite a nacionalidade"
					required
				/>
			</div>
			<div class="flex-auto">
				<InputField
					label="Estado Civil"
					name="marital_status"
					placeholder="Digite o estado civil"
					required
				/>
			</div>
		</div>
		<br />
		<Button buttonTitle="Cadastrar" funcHandler />
	</form>
</div>
