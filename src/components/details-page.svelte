<script>
	import {
		IconSquareX,
		IconFile,
		IconPhone,
		IconHome,
		IconUsers,
		IconFlag,
		IconWreckingBall,
		IconLuggage
	} from '@tabler/icons-svelte';
	export let showMenu = false;
	export let actualClient = {
		name: 'Client 1',
		email: 'XXXXXXXXXXXXXXXXX',
		phone: 'XXXXXXXXXXXXXXXXX',
		legal_documents: [
			{
				type: 6,
				document_number: 'XXXXXXXXXXXXXXXXX'
			}
		]
	};
	export function handleShowMenu(client) {
		console.log(client);
		actualClient = client;
		showMenu = !showMenu;
	}
</script>

<div class="side-menu p-5" class:open={showMenu}>
	<div class="flex">
		<div class="flex-auto">
			<h1 class="text-2xl">{actualClient.name}</h1>
		</div>
		<div>
			<button on:click={() => (showMenu = !showMenu)}><IconSquareX /></button>
		</div>
	</div>
	<div class="flex gap-2 mt-5">
		<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconFile /></div>
		<div class="flex-shrink mt-1 text-blue-modernize-dark">CPF/CNPJ</div>
		<div class="flex-shrink">
			<input
				placeholder="vazio"
				value={actualClient.legal_documents[0].document_number}
				class="bg-gray-modernize p-1 border-0 rounded outline-none"
			/>
		</div>
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
		<div class="flex-shrink">
			<input placeholder="vazio" class="bg-gray-modernize p-1 border-0 rounded outline-none" />
		</div>
	</div>
	<div class="flex gap-2">
		<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconUsers /></div>
		<div class="flex-shrink mt-1 text-blue-modernize-dark">Estado Civil</div>
		<div class="flex-shrink">
			<input placeholder="vazio" class="bg-gray-modernize p-1 border-0 rounded outline-none" />
		</div>
	</div>
	<div class="flex gap-2">
		<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconFlag /></div>
		<div class="flex-shrink mt-1 text-blue-modernize-dark">Nacionalidade</div>
		<div class="flex-shrink">
			<input placeholder="vazio" class="bg-gray-modernize p-1 border-0 rounded outline-none" />
		</div>
	</div>
	<div class="flex gap-2">
		<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconWreckingBall /></div>
		<div class="flex-shrink mt-1 text-blue-modernize-dark">Profissão</div>
		<div class="flex-shrink">
			<input placeholder="vazio" class="bg-gray-modernize p-1 border-0 rounded outline-none" />
		</div>
	</div>
	<div class="flex gap-2">
		<div class="flex-shrink mt-1 text-blue-modernize-dark"><IconLuggage /></div>
		<div class="flex-shrink mt-1 text-blue-modernize-dark">Processos e Casos</div>
		<div class="flex-shrink">
			<a href="/">3326355-13.2024.9.21.2046</a><br />
			<a href="/">6358940-83.2024.3.00.7468</a><br />
			<a href="/">3291475-92.2024.6.17.4976</a><br />
		</div>
	</div>
</div>
