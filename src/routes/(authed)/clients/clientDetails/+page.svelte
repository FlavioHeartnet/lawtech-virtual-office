<script>
	import {
		IconFile,
		IconPhone,
		IconHome,
		IconUsers,
		IconFlag,
		IconWreckingBall,
		IconLuggage
	} from '@tabler/icons-svelte';
	import Button from '../../../../components/button.svelte';
	import Modal from '../../../../components/modal.svelte';
	import Address from '../editClient/editAddress/+page.svelte';
	import SideMenu from '../../../../components/side-menu.svelte';
	import { idAddress } from '../../../store';
	export let showMenu = false;
	let showModal = false;
	let selectedAddress;
	export let actualClient = {
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
				address_id: '',
				address: ''
			}
		],
		job_title: 'Assalariado',
		nacionality: 'brasileiro',
		marital_status: 'casado'
	};
	export function handleShowMenu(client) {
		actualClient = client;
		showMenu = !showMenu;
	}
	function handleAddressDetails(address){
		showModal = !showModal
		selectedAddress = address;
		idAddress.update((v) => v = selectedAddress.address_id);
	}
</script>

<SideMenu bind:showMenu>
	<h1 class="text-2xl">{actualClient.name}</h1>
	<div class="flex gap-2 mt-5">
		<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconFile /></div>
		<div class="flex-shrink mt-1 text-blue-modernize-dark">Documentos legais</div>
		{#each actualClient.legal_documents as document}
			<div class="flex-shrink">
				<input
					placeholder="vazio"
					value={document.document}
					class="bg-gray-modernize p-1 border-0 rounded outline-none"
				/>
			</div>
		{/each}
	</div>
	<div class="flex gap-2">
		<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconPhone /></div>
		<div class="flex-shrink mt-1 text-blue-modernize-dark">Telefone</div>
		<div class="flex-shrink">
			<input
				placeholder="vazio"
				value={actualClient.phone}
				class="bg-gray-modernize p-1 border-0 rounded outline-none"
			/>
		</div>
	</div>
	<div class="flex gap-2">
		<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconHome /></div>
		<div class="flex-shrink mt-1 text-blue-modernize-dark">Endereço</div>
		{#each actualClient.addresses as address}
			<div class="flex-shrink w-96">
				<input
					placeholder="vazio"
					value={address.address}
					disabled
					class="w-full bg-gray-modernize p-1 border-0 rounded outline-none"
				/>
			</div>
			<div class="flex-shrink">
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
			<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconUsers /></div>
			<div class="flex-shrink mt-1 text-blue-modernize-dark">Estado Civil</div>
			<div class="flex-shrink">
				<input
					placeholder="vazio"
					value={actualClient.marital_status}
					class="bg-gray-modernize p-1 border-0 rounded outline-none"
				/>
			</div>
		</div>
		<div class="flex gap-2">
			<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconFlag /></div>
			<div class="flex-shrink mt-1 text-blue-modernize-dark">Nacionalidade</div>
			<div class="flex-shrink">
				<input
					placeholder="vazio"
					value={actualClient.nacionality}
					class="bg-gray-modernize p-1 border-0 rounded outline-none"
				/>
			</div>
		</div>
		<div class="flex gap-2">
			<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconWreckingBall /></div>
			<div class="flex-shrink mt-1 text-blue-modernize-dark">Profissão</div>
			<div class="flex-shrink">
				<input
					placeholder="vazio"
					value={actualClient.job_title}
					class="bg-gray-modernize p-1 border-0 rounded outline-none"
				/>
			</div>
		</div>
	{/if}
	<div class="flex gap-2">
		<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconLuggage /></div>
		<div class="flex-shrink mt-1 text-blue-modernize-dark">Processos e Casos</div>
		<div class="flex-shrink">
			<a class="hover:text-blue-modernize" href="/">3326355-13.2024.9.21.2046</a><br />
			<a class="hover:text-blue-modernize" href="/">6358940-83.2024.3.00.7468</a><br />
			<a class="hover:text-blue-modernize" href="/">3291475-92.2024.6.17.4976</a><br />
		</div>
	</div>
	<div class="flex mt-5 gap-2">
		<div class="flex-shrink-0">
			<Button buttonTitle="Salvar" funcHandler />
		</div>
		<div class="flex-shrink-0">
			<Button
				buttonStyle="secondary"
				buttonTitle="voltar"
				funcHandler={() => (showMenu = !showMenu)}
			/>
		</div>
	</div>
	<Modal bind:showModal>
		<form method="post" action="clients/editClient/editAddress">
			<Address bind:selectedAddress />
			<Button
				customClass="mt-5"
				buttonTitle="Salvar"
				funcHandler={() => (showModal = !showModal)}
			/>
		</form>
	</Modal>
</SideMenu>
