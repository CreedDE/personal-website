<script lang="ts">
  import BlogCard from './blog-card.svelte';

  export let post: any;
</script>

<BlogCard href={`/posts/${post.slug}`}>
  <slot slot="eyebrow" name="eyebrow" />
  <slot slot="title">{post.title}</slot>
  <div slot="description" class="prose dark:prose-invert">
    {@html post.previewHtml}
  </div>
  <div slot="actions">
    <div class="flex items-center text-teal-500">
      <span class="text-sm font-medium">Read</span>
    </div>
  </div>
</BlogCard>

<style>
  .prose > :global(p) {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
