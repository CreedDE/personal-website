<script lang="ts">
  import { Github, Menu } from 'lucide-svelte';

  import ThemeToggle from './theme-toggle.svelte';
  import Button from './ui/button.svelte';
  import * as Sheet from './ui/sheet';
  import { page } from '$app/stores';

  // export let menuItems: MenuItem[];

  const menuItems: any = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Blog', href: '/posts' }
  ];

  $: innerWidth = 0;
  $: innerHeight = 0;

  let mobileNav = false;
</script>

<svelte:window bind:innerHeight bind:innerWidth />

{#if innerWidth > 768}
  <header
    class="fixed top-0 left-0 right-0 backdrop-blur backdrop-saturate-150 z-50 flex flex-col items-center h-12 border border-border"
  >
    <div class="w-full">
      <nav class="relative flex items-center justify-between px-24">
        <div />
        <ul class="flex items-center h-12 gap-4">
          {#each menuItems as menuItem}
            <li
              class="font-medium transition-colors duration-200 hover:text-primary text-foreground {$page
                .url.pathname === menuItem.href && `text-primary`}"
            >
              <a href={menuItem.href}>{menuItem.title}</a>
            </li>
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
          <a
            href="/"
            class="text-xl text-transparent font-bold bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-300"
          >
            thmoe
          </a>
        </div>

        <div class="flex items-center justify-center gap-4">
          <ThemeToggle />
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
            <a
              class="flex items-center whitespace-nowrap rounded py-2 px-6 font-medium transition-colors duration-200 hover:text-primary lg:py-0 lg:px-0 lg:text-sm text-foreground"
              href={menuItem.href}>{menuItem.title}</a
            >
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
