<script lang="ts">
  import type { PageData } from './$types';
  import Welcome from '$lib/components/welcome.svelte';

  export let data: PageData;
</script>

<Welcome pageTitle={data.home.title} description={data.home.overview[0].children[0].text} />
