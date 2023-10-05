<script lang="ts">
  import { GithubIcon, LinkedinIcon } from 'lucide-svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  console.log(data.about);
</script>

<svelte:head>
  <title>About me • thmoe</title>
</svelte:head>

<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
  <div class="lg:order-first lg:row-span-2">
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">{data.about.title}</h1>
    <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 break-words">
      {#each data.about.description as description}
        {#each description.children as markup}
          <p>
            {markup.text}
          </p>
        {/each}
      {/each}
    </div>
  </div>
  <div class="lg:pl-20">
    <div class="flex flex-col gap-4 px-4 py-6 border-border rounded-lg border-2">
      {#each data.about.social as social}
        <a href={social.href} target="_blank" class="flex items-center gap-2">
          {#if social.provider === 'GitHub'}
            <GithubIcon />
          {/if}
          {#if social.provider === 'LinkedIn'}
            <LinkedinIcon />
          {/if}
          {social.provider}
        </a>
      {/each}
    </div>
  </div>
</div>
