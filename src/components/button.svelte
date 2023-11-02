<script>
    export let funcHandler;
    export let buttonTitle;
</script>

<button on:click={funcHandler} 
    class="
        font-jakarta 
        rounded-lg 
        bg-blue-modernize 
        text-white 
        py-1.5 
        px-4 
        transition 
        hover:bg-blue-modernize-dark">
    {buttonTitle}
</button>