<script>
    import { each } from "svelte/internal";
    import ExtraData from "$lib/components/pages/programs/extraData.svelte"


    export let programData

    let imageFolder = "/img/programs/"

</script>

<style>

.program-card {
    --card-background: #222;
    background-color: var(--card-background);
    border: solid 1px #454545;
    height: 30vh;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.2rem;
    overflow: hidden;
}

.program-card:hover {
    scale: 1.01 ;
    --card-background: #333;
    background-color: var(--card-background);
    border: solid 1px #555555;
}

.image {
    max-width: 30%;
    max-height: 100%;
    aspect-ratio: 1.618;
    border-radius: 0.5rem;
}

.card-data {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.2rem;
}

h2 {
    margin: 0;
}

.overview {
    flex-basis: 0;
    flex-grow: 1;
    overflow-y: hidden;
}

.overview-text {
    flex-shrink: 1;
    text-align: justify;
    margin: 0;
    height: 110%;
}

</style>

<a class="program-card" href="/programs/{programData.id}">

    <img class="image" src="{imageFolder}{programData.id}/1.jpg" alt="">

    <div class="card-data">
        <h2>{programData.name}</h2>
        <div class="overview">
            <p class="overview-text">{programData.overview}</p>
        </div>

            <ExtraData duration={programData.duration} offeredIn={programData.offeredIn}/>
    </div>

</a>
