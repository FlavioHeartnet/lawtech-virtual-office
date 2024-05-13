<script lang="ts">
	
	import Button from '../../../../components/button.svelte';
	import Modal from '../../../../components/modal.svelte';
	import Address from '../editClient/editAddress/+page.svelte';
	import { idAddress } from '../../../store';
	import { onMount } from 'svelte';
	import InputField from '../../../../components/input-field.svelte';
	export let showMenu = false;
	let showModal = false;
	let selectedAddress;
	export let data;
	export let form;
	let creating = false;
	onMount(() => {
		if(data.client){
			showMenu = !showMenu;
			actualClient = data.client;
		}
	});
	
	export let actualClient:import('../../../../api/dto/client.dtos').FindByIdOutput = {
		id: '',
		name: 'Client 1',
		email: 'XXXXXXXXXXXXXXXXX',
		phone: 'XXXXXXXXXXXXXXXXX',
		legal_documents: [
			{
				type: 6,
				document: 'XXXXXXXXXXXXXXXXX'
			}
		],
		addresses: [
			{
				id: '',
				address:'',
				street: '',
				address_number: 0,
				complement: '',
				state: '',
				city: '',
				zip: '',
				country: '',
				neighbornhood: '',
				description: '',
			}
		],
		job_title: '',
		nacionality: '',
		marital_status: ''
	};
	export function handleShowMenu(client) {
		actualClient = client;
		showMenu = !showMenu;
	}
	function handleAddressDetails(address){
		showModal = !showModal
		selectedAddress = address;
		idAddress.set(selectedAddress.address_id);
	}
</script>
<div class="flex justify-center">
	<form method="post" action="?/update" class="lg:w-full">
		<input type="hidden" value={actualClient.id} name="id"/>
		{#if form?.incorrect}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
			Não foi possivel validar seus dados, verifique seus dados e tente novamente!
		</p>{/if}
		{#if form?.success}<p class="mb-5 p-2 success bg-green-400 text-white font-bold rounded">
			Parabéns!!! Cliente atualizado com sucesso!!
		</p>{/if}
		<div class="flex gap-2">
			<div class="flex-shrink w-full">
				<InputField label="Nome" value={actualClient.name} placeholder='Digite o nome' name='name'/>
			</div>
		</div>
		<div class="flex gap-2 mt-5">
			{#each actualClient.legal_documents as document}
				<div class="flex-shrink w-full">
					<InputField label="Documentos legais" value={document.document} name="documents" placeholder="Digite o documento" required />
					<input type="hidden" value={document.type} name="document_type">
				</div>
			{/each}
		</div>
		<div class="flex gap-2">
			<div class="flex-shrink w-full">
				<InputField label="email" value={actualClient.email} placeholder='Digite o e-mail' name='email'/>
			</div>
		</div>
		<div class="flex gap-2">
			<div class="flex-shrink w-full">
				<InputField label="Telefone" value={actualClient.phone} placeholder='Digite o telefone' name='phone'/>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<div class="flex-shrink mt-1 text-blue-modernize-dark">Endereço</div>
			{#each actualClient.addresses as address}
				<div class="flex-shrink w-full">
					<input
						placeholder="vazio"
						value={address.address}
						disabled
						class="w-full p-1 border-0 rounded outline-none"
					/>
				</div>
				<div class="flex-shrink w-24">
					<Button
						buttonStyle="secondary"
						buttonTitle="Editar"
						funcHandler={(e) => { e.preventDefault(); handleAddressDetails(address)}}
					/>
				</div>
			{/each}
		</div>
		{#if actualClient.legal_documents[0].type != 6}
			<div class="flex gap-2">
				<div class="flex-shrink w-full">
					<InputField label="Estado Civil" value={actualClient.marital_status} placeholder='Digite o estado civil' name='marital_status'/>
				</div>
			</div>
			<div class="flex gap-2">
					<div class="flex-shrink w-full">
						<InputField label="Nacionalidade" value={actualClient.nacionality} placeholder='Digite a nacionalidade' name='nationality'/>
					</div>
			</div>
			<div class="flex gap-2">
				<div class="flex-shrink w-full">
					<InputField label="Profissão" value={actualClient.job_title} placeholder='Digite a profissão' name='job_title'/>
				</div>
			</div>
		{/if}
		<div class="flex flex-col gap-2">
			<div class="flex-shrink mt-1 text-blue-modernize-dark">Processos e Casos</div>
			<div class="flex-shrink">
				<a class="hover:text-blue-modernize" href="/">3326355-13.2024.9.21.2046</a><br />
				<a class="hover:text-blue-modernize" href="/">6358940-83.2024.3.00.7468</a><br />
				<a class="hover:text-blue-modernize" href="/">3291475-92.2024.6.17.4976</a><br />
			</div>
		</div>
		<div class="flex mt-5 gap-2">
			<div class="flex-auto">
				<Button buttonTitle="Salvar" funcHandler />
			</div>
			<div class="flex-auto">
				<a
					class="
					w-full
					block
					text-center
					font-jakarta
					rounded-lg
					py-2.5
					px-4
					transition
					bg-slate-200 text-blue-modernize hover:bg-blue-modernize hover:text-white"
					href='/clients'
				>voltar</a>
			</div>
		</div>
	</form>
</div>
	<Modal bind:showModal>
		<form method="post" action="?/updateAddress">
		{#if form?.incorrect}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
			Não foi possivel validar seus dados, verifique seus dados e tente novamente!
		</p>{/if}
		{#if form?.success}<p class="mb-5 p-2 success bg-green-400 text-white font-bold rounded">
			Parabéns!!! Endereço atualizado com sucesso!!
		</p>{/if}
			{#if creating}
				<span class="saving">Salvando...</span>
			{/if}
			<input type="hidden" name="client_id" value={actualClient.id} />
			<Address bind:selectedAddress />
			<Button
				disabled={creating}
				customClass="mt-5"
				buttonTitle="Salvar"
				funcHandler={() => (showModal = !showModal)}
			/>
		</form>
	</Modal>

