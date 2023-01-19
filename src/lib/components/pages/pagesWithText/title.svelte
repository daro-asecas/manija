<script>
    export let data

    let scroll, isScrolled, titleScroll
    $: isScrolled = !scroll==0
    // $: titleScroll = scroll<=0?0:48

</script>

<style>
    * {
        transition: all 600ms ease;
    }
    
    #title {
        position: relative;
        bottom: -5rem;
        width: 100%;
        z-index: 888;
    }

    #title.notScrolled {
        bottom: 79vh;
        transition: all 500ms ease;
    }

    h1 {
        margin: 0;
        font-size: 5em;
        white-space: nowrap;
        text-align: center;
    }

    h3 {
        margin-top: 1%;
        font-size: 3em;
    }
    h1, h3 {
        text-align: center;
        text-shadow: 0 0 10px hsl(52 50% 13% / 60%),
                     0 0 5px hsl(52 50% 23% / 70%),
                     0 0 4px hsl(52 50% 33% / 100%),
                     0 0 3px hsl(52 50% 33% / 100%),
                     0 0 2px hsl(52 50% 33% / 100%),
                     0 0 1px hsl(52 50% 33% / 100%),
                    1px 1px 1px hsl(52 50% 33% / 33%),
                    -1px -1px 1px hsl(52 50% 33% / 33%)
                    ;
    }


</style>

<svelte:window bind:scrollY={scroll}/>

<div id="title" class:notScrolled={!isScrolled} > <!-- style:transform="translateY({titleScroll}rem)">  --> <!-- /0.583/ /0.08/ -->
    <h1>{data.title}</h1>
    {#if data.subtitle}
    <h3>{data.subtitle}</h3>
    {/if}
</div>