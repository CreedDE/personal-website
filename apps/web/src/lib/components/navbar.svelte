<script lang="ts">
  import { enhance } from '$app/forms';
  import type { MenuItem } from '$lib/utils/sanity';
  import { resolveHref } from '$lib/utils/sanity.links';
  import type { SubmitFunction } from '@sveltejs/kit';
  import { Github, Menu } from 'lucide-svelte';
  import { Button, Sheet, Select } from 'ui';
  import ThemeToggle from './ThemeToggle.svelte';

  export let menuItems: MenuItem[];

  $: innerWidth = 0;
  $: innerHeight = 0;

  let mobileNav = false;

  const themes = [
    { value: 'light', label: 'light' },
    { value: 'dark', label: 'dark' }
  ];

  const submitTheme: SubmitFunction = ({ action }) => {
    const theme = action.searchParams.get('theme');

    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  };
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#if innerWidth > 768}
  <header
    class="fixed top-0 left-0 right-0 backdrop-blur backdrop-saturate-150 z-50 flex flex-col items-center h-12 border border-border"
  >
    <div class="w-full">
      <nav class="relative flex items-center justify-between px-12">
        <ul class="flex items-center h-12 gap-4">
          {#each menuItems as menuItem}
            {@const href = resolveHref(menuItem._type, menuItem.slug)}
            {#if menuItem._type == 'home'}
              <li
                class="font-medium transition-colors duration-200 hover:text-primary text-foreground"
              >
                <a {href}>Home</a>
              </li>
            {:else}
              <li
                class="font-medium transition-colors duration-200 hover:text-primary text-foreground"
              >
                <a {href}>{menuItem.title}</a>
              </li>
            {/if}
          {/each}
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  </header>
{:else}
  <header
    class="fixed top-0 left-0 right-0 backdrop-blur backdrop-saturate-150 z-50 flex flex-col items-center h-12 border border-border"
  >
    <div class="w-full px-4">
      <div class="flex items-center justify-between h-12">
        <div>
          <p
            class="text-xl text-transparent font-bold bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-300"
          >
            thmoe
          </p>
        </div>

        <div>
          <ThemeToggle />
        </div>

        <div>
          <Button variant="icon" href="https://github.com/CreedDE/personal-website" target="_blank">
            <Github />
          </Button>
        </div>
      </div>
    </div>
  </header>

  <Sheet.Root bind:open={mobileNav}>
    <Sheet.Content side={'left'}>
      <Sheet.Description>
        <nav>
          {#each menuItems as menuItem}
            {@const href = resolveHref(menuItem._type, menuItem.slug)}
            {#if menuItem._type == 'home'}
              <a
                class="flex items-center whitespace-nowrap rounded py-2 px-6 font-medium transition-colors duration-200 hover:text-primary lg:py-0 lg:px-0 lg:text-sm text-foreground"
                {href}>Home</a
              >
            {:else}
              <a
                class="flex items-center whitespace-nowrap rounded py-2 px-6 font-medium transition-colors duration-200 hover:text-primary lg:py-0 lg:px-0 lg:text-sm text-foreground"
                {href}>{menuItem.title}</a
              >
            {/if}
          {/each}
        </nav>
      </Sheet.Description>
    </Sheet.Content>
  </Sheet.Root>

  <div
    class="fixed bottom-4 right-4 z-50 flex h-16 w-16 items-center justify-center border border-border/80 rounded-full bg-neutral-50/20 hover:cursor-pointer text-foregorund backdrop-blur backdrop-filter transition"
  >
    <Button variant="icon" on:click={() => (mobileNav = !mobileNav)}>
      <Menu />
    </Button>
  </div>
{/if}
