
<script>
    //TODO: Create responsiveness for mobile devices in the menu
    import NavButtonItem from './../../components/nav-items.svelte'
    import { IconUser, IconHome, IconLuggage, IconSubtask, IconDiamond, IconGalaxy, IconMoneybag } from '@tabler/icons-svelte';
</script>
<div class="min-h-screen bg-white grid grid-flow-row-dense grid-cols-4 grid-rows-1">
    <div class="p-5 border border-light-grey">
        <h1 class="text-2xl">Lawtech Office</h1><br/>
        <h1 class="text-xl font-bold">Jurídico</h1>
        <nav class="mt-2">
            <NavButtonItem Icon={IconHome} href="/" />
            <NavButtonItem Icon={IconUser} href="/" text='Clientes, Credores e Parceiros' />
            <NavButtonItem Icon={IconLuggage} href="/" text='Processos e Casos'/>
            <NavButtonItem Icon={IconSubtask} href="/" text='Tarefas' />
        </nav>
        <h1 class="text-xl font-bold">Marketing</h1>
        <nav class="mt-2">
            <NavButtonItem Icon={IconDiamond} href="/" text='Funil de Vendas' />
            <NavButtonItem Icon={IconGalaxy} href="/" text='Produção de Conteúdo' />
        </nav>
        <h1 class="text-xl font-bold">Administrativo</h1>
        <nav class="mt-2">
            <NavButtonItem Icon={IconMoneybag} href="/" text='Financeiro' />
        </nav>
    </div>
    <div class="col-span-3"><slot /></div>
  </div>


