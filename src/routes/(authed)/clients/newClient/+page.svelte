<script>
	//TODO: Make it store a new client in the database
	import { goto } from '$app/navigation';
	import { IconUserUp } from '@tabler/icons-svelte';
	import Button from '../../../../components/button.svelte';
	import InputField from '../../../../components/input-field.svelte';
	export let form;

	const backpage = () => {
		goto('/clients');
	};
</script>

<div class="mt-5 mb-5 lg:p-5 text-blue-modernize rounded-lg flex">
	<div class="flex-shrink w-7">
		<IconUserUp />
	</div>
	<div class="flex-auto">
		<h1 class="text-2xl">Cadastro de Cliente</h1>
	</div>
	<div>
		<Button buttonStyle="secondary" buttonTitle="Voltar" funcHandler={backpage} />
	</div>
</div>
<div class="addClient">
	<form method="POST">
		{#if form?.success}<p class="mb-5 p-2 success bg-green-400 text-white font-bold rounded">
				Parabéns!!! Cliente cadastrado com sucesso!!
			</p>{/if}
		{#if form?.incorrect}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				Dados inválidos, verifique os dados e tente novamente!
				{form.errormessage}
			</p>{/if}
      {#if form?.errormessage}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				{form.errormessage}
			</p>{/if}
		<div class="flex gap-2">
			<div class="flex-auto">
				<InputField label="Nome" name="name" placeholder="Digite o nome" required />
			</div>
			<div class="flex-auto">
				<InputField label="E-mail" name="email" placeholder="Digite o e-mail" required />
			</div>
		</div>
		<h1 class="font-bold">Tipo de documento</h1>
		<div class="mb-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
			<div class="mt-1">
				<label for="cpf">CPF</label>
				<input id="cpf" type="radio" name="documentType" value="1" required />
			</div>
			<div class="mt-1">
				<label for="rg">RG</label>
				<input id="rg" type="radio" name="documentType" value="2" required />
			</div>
			<div class="mt-1">
				<label for="cnh">CNH</label>
				<input id="cnh" type="radio" name="documentType" value="3" required />
			</div>
			<div class="mt-1">
				<label for="certidao_nascimento">Certidão de Nascimento</label>
				<input id="certidao_nascimento" type="radio" name="documentType" value="4" required />
			</div>
			<div class="mt-1">
				<label for="certidao_casamento">Certidão de Casamento</label>
				<input id="certidao_casamento" type="radio" name="documentType" value="5" required />
			</div>
			<div class="mt-1">
				<label for="cnpj">CNPJ</label>
				<input id="cnpj" type="radio" name="documentType" value="6" required />
			</div>
		</div>
		<InputField
			label="Número do Documento"
			name="legal_documents"
			placeholder="Digite o número do documento"
			required
		/>
		<InputField label="Telefone" name="phone" placeholder="Digite o telefone" required />
		<h1 class="font-bold">Endereço</h1>
		<InputField label="CEP" name="zipCode" placeholder="Digite o CEP" required />
		<InputField label="Avenida/Rua" name="street" placeholder="Digite a rua ou avenida" required />
		<InputField label="Bairro" name="neighborhood" placeholder="Digite o bairro" required />
		<div class="flex gap-2">
			<div class="flex-auto">
				<InputField label="Cidade" name="city" placeholder="Digite a cidade" required />
			</div>
			<div class="flex-auto">
				<InputField label="Estado" name="state" placeholder="Digite o estado" required />
			</div>
		</div>
		<InputField label="País" name="country" placeholder="Digite o estado" required />
		<div class="flex gap-2">
			<div class="flex-auto">
				<InputField
					type="number"
					label="Número"
					name="number"
					placeholder="Digite o número"
					required
				/>
			</div>
			<div class="flex-auto">
				<InputField
					label="Complemento"
					name="complement"
					placeholder="Digite o complemento"
					required
				/>
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
