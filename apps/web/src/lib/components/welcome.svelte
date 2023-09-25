<script lang="ts">
  export let pageTitle: string;
</script>

<div class="relative -mt-[65px]">
  <div
    class="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 md:pt-16 overflow-hidden"
  >
    <div class="relative">
      <div class="mx-auto">
        <div
          class="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center"
        >
          <div
            class="relative z-10 appear-first lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8"
          >
            <div class="flex flex-col items-center">
              <h1 class="text-4xl sm:text-5xl sm:leading-none lg:text-7xl">
                <span
                  class="block text-transparent bg-clip-text bg-gradient-to-b from-black/80 to-black dark:from-[#ededed] dark:to-[#bbb]"
                >
                  Welcome to my
                </span>
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-green-500 to-green-400 block md:ml-0"
                >
                  {pageTitle}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
