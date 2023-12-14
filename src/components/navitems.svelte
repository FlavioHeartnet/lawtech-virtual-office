<script>
    //TODO: find a way to dinamicly inject Icon from tabler
    import {IconHome} from '@tabler/icons-svelte';
</script>

<a href="/">
    <div class="flex p-5 rounded-lg hover:bg-slate-200 hover:text-blue-modernize">
        <div class="flex-1 w-20"><IconHome/></div>
        <div class="flex-auto w-64"><p>Home</p></div>
    </div>
</a>