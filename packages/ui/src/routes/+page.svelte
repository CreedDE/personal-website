<script>
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import Button from '$lib/components/button.svelte';
  import * as Card from '$lib/components/card';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ThemeToggle />

<Button>Documentation</Button>
<Button variant="primary">Documentation</Button>
<Button variant="link" href="/test">Documentation</Button>

<div class="w-96 mt-12">
  <Card.Root>
    <Card.Header>
      <Card.Title>
        <h2>Hello World</h2>
      </Card.Title>
    </Card.Header>
    <Card.Content>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repudiandae aperiam
        aliquam debitis culpa veniam fuga temporibus veritatis nihil fugiat ullam libero! Facilis
        ullam amet itaque temporibus veritatis quis asperiores!
      </div>
    </Card.Content>
  </Card.Root>
</div>
