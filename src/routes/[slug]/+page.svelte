<script>
  import Home     from '../+page.svelte'
  import Us       from '$lib/components/pages/us.svelte'
  import History  from '$lib/components/pages/history.svelte'
  import Programs from '$lib/components/pages/programs.svelte'
  import Cotact   from '$lib/components/pages/contact.svelte'
  const components = {
    "us":       Us,
    "history":  History,
    "programs": Programs,
    "contact":  Cotact
  }

  import { page } from '$app/stores'

  import data from '$lib/data/dataSections.json'

  import current from '$lib/data/storeCurrent.js'
    current.subscribe((value) => {})
    function makeCurrent(newCurrent) {
        current.update((previousCurrent) => {
            return newCurrent
        })
    }

  function sectionExists(slugValue) {
    let slugLowerCase = slugValue.toLowerCase()
    let result = false
    Object.entries(data).forEach(([key, value]) => {
      if (key===slugLowerCase) {
        result = true}
        makeCurrent(slugLowerCase)
    })
    if (result===false) {
      makeCurrent("home")
    }
    return result
  }

</script>

{#if sectionExists($page.params.slug)}

  <svelte:component data={data[$page.params.slug]} this="{components[$page.params.slug]}"></svelte:component>

{:else}
  <Home />
{/if}