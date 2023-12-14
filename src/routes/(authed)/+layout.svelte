<script>
	//TODO: Create responsiveness for mobile devices in the menu
	import NavButtonItem from './../../components/nav-items.svelte';
	import {
		IconUser,
		IconUserDollar,
		IconHome,
		IconLuggage,
		IconSubtask,
		IconDiamond,
		IconGalaxy,
		IconMoneybag
	} from '@tabler/icons-svelte';
</script>

<div class="min-h-screen bg-white flex">
	<div class="p-5 border border-light-grey w-72 flex-shrink">
		<h1 class="text-2xl">Lawtech Office</h1>
		<br />
		<h1 class="text-xl font-bold">Jurídico</h1>
		<nav class="mt-2">
			<NavButtonItem Icon={IconHome} href="/home" />
			<NavButtonItem Icon={IconUserDollar} href="/clients" text="Clientes, Credores e Parceiros" />
			<NavButtonItem Icon={IconLuggage} href="/" text="Processos e Casos" />
			<NavButtonItem Icon={IconSubtask} href="/" text="Tarefas" />
		</nav>
		<h1 class="text-xl font-bold">Marketing</h1>
		<nav class="mt-2">
			<NavButtonItem Icon={IconDiamond} href="/" text="Funil de Vendas" />
			<NavButtonItem Icon={IconGalaxy} href="/" text="Produção de Conteúdo" />
		</nav>
		<h1 class="text-xl font-bold">Administrativo</h1>
		<nav class="mt-2">
			<NavButtonItem Icon={IconMoneybag} href="/" text="Financeiro" />
		</nav>
		<h1 class="text-xl font-bold">Personal</h1>
		<nav class="mt-2">
			<NavButtonItem Icon={IconUser} href="/" text="Configuração" />
		</nav>
	</div>
	<div class="flex-auto mx-5 mt-2"><slot /></div>
</div>
