<script lang="ts">
  import type { HTMLAttributes, MouseEventHandler } from 'svelte/elements';
  import { cn } from '$lib/utils.js';
  import { changeColorOpacity } from '@riadh-adrani/utils';

  let color = '#16A34A';

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props['class'] = undefined;
  export { className as class };

  let el: HTMLElement;

  $: dropColor = changeColorOpacity(color, 0.15);
  $: bgColor = changeColorOpacity(color, 0.01);

  $: {
    if (el) {
      el.style.setProperty('--drop-color', dropColor);
      el.style.setProperty('--bg-color', bgColor);
    }
  }

  const onHover: MouseEventHandler<HTMLDivElement> = (ev) => {
    const target = ev.currentTarget;

    const rect = target.getBoundingClientRect();

    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    el.style.setProperty('--drop-x', `${x}px`);
    el.style.setProperty('--drop-y', `${y}px`);
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={'div'}
  class={cn('rounded-lg border bg-card text-card-foreground shadow-sm card', className)}
  on:mousemove={onHover}
  bind:this={el}
  style:bgColor={'red'}
>
  <slot />
</svelte:element>

<style>
  .card {
    --bg-color: transparent;
    --drop-color: transparent;
    --drop-x: 0;
    --drop-y: 0;
  }

  .card:hover {
    background-color: var(--bg-color);
    background-image: radial-gradient(
      circle at var(--drop-x) var(--drop-y),
      var(--drop-color),
      transparent
    );
  }
</style>
