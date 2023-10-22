<script lang="ts">
  export let post: any;
</script>

<article class="mb-10 rounded-lg border border-border p-5">
  <a href={`/posts/${post.slug}`} class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-2xl font-semibold">{post.title}</h2>
      <p class="text-sm font-medium text-secondary-foreground">{post.date}</p>
    </div>

    <div>
      {@html post.previewHtml}
    </div>
  </a>
</article>
