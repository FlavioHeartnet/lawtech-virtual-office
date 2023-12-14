<script>
    //TODO: find a way to dinamicly inject Icon from tabler
    export let Icon;
    export let href;
    export let text = "Home";
</script>

<a href="{href}">
    <div class="flex p-3 rounded-lg hover:bg-slate-200 hover:text-blue-modernize">
        <div class="flex-1 w-20"><svelte:component this={Icon}/></div>
        <div class="flex-auto w-64"><p>{text}</p></div>
    </div>
</a>