<script lang="ts">
  import Navbar from '$lib/components/navbar.svelte';
  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  import Footer from '$lib/components/footer.svelte';
  import '../app.postcss';

  export let data: PageData;

  onMount(() => {
    document.documentElement.setAttribute('data-theme', data.theme);
  });
</script>

<div class="flex w-full">
  <div class="fixed inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl lg:px-8">
      <div class="w-full bg-white dark:bg-neutral-900" />
    </div>
  </div>

  <div class="relative flex w-full flex-col">
    <Navbar menuItems={data.navigation.menuItems} />
    <div class="flex-none h-28" />
    <main class="flex-auto">
      <slot />
    </main>
    <Footer />
  </div>
</div>
