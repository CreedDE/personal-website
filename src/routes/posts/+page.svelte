<script lang="ts">
  import PostList from '$lib/components/post-list.svelte';

  export let data;

  let { posts } = data;
</script>

<div class="mt-16 sm:mt-20">
  <PostList {posts} />
</div>
