<script>
    export let funcHandler;
    export let buttonTitle;
</script>

<button on:click={funcHandler} 
    class="
        w-full
        font-jakarta 
        rounded-lg 
        bg-blue-modernize 
        text-white 
        py-2.5 
        px-4 
        transition 
        hover:bg-blue-modernize-dark
        mb-2
        ">
    {buttonTitle}
</button>