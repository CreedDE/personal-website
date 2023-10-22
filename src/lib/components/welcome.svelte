<script lang="ts">
  import { Github, Linkedin } from 'lucide-svelte';
  import Button from './ui/button.svelte';

  export let pageTitle: string;
  export let description: string;
</script>

<div class="max-w-2xl">
  <h1 class="text-4xl font-bold sm:text-5xl">
    <span
      class="text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-green-500 to-green-400"
    >
      {pageTitle}
    </span>
  </h1>
  <p class="mt-6 text-base text-foreground">
    {description}
  </p>
  <div class="mt-6 flex gap-2">
    <Button variant="icon" href="https://github.com/CreedDE" target="_blank">
      <Github />
    </Button>
    <Button variant="icon" href="https://www.linkedin.com/in/tim-holz-374a69170/" target="_blank">
      <Linkedin />
    </Button>
  </div>
</div>
