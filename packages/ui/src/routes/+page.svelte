<script>
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import Button from '$lib/components/button.svelte';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ThemeToggle />

<Button>Documentation</Button>
<Button variant="primary">Documentation</Button>
<Button variant="link" href="/test">Documentation</Button>
