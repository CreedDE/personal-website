<script lang="ts">
  import { THEMES } from '$lib/utils/theme';
  import { Sun } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let currentTheme: string;

  onMount(() => {
    const savedTheme = document.documentElement.getAttribute('data-theme');
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      currentTheme = savedTheme;
      return;
    }

    const preferenceIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme = preferenceIsDark ? THEMES.DARK : THEMES.LIGHT;
    setTheme(theme);
  });

  function setTheme(theme: string) {
    if (!Object.values(THEMES).includes(theme)) return;
    const oneYear = 60 * 60 * 24 * 365;

    document.cookie = `theme=${theme}; max-age=${oneYear}; path=/`;

    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
  }

  function toggleTheme(): void {
    const theme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(theme);
  }
</script>

<button on:click={toggleTheme}>
  <Sun />
</button>
