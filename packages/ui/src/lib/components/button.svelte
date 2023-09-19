<script lang="ts">
  const coolVar = 'Hello';
</script>

<button class="btn" on:click>
  <slot />
</button>

<style>
  .btn {
    background-color: teal;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: white;
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: none;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
  }
</style>
