<script>
    export let data

    let scroll, isScrolled, windowHeight
    $: isScrolled = !scroll==0
    // $: backgroundScroll = -scroll*2

    function handleWheel(e) {
        if (scroll + e.deltaY<1) {scroll = 0}
        // else if (scroll<100 && e.deltaY>0 ) {
            // (function smoothScroll(i) {
            //     setTimeout(function() {
            //         scroll = windowHeight/10*(11-i)
            //         console.log(i)
            //         console.log(windowHeight)
            //         console.log(scroll)
            //         if (--i) smoothScroll(i);   //  decrement i and call myLoop again if i > 0
            //     }, 20)
            // })(10)
        // }
    }





</script>

<style>
    * {transition: all 500ms ease;}

    #title-screen {
        position: relative;
        width: 100%;
        height: 100vh;
        /* scroll-snap-align: end; */
    }

    #title-screen.scrolled {
        margin-top: -100vh;
        transition: all 700ms ease
    }
    
    #title-screen.scrolled #background {
        margin-top: 65vh;
        transition: all 700ms ease
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
    
</style>

<svelte:window bind:innerHeight={windowHeight}
               bind:scrollY={scroll}
               on:wheel|passive={handleWheel}/>

<div id="title-screen" class:scrolled={isScrolled}>

    <img id="background" src="{data.imgURL}" alt={data.alt} > <!-- style:transform="translate3d(-50%,{backgroundScroll}px,0"> --> <!-- /0.18/ -->

</div>