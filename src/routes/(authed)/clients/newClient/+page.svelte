<script>
	import { goto } from '$app/navigation';

	import { IconUserUp } from '@tabler/icons-svelte';
	import Button from '../../../../components/button.svelte';
	import InputField from '../../../../components/input-field.svelte';
	const backpage = () => {
		goto('/clients');
	};
</script>

<div class="p-5 text-blue-modernize rounded-lg flex">
	<div class="flex-shrink w-7">
		<IconUserUp />
	</div>
	<div class="flex-auto">
		<h1 class="text-2xl">Cadastro de clientes, credores e parceiros</h1>
	</div>
	<div>
		<Button buttonStyle="secondary" buttonTitle="Voltar" funcHandler={backpage} />
	</div>
</div>
<div class="addClient">
	<form>
		<div class="flex gap-2">
			<div class="flex-auto">
				<InputField label="Nome" name="name" placeholder="Digite o nome" required />
			</div>
			<div class="flex-auto">
				<InputField label="E-mail" name="email" placeholder="Digite o e-mail" required />
			</div>
		</div>

		<InputField
			label="Documentos"
			name="legal_documents"
			placeholder="Digite o número do documento"
			required
		/>
		<InputField label="Telefone" name="phone" placeholder="Digite o telefone" required />
		<InputField label="Endereços" name="addresses" placeholder="Digite o endereço" required />
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
