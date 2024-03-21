<script>
// @ts-nocheck

	
	import { IconRocket } from '@tabler/icons-svelte';
	import Button from '../../../components/button.svelte';
	import { goto } from '$app/navigation';


	const newClientPage = () => {
		goto('/clients/newClient/client');
	};
	
</script>



<div class="main-content">
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
	<slot></slot>
</div>
