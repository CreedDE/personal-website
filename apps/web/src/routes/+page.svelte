<script lang="ts">
  import type { PageData } from './$types';
  import Welcome from '$lib/components/welcome.svelte';

  export let data: PageData;
</script>

<svelte:head>
  <title>thmoe • Frontend Developer</title>
</svelte:head>

<Welcome pageTitle={data.home.title} description={data.home.overview[0].children[0].text} />
