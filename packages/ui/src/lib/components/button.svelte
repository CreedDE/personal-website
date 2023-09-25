<script lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { type VariantProps, cva } from 'class-variance-authority';
  import { cn } from '$lib/utils.js';

  const buttonVariants = cva(
    'inline-flex items-center justify-center font-medium whitespace-nowrap m-0 rounded-lg border ease-out duration-200 shadow-sm',
    {
      variants: {
        size: {
          default: 'py-2 px-4 text-sm'
        },
        variant: {
          default: 'bg-secondary/70 border-border text-foreground hover:bg-secondary',
          primary:
            'bg-primary/70 border-primary text-background hover:bg-primary dark:text-foreground',
          link: 'text-foreground hover:bg-secondary border-0 shadow-none',
          icon: 'text-foreground border-0 shadow-none dark:text-foreground'
        }
      },
      defaultVariants: {
        variant: 'default',
        size: 'default'
      }
    }
  );

  type Variant = VariantProps<typeof buttonVariants>['variant'];
  type Size = VariantProps<typeof buttonVariants>['size'];

  type $$Props = ButtonPrimitive.Props & {
    variant?: Variant;
    size?: Size;
  };

  type $$Events = ButtonPrimitive.Events;

  let className: $$Props['class'] = undefined;
  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'default';
  export let builders: $$Props['builders'] = [];
  export { className as class };
</script>

<ButtonPrimitive.Root
  {builders}
  class={cn(buttonVariants({ variant, size, className }))}
  {...$$restProps}
  on:click
  on:keydown
>
  <slot />
</ButtonPrimitive.Root>
