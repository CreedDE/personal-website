<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';

  let darkMode = false;

  function handleSwitchDarkMode() {
    darkMode = !darkMode;

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }

  onMount(() => {
    if (browser) {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
        darkMode = true;
      } else {
        document.documentElement.classList.remove('dark');
        darkMode = false;
      }
    }
  });
</script>

<div>
  <input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
  <label for="theme-toggle" />
</div>

<style lang="postcss">
  #theme-toggle {
    @apply invisible;
  }

  #theme-toggle + label {
    @apply inline-block cursor-pointer h-4 w-4 absolute top-6 right-24 rounded-full duration-300 content-[''];
  }

  #theme-toggle:not(:checked) + label {
    @apply bg-amber-400;
  }

  #theme-toggle:checked + label {
    @apply bg-transparent;
    box-shadow: inset -6px -5px 1px 1px #fff;
  }
</style>
