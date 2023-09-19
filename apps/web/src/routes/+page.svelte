<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if data.pets && data.pets.length}
  <ul>
    {#each data.pets as pet}
      <p>{pet.name}</p>
    {/each}
  </ul>
{:else}
  <p>Nothing found</p>
{/if}
