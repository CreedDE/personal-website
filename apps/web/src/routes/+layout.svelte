<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte';
  import type { PageData } from './$types';
  import '../app.postcss';
  import { onMount } from 'svelte';

  export let data: PageData;

  onMount(() => {
    document.documentElement.setAttribute('data-theme', data.theme);
  });
</script>

<div>
  <Navbar menuItems={data.navigation.menuItems} />
</div>
<div class="px-4 md:px-12">
  <slot />
</div>
