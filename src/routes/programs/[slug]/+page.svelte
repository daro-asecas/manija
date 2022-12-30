<script>
  import Content from "$lib/components/pages/pagesWithText/content.svelte"
  import ProgramDetail from "$lib/components/pages/programs/programDetail.svelte"

  import { page } from '$app/stores'

  import data from '$lib/data/dataPrograms.json'

  function programExists(slugValue) {
    return data.hasOwnProperty(slugValue)
  }

</script>

<Content>
  {#if programExists($page.params.slug)}
    <ProgramDetail programData={data[$page.params.slug]} />
  {:else}
    <ProgramDetail available={false} />
  {/if}
</Content>