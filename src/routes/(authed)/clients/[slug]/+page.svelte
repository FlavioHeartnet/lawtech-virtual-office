<script lang="ts">
	//TODO: Refactor this to open based in the url parametes in clients like: localhost/clients?p=1 and then open the details
	import Button from '../../../../components/button.svelte';
	import Modal from '../../../../components/modal.svelte';
	import Address from '../editClient/editAddress/+page.svelte';
	import SideMenu from '../../../../components/side-menu.svelte';
	import { idAddress } from '../../../store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import InputField from '../../../../components/input-field.svelte';
	export let showMenu = false;
	let showModal = false;
	let selectedAddress;
	export let data;
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
	<form method="post" class="lg:w-4/6">
		<h1 class="text-2xl">{actualClient.name}</h1>
		<div class="flex gap-2 mt-5">
			{#each actualClient.legal_documents as document}
				<div class="flex-shrink w-full">
					<InputField label="Documentos legais" value={document.document} name="documents" placeholder="Digite o documento" required />
				</div>
			{/each}
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
						funcHandler={() => handleAddressDetails(address)}
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
				<Button
					buttonStyle="secondary"
					buttonTitle="voltar"
					funcHandler={() => goto('/clients')}
				/>
			</div>
		</div>
	</form>
</div>
	<Modal bind:showModal>
		<form method="post" action="./editClient/editAddress">
			<Address bind:selectedAddress />
			<Button
				customClass="mt-5"
				buttonTitle="Salvar"
				funcHandler={() => (showModal = !showModal)}
			/>
		</form>
	</Modal>

