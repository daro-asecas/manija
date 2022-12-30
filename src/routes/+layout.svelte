<script>
    import Navbar from "$lib/components/layout/navbar.svelte"
    import Footer from "$lib/components/layout/footer.svelte"
    import "../styles/global.css"
    
    import data from '$lib/data/dataLayout.json'
</script>

<style>
    .layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    header, main, footer {
        width: 100%;
    }

    header {
        position: fixed;
        z-index: 1000;
    }

    main {
        margin-top: 0rem;
        flex-grow: 1;
    }

    footer {
        z-index: 100;
    }

</style>

<svelte:head>
   <title>La Manija</title>
</svelte:head>

<div class="layout">

    <header>
        <Navbar buttons={data.titles} />
    </header>

    <main>
        <slot></slot>
    </main>

    <footer>
        <Footer contactData={data.contact}/>
    </footer>

</div>