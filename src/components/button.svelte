<script>
    export let funcHandler;
    export let buttonTitle;
    export let buttonStyle = 'primary'
    let colorbutton;
    switch(buttonStyle){
        case 'primary': colorbutton = 'bg-blue-modernize hover:bg-blue-modernize-dark text-white '
        break;
        case 'secondary': colorbutton = 'bg-slate-200 text-blue-modernize hover:bg-blue-modernize hover:text-white '
        break;
        default: colorbutton = 'bg-blue-modernize hover:bg-blue-modernize-dark text-white '
    }
</script>

<button on:click={funcHandler} 
    class="
        w-full
        font-jakarta 
        rounded-lg 
        {colorbutton}
        py-2.5 
        px-4 
        transition
        mb-2
        ">
    {buttonTitle}
</button>