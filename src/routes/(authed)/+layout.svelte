<!-- svelte-ignore a11y-no-static-element-interactions -->
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
		IconMoneybag,
		IconMenu2
	} from '@tabler/icons-svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Button from '../../components/button.svelte';

	let isOpen = false;
	const menuToggle = () => {
		isOpen = !isOpen;
		console.log(isOpen);
	};
</script>

{#if isOpen}
	<div
		transition:slide={{ delay: 50, duration: 500, easing: quintOut, axis: 'x' }}
		class="flex fixed min-h-screen w-full"
	>
		<div
			on:click={menuToggle}
			on:keydown={menuToggle}
			class="p-5 border border-light-grey w-72 flex-shrink bg-white"
		>
			<h1 class="text-2xl">Lawtech Office</h1>
			<br />
			<h1 class="text-xl font-bold">Jurídico</h1>
			<nav class="mt-2">
				<NavButtonItem Icon={IconHome} href="/home" />
				<NavButtonItem
					Icon={IconUserDollar}
					href="/clients"
					text="Clientes, Credores e Parceiros"
				/>
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

		<div class="flex-auto bg-black opacity-70" />
	</div>
{/if}
<div class="min-h-screen bg-white flex">
	<div class="p-5 border border-light-grey w-72 flex-shrink bg-white hidden lg:block">
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
	<div class="flex-auto mx-5 mt-2">
		<div class="w-14 lg:hidden">
			<Button
				isIcon={true}
				buttonStyle="secondary"
				buttonTitle={IconMenu2}
				funcHandler={menuToggle}
			/>
		</div>
		<slot style="filter: brightness(50%);" />
	</div>
</div>
