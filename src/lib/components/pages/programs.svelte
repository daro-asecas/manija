<script>
    import TitleScreen from "$lib/components/pages/pagesWithText/titleScreen.svelte"
    import Title from "$lib/components/pages/pagesWithText/title.svelte"
    import Content from "$lib/components/pages/pagesWithText/content.svelte"
    import ProgramCard from "$lib/components/pages/programs/programCard.svelte"

    import programs from '$lib/data/dataPrograms.json'

    export let data
</script>


<style>
    
#programs-list {
    width: 100%;
    padding: 0rem;
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

</style>


<div id="programs-page">
    <TitleScreen data={data} />
    <Content>
        <Title data={data} />
        <ul id="programs-list">
            {#each Object.values(programs) as program}
                <ProgramCard programData={program} />
            {/each}
        </ul>
    </Content>
</div>