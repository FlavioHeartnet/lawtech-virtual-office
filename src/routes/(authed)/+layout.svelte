
<script>
    //TODO: refactor icons to be a svelte component
    //TODO: finish manubar layout design
    import { IconUser, IconHome, IconLuggage, IconSubtask, IconDiamond, IconGalaxy, IconMoneybag } from '@tabler/icons-svelte';
</script>
<div class="bg-white grid grid-flow-row-dense grid-cols-4 grid-rows-1">
    <div class="p-5 ">
        <h1 class="text-2xl">Lawtech Office</h1><br/>
        <h1 class="text-xl">Jurídico</h1>
        <nav class="mt-2">
            <a href="/">
                <div class="flex p-5 rounded-lg hover:bg-slate-200 hover:text-blue-modernize">
                    <div class="flex-1 w-20"><IconHome/></div>
                    <div class="flex-auto w-64"><p>Home</p></div>
                </div>
            </a>
            <a href="/clients">
                <div class="flex">
                    <div class="flex-1 w-20"><IconUser/></div>
                    <div class="flex-auto w-64"><p>Clientes, Credores e Parceiros</p></div>
                </div>
            </a>
            <a href="/lawsuits">
                <div class="flex">
                    <div class="flex-1 w-20"><IconLuggage/></div>
                    <div class="flex-auto w-64"><p>Processos e Casos</p></div>
                </div>
            </a>
            <a href="/task">
                <div class="flex">
                    <div class="flex-1 w-20"><IconSubtask/></div>
                    <div class="flex-auto w-64"><p>Tarefas</p></div>
                </div>
            </a>
        </nav>
        <h1 class="text-xl">Marketing</h1>
        <nav class="mt-2">
            <a href="/funnels">
                <div class="flex">
                    <div class="flex-1 w-20"><IconDiamond/></div>
                    <div class="flex-auto w-64"><p>Funil de Vendas</p></div>
                </div>
            </a>
            <a href="/contents">
                <div class="flex">
                    <div class="flex-1 w-20"><IconGalaxy/></div>
                    <div class="flex-auto w-64"><p>Produção de Conteúdo</p></div>
                </div>
            </a>
        </nav>
        <h1 class="text-xl">Administrativo</h1>
        <nav class="mt-2">
            <a href="/finnancial">
                <div class="flex">
                    <div class="flex-1 w-20"><IconMoneybag/></div>
                    <div class="flex-auto w-64"><p>Financeiro</p></div>
                </div>
            </a>
        </nav>
    </div>
    <div class="col-span-3"><slot /></div>
  </div>


