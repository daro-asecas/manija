  <style>
  .pb {
    line-height: 1em;
    align-items: center;
    padding: 0.75em 1em;
    flex: none;
    background: #1565c0;
    border-radius: 0.25em;
    text-shadow: #000 0 0 0.12em;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    user-select: none;
    transition: background-color 200ms ease;
    font-weight: 600;
    font-family: inherit;
  }

  .pb:hover{
    background: #1976d2;
  }

  button{
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    font-size: inherit;
  }
</style>

<script>
  export let href = void 0;
  // import Ripple from "svelte-mui/src/Ripple.svelte";
</script>

{#if href != null}
  <a rel="prefetch" class="pb na elev6" {href} on:click>
    <slot/>
    <!-- <Ripple /> -->
  </a>
{:else}
  <button class="pb elev6" on:click>
    <slot/>
    <!-- <Ripple /> -->
  </button>
{/if}