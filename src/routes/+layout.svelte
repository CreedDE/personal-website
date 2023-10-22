<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import Navbar from '$lib/components/navbar.svelte';
  import Footer from '$lib/components/footer.svelte';
  import '../app.postcss';

  export let data: PageData;

  onMount(() => {
    document.documentElement.setAttribute('data-theme', data.theme as string);
  });
</script>

<div class="flex w-full">
  <div class="fixed inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl lg:px-8">
      <div class="w-full bg-white dark:bg-neutral-900" />
    </div>
  </div>

  <div class="relative flex w-full flex-col">
    <Navbar />
    <div class="flex-none h-28" />
    <main class="flex-auto">
      <div class="sm:px-8 mt-9">
        <div class="mx-auto w-full max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</div>
