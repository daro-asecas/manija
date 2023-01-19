<script>
    import data from '$lib/data/dataSections.json'

    let scroll, isScrolled, titleScroll
    $: isScrolled = !scroll==0
    $: backgroundScroll = -scroll*0.08
    $: titleScroll = scroll*0.85 // scrollFX?(scroll<=0?0:48):1

</script>

<style>
    #title-screen {
        position: relative;
        width: 100%;
        height: 100vh;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        z-index: 888;
    }

    #title h1 {
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

    #title span {
        display: inline-block;
    }



</style>

<svelte:window bind:scrollY={scroll}/>

<div id="title-screen">

    <img id="background" class="noScrollFX" src="{data.home.imgURL}" alt={data.home.alt} style:transform="translate3d(-50%,{backgroundScroll}px,0">
    
    <div id="title" style:transform="translateY({titleScroll}px)">
        <h1>
            <span>La Manija</span>
            <span>Tango Club</span>
        </h1>
        <h3>
            <span>El que la agarra</span>
            <span>la agarra</span>
        </h3>
    </div>
    
</div>