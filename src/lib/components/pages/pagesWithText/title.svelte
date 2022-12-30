<script>
    export let data
    export let scrollFX = true

    let scroll, isScrolled, titleScroll
    $: isScrolled = !scroll==0
    $: backgroundScroll = scrollFX?-scroll*2:-scroll*0.25
    $: titleScroll = scrollFX?(scroll<=0?0:150):0

    function handleWheel(e) {
        if (scrollFX && (scroll + e.deltaY<1) ) {
            scroll = 0
        }
        // } else if (scroll<100) {
        //     e.deltaY = 1
        // }
    }

</script>

<style>
    * {
        transition: all 400ms ease;
    }

    #title-screen {
        position: relative;
        width: 100%;
        height: 100vh;

        /* scroll-snap-align: end; */
    }

    #title-screen.scrolled {
        height: 0rem;
    }

    #background {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        min-width: 150vh;
        height: 100vh;
        z-index: -1;
    }
    
    #background.noScrollFX {
        transition: 0ms;
    }

    #title {
        position: absolute;
        top: 40%;
        width: 100%;
        z-index: 888;
    }

    #title.wrap h1 {
        white-space:normal ;
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

<svelte:window bind:scrollY={scroll}
               on:wheel={handleWheel} />

<div id="title-screen" class:scrolled={isScrolled&&scrollFX}>

    <img id="background" class:noScrollFX={!scrollFX} src="{data.imgURL}" alt={data.alt} style:transform="translate3d(-50%,{backgroundScroll}px,0"> <!-- /0.18/ -->
    
    <div id="title" style:transform="translateY({titleScroll}px)" class:wrap={!scrollFX}> <!-- /0.583/ /0.08/ -->
        <h1>{data.title}</h1>
        {#if data.subtitle}
            <h3>{data.subtitle}</h3>
        {/if}
    </div>

</div>