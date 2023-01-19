<script>
    import current from '$lib/data/storeCurrent.js'
    current.subscribe((value) => {})
    function makeCurrent(newCurrent) {
        current.update((previousCurrent) => {
            return newCurrent
        })
    }

    export let buttons


/////////////////////////////////////////////////////////////////// MAKING RESPONSIVE -> COLLAPSIBLE MENU WHEN NARROW
    let barWidth, buttonsWidth, barButtonsRatio, menuHasSpace
    let collapsed = true

    $: barButtonsRatio = barWidth / buttonsWidth
    $: menuHasSpace = barWidth > 725

    function collapseExpandMenu() {collapsed=!collapsed}

    function collapseMenu() {collapsed=true}


/////////////////////////////////////////////////////////////////// SCROLLING EFFECT
    let scroll, scrolled
    // let pageTransitioningToNotScrolled = false
    $: scrolled = !(scroll==0)

    function handleWheel(e) {
        if (scroll + e.deltaY<1) {scroll=0}
        // else {pageTransitioningToNotScrolled = false}
    }


/////////////////////////////////////////////////////////////////// HANDLINKG KEYDOWN
    function handleKeydown(e) {
        if (e.keyCode == 27) {collapseMenu()}
    }

</script>

<style>
    nav * {
        user-select: none;
        background: #00000000;
        transition: all 500ms ease;
    }

    nav {
        width: 100%;
        --topline-h: 0.35rem;
        height: fit-content;
        filter: drop-shadow(0 0 0.5rem #000C);
        backdrop-filter: blur(1px);
        display: flex;
        flex-direction: column;
        align-items: center;
        /* box-shadow: 0px 0px 15px 11px rgba(256, 256, 256, 0.4); */
    }

    nav.scrolled {
        backdrop-filter: blur(8px);
    }

    .top-line {
        background: var(--bar-gradient);
        width: 100%;
        height: var(--topline-h);
        z-index: 1000;
        transition: height 300ms linear;
    }

    nav.scrolled .top-line {
        height: 0;
    }

    .bar {
        background: rgba(3, 3, 3, 1);
        /* background: hsl(var(--bar-color)); */
        width: 100%;
        height: 5.6rem;
        display: flex;
        flex-direction: row;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        align-items: center;
        /* text-shadow: rgba(0,0,0,0.5) 0 0 0.5em; */
        border-bottom: solid 2px transparent;
        z-index: 999;
    }

    nav.scrolled .bar {
        height: 3.3rem;
        border-bottom: solid 2px #2223;
        /* background: rgba(40, 40, 40, 0.5); */
    }

    #logo {
        /* background: radial-gradient(hsla(var(--background-color),0.2) 43%, rgba(0,0,0,0) 70%); */
        padding-top: 0.3rem;
        transform: rotate(-22deg);
        scale: 1;
    }

    nav.scrolled #logo {
        padding-left: 0.1rem;
        transform: rotate(0);
        scale: 0.75;
    }

    #buttons {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 1em;
        font-weight: bold;
    }

    #buttons.verticalMenu {
        height: fit-content;
        width: 15rem;
        position: absolute;
        top: 3rem;
        right: 0;
        flex-direction: column;
        /* background-color: #111D; */
        background: rgba(20, 20, 20, 0.75);
        filter: drop-shadow(0 0 0.5rem #000C);
        backdrop-filter: blur(94px);
        backdrop-filter: blur(8px);
        border-radius: 0.6rem;
        padding-bottom: 0.5rem;
        gap: 0.5rem;
    }

    #buttons.verticalMenu.collapsed {
        display: none;
        height: 0;
    }

    .nav-button {
        height: 100%;
        padding: 2rem 1rem;
        text-transform: uppercase;
        border-bottom: 3px solid transparent;
    }

    #buttons.verticalMenu .nav-button {
        padding: 1.5rem 0.5rem;
        width: calc(100% - 1rem);
        text-align: center;
        border-radius: 0.2rem;
    }

    nav.scrolled .nav-button {
        padding: .92rem 1rem;
    }

    .nav-button:hover, .nav-button.current:hover {
        background-color: rgba(140,140,140,0.5);
    }

    .nav-button.current {
        border-bottom: 3px solid hsla( var(--background-color),0.75);
        background-color: #6666;
    }

    #menu-button {
        position: absolute;
        top: 0.7rem;
        right: 0.7rem;
        height: 2rem;
        width: 2rem;
        overflow: hidden;
    }

    #menu-button.hidden {
        display: none;
    }

    #menu-button svg {
        fill: currentColor;
        position: absolute;
        margin: 0.25rem;
        transition: all 100ms ease;
    }

    #menu-button svg#expand-menu {
        margin: 0;
    }

    #menu-button svg.hidden {
        margin: 0;
        padding: 50%;
        transition: all 100ms ease;
    }

</style>

<svelte:window bind:scrollY={scroll}
               on:wheel|passive={handleWheel}
               on:keydown={handleKeydown}/>

<nav class:scrolled>

    <div class="top-line"></div>

    <div class="bar" bind:clientWidth={barWidth}>

        <div>
            <img src='/img/icons/MTC 0deg.png' alt="Logo" id="logo">
        </div>


        <div bind:clientWidth={buttonsWidth}
                id="buttons"
                class:verticalMenu={!menuHasSpace}
                class:collapsed>

            {#each ["home", ...buttons] as button}
                <a  href="/{button==="home"?"":button}"
                    class="nav-button"
                    class:current="{$current===button}"
                    on:click={makeCurrent(button)}
                    on:click={collapseMenu}>{button}</a>
            {/each}

        </div>

        <a href="/" id="menu-button" class:hidden={menuHasSpace} on:click|preventDefault={collapseExpandMenu}>
                <svg id="collapse-menu" viewBox="0 0 1024 1024" class:hidden={collapsed}><path d="M664.377948 511.42322l326.997958 326.997959a108.146166 108.146166 0 0 1-152.954727 152.954727l-326.997959-326.997958-326.997958 326.997958a108.146166 108.146166 0 0 1-152.954728-152.954727l326.997959-326.997959L31.470534 184.425262A108.146166 108.146166 0 0 1 184.425262 31.470534l326.997958 326.997959L838.421179 31.470534a108.146166 108.146166 0 0 1 152.954727 152.954728z"/></svg>
                <svg id="expand-menu" viewBox="0 0 92 92" class:hidden={!collapsed}><path d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"/></svg>
        </a>
    </div>
</nav>