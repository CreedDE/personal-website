<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  let { Content } = data;
  let post = data.meta;
</script>

<article>
  <h1>{post.title}</h1>

  <p>Reading Time? {post.readingTime.text}</p>

  <div>
    <svelte:component this={Content} />
  </div>
</article>
