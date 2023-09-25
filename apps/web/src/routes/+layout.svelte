<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte';
  import type { PageData } from './$types';
  import '../app.postcss';

  export let data: PageData;
</script>

<div>
  <div>
    <Navbar menuItems={data.navigation.menuItems} />
  </div>
  <div class="px-4 md:px-12">
    <slot />
  </div>
</div>
