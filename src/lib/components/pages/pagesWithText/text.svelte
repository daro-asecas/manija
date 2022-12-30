<script>
    import { each } from "svelte/internal";


    export let data
    
</script>

<style>

    #text {
        width: 100%;
        padding-top: 1rem;
    }

    p {
        padding-inline: 5%;
        text-align: justify;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: 0 0 10px hsl(52 50% 13% / 20%),
                     0 0 5px hsl(52 50% 23% / 40%),
                     0 0 3px hsl(52 50% 33% / 60%),
                    1px 1px 1px hsl(52 50% 33% / 33%),
                    -1px -1px 1px hsl(52 50% 33% / 33%)
                    ;
    }


</style>

<div  id="text">
    {#if data.text}
        {#each data.text as parragraph}
            <p>{parragraph}</p>
        {/each}
    {/if}
</div>