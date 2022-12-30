<script>
    import logo from '$lib/img/icons/MTC 0deg.png';

    import current from '$lib/data/storeCurrent.js'
    current.subscribe((value) => {})
    function makeCurrent(newCurrent) {
        current.update((previousCurrent) => {
            return newCurrent
        })
    }

    export let buttons

    let scroll, pageNotScrolled, pageTransitioningToNotScrolled
    $: pageNotScrolled = scroll==0
    
    function handleWheel(e) {
        if ((scroll + e.deltaY<1) ) {
            pageTransitioningToNotScrolled = true
        } else {
            pageTransitioningToNotScrolled = false
        }
    }

</script>


<style>
    nav * {
        background: #00000000;
        user-select: none;
        transition: all 400ms ease;
    }
    
    nav {
        width: 100%;
        --topline-h: 0.35rem;
        height: fit-content;
        backdrop-filter: blur(8px);
        display: flex;
        flex-direction: column;
        align-items: center;
        /* box-shadow: 0px 0px 15px 11px rgba(256, 256, 256, 0.4); */
    }

    nav.notScrolled {
        /* height: 15rem; */
        backdrop-filter: blur(1px);
    }
    
    .top-line {
        /* position: absolute; */
        /* background: rgba(40, 40, 40, 0.5); */
        /* background: hsla(var(--bar-color), 75%); */
        width: 100%;
        height: 0rem;
        /* transition: height 100ms; */
        z-index: 1000;
    }
    
    nav.notScrolled .top-line {
        height: var(--topline-h);
        background: var(--bar-gradient);
    }


    .bar {
        background: rgba(3, 3, 3, 1);
        /* background: hsl(var(--bar-color)); */
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        align-items: center;
        /* text-shadow: rgba(0,0,0,0.5) 0 0 0.5em; */
        border-bottom: solid 2px #222;
        z-index: 999;
    }
    
    nav.notScrolled .bar {
        background: rgba(40, 40, 40, 0.5);
        border-bottom: solid 3px transparent;
    }

    #logo {
        /* background: radial-gradient(hsla(var(--background-color),0.2) 43%, rgba(0,0,0,0) 70%); */
        margin-left: 1em;
        padding-left: 0.8em;
        transform: rotate(0);
        scale: 0.75;
    }
    
    nav.notScrolled #logo {
        padding-top: 0.3rem;
        transform: rotate(-22deg);
        scale: 1;
    }

    #buttons {
        height: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        gap: 1em;
        font-weight: bold;
    }

    .nav-button {
        height: 100%;
        padding: .92rem 1rem;
        text-transform: uppercase;
    }

    nav.notScrolled .nav-button {
        padding: 2rem 1rem;
    }

    .nav-button:hover {
        background: rgba(140,140,140,0.5);
    }

    .nav-button.current {
        border-bottom: 3px solid hsla( var(--background-color),0.75);
        margin-bottom: -3px;
        /* border-bottom: 3px solid hsla(52,50%,73%,0.5); */

    }

</style>

<svelte:window bind:scrollY={scroll}
               on:wheel={handleWheel} />

<nav class:notScrolled={pageNotScrolled || pageTransitioningToNotScrolled}>
    <div class="top-line">
    </div>

    <div class="bar">

        <div>
            <img src={logo} alt="Logo" id="logo">
        </div>

        <div id="buttons">

            <!-- <a  href="/"
            class="nav-button"
            class:current="{$current==="home"}"
            on:click="{makeCurrent("home")}">Home -> {$current}</a> -->

            {#each ["home", ...buttons] as button}
            <a  href="/{button==="home"?"":button}"
                class="nav-button"
                class:current="{$current===button}"
                on:click="{makeCurrent(button)}">{button}</a>
            {/each}
        </div>

    </div>
</nav>