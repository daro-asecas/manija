<script>
    export let id

    let imageFolder = `/img/programs/${id}`
    let imageName = 0
    let numberOfImages = 4
    $: if (imageName===numberOfImages) { imageName = 0
    } else if (imageName===-1) { imageName = numberOfImages - 1}

    function previous() {++imageName}

    function next() {++imageName}

    function keydown(e) {
        if (e.keyCode===39) {next()
        } else if (e.keyCode===37) {previous()}
    }

</script>

<style>

    .main-img {
        position: relative;
        max-width: 70rem;
    }
    
    .image {
        width: 100%;
        border-radius: 1rem;
    }

    .carrousell-button {
        position: absolute;
        height: 100%;
        width: 10%;
        max-width: 4rem;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .carrousell-button.left {
        left: 0;
    }
    
    .carrousell-button.right {
        right: 0;
    }
    
    .carrousell-button svg {
        width: 100%;
        fill: hsla(var(--dark-hsl),50%);
        z-index: 1;
    }

    .carrousell-button:hover svg {
        fill: hsla(var(--base-color),70%);
    }

    .carrousell-button:active svg {
        scale: 1.08;
    }

</style>

<svelte:window on:keydown={keydown}/>

<div class="main-img">
    <button class="carrousell-button left" on:click={previous}>
        <svg viewBox="0 0 24 24"><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z"/></svg>
    </button>

    <button class="carrousell-button right"  on:click={next}>
        <svg viewBox="0 0 24 24"><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z"/></svg>
    </button>

    <img class="image" src="{imageFolder}/{imageName}.jpg" alt="">

</div>