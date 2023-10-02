<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Impressum • thmoe</title>
</svelte:head>

<div class="flex flex-col gap-4">
  <div>
    <h1 class="font-bold text-2xl">Impressum</h1>
    <p>Angaben gemäß § 5 TMG</p>
  </div>

  <div>
    <p>{data.imprint.fullName}</p>
    <p>{data.imprint.street}</p>
    <p>{data.imprint.postal}</p>
  </div>

  <div>
    <h2 class="font-bold">Kontakt:</h2>
    <p>{data.imprint.email}</p>
  </div>

  <div>
    <h2 class="font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
    <p>{data.imprint.fullName}</p>
    <p>{data.imprint.street}</p>
    <p>{data.imprint.postal}</p>
  </div>

  <div>
    <h2 class="font-bold">{data.imprint.contentTitle}</h2>
    <p>{data.imprint.contentText[0].children[0].text}</p>
  </div>

  <div>
    <h2 class="font-bold">{data.imprint.linkTitle}</h2>
    <p>{data.imprint.linkText[0].children[0].text}</p>
  </div>

  <div>
    <h2 class="font-bold">{data.imprint.copyrightTitle}</h2>
    <p>{data.imprint.copyrightText[0].children[0].text}</p>
  </div>
</div>
