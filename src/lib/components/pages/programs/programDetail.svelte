<script>
    import ExtraData from "$lib/components/pages/programs/extraData.svelte"
    import Carousell from "$lib/components/pages/programs/imgCarousell.svelte"

    export let programData
    export let available = true

</script>

<style>

    .program-details {
        max-width: 70rem;
        margin: 0 auto;
        margin-top: -9rem;
    }

    p {
        text-align: justify;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: justify;
        /* height: 2rem; */
    }

    li:before {
        color: hsla(var(--base-color),75%);
    }
    
    /* li>svg {
        min-width: 1rem;
        width: 2rem;
        height: 2rem;
        fill: hsla(var(--base-color),75%);
    } */
    
    .overview-tags {
        margin-left: 1rem;
    }
    
    .overview-tags li::before {
        content: '●';
        font-size: 1.5rem;
        padding-bottom: 0.2rem;
    }

    .included-and-not {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .included-and-not li {
        list-style: none;
    }

    li.included:before {
        content: '✓'; /* '🗸' */
        font-size: 1.5rem;
    }
    
    li.not-included:before {
        content: '╳';
        font-size: 1.2rem;
    }


</style>


{#if available}
    <div class="program-details">
        <h2>{programData.name}</h2>
        <br>
        <Carousell id={programData.id}/>
        <ExtraData duration={programData.duration} offeredIn={programData.offeredIn}/>
        <br>
        <h3>Overview</h3>
        <p>{programData.overview}</p>
        <br>
        <ul class="overview-tags">
            {#each programData.overviewTags as tag}
                <li>{tag}</li>
            {/each}
        </ul>
        <br>
        <br>
        <h3>What's Included</h3>
        <div class="included-and-not">
            <ul>
                {#each programData.included as included}
                    <li class="included">
                        <!-- <svg width="20" height="20" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.85 4.15c.2.2.2.5 0 .7l-10.5 10.5a.5.5 0 01-.72-.02l-4-4.5a.5.5 0 01.74-.66l3.65 4.1L17.15 4.15c.2-.2.5-.2.7 0z"></path></svg> -->
                        <span>{included}</span>
                    </li>
                {/each}
            </ul>
            <ul>
                {#each programData.notIncluded as notIncluded}
                    <li class="not-included">
                        <!-- <svg width="20" height="20" viewBox="0 0 20 20"><path d="M4.15 15.15a.5.5 0 00.7.7L10 10.71l5.15 5.14a.5.5 0 00.7-.7L10.71 10l5.14-5.15a.5.5 0 10-.7-.7L10 9.29 4.85 4.15a.5.5 0 10-.7.7L9.29 10l-5.14 5.15z"></path></svg> -->
                        <span>{notIncluded}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    {:else}
        <h2>This program is not available</h2>
        <a href="/programs" class="back">Back to programs</a>
    {/if}