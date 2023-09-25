<script lang="ts">
  import { Button, Card, ThemeToggle } from 'ui';
  import type { PageData } from './$types';
  import Welcome from '$lib/components/welcome.svelte';

  export let data: PageData;
</script>

<div class="min-h-screen">
  <main>
    <Welcome pageTitle={data.home.title} />

    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt laborum voluptates
      animi quos iusto veniam perspiciatis explicabo voluptatum reiciendis harum repellat amet,
      dolores ipsum et quibusdam quam magni nisi?Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Tempore praesentium facere soluta cupiditate reiciendis suscipit asperiores alias. Ut
      corporis consequatur autem doloribus optio exercitationem, iusto ab laudantium eveniet, quia
      id Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo saepe modi quam
      dolore culpa quibusdam, harum, repudiandae tempore, sequi dolor dicta. Nobis laborum veritatis
      quam alias nihil, omnis ducimus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Totam voluptate sunt doloribus quisquam, rerum ab minus, in deleniti similique id alias porro
      quasi architecto sit repellendus, eius at magni! Laboriosam? Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Facilis nam iusto fugiat, magnam beatae quasi architecto, nobis
      officia ullam facere obcaecati consequatur impedit voluptas ipsum asperiores inventore
      possimus. Consequatur, vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
      nostrum quis quae aperiam tempora accusantium doloribus corporis minus, amet aliquam ab
      delectus ducimus. Magni aliquam beatae porro nulla corporis aspernatur. Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Vero sint beatae ad eligendi culpa amet modi? Voluptatum
      fuga repellat mollitia neque ipsa nulla porro incidunt eum impedit omnis, at blanditiis! Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Nihil sapiente rem corrupti ullam
      consectetur nesciunt molestias sit harum soluta excepturi, quasi est, animi tempora ipsam
      incidunt magni, aspernatur repellat! Consequatur.
    </div>
    <div>
      <Card.Root>
        <Card.Header>
          <Card.Title>Hello World</Card.Title>
        </Card.Header>
        <Card.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum consectetur aliquam
          consequuntur, quas laudantium repudiandae ducimus quasi corporis? Quos, porro dolor.
          Necessitatibus praesentium doloribus hic ratione amet unde tenetur.
        </Card.Content>
      </Card.Root>
    </div>
  </main>
</div>
