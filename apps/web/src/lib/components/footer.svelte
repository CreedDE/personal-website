<script lang="ts">
  let currentYear = new Date().getFullYear();
</script>

<footer class="mt-32 flex-none">
  <div class="sm:px-8">
    <div class="mx-auto w-full max-w-7xl lg:px-8">
      <div class="border-t border-border pb-16 pt-10">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div
                class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200"
              >
                <a
                  href="/"
                  class="transition-colors duration-200 hover:text-primary text-foreground">About</a
                >
                <a
                  href="/"
                  class="transition-colors duration-200 hover:text-primary text-foreground"
                >
                  Projects
                </a>
                <a
                  href="/"
                  class="transition-colors duration-200 hover:text-primary text-foreground"
                >
                  Imprint
                </a>
              </div>
              <p class="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {currentYear} thmoe. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
