<script setup>
import CompanyInfo from "./CompanyInfo.vue";
import MainMessage from "./MainMessage.vue";
import Layout from "./Layout.vue";

import carouselImage1 from "../assets/images/carousel/1.jpg"
import carouselImage2 from "../assets/images/carousel/2.jpg"
import carouselImage3 from "../assets/images/carousel/3.jpg"
import carouselImage4 from "../assets/images/carousel/4.jpg"
import carouselImage5 from "../assets/images/carousel/5.jpg"
import carouselImage6 from "../assets/images/carousel/6.jpg"
import carouselImage7 from "../assets/images/carousel/7.jpg"
import carouselImage8 from "../assets/images/carousel/8.jpg"
import CompanyProducts from "./CompanyProducts.vue";

</script>

<template>
  <Layout>
    <MainMessage />
    <CompanyInfo
      title="This is the title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus quos expedita, 
        quam suscipit hic debitis illum iusto incidunt, doloribus fugiat rerum non tenetur deserunt 
        iure fuga? Mollitia, perspiciatis eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Molestiae possimus quos expedita, quam suscipit hic debitis illum iusto incidunt, doloribus 
        fugiat rerum non tenetur deserunt iure fuga? Mollitia, perspiciatis eius."
      :images="[
        carouselImage1,
        carouselImage2,
        carouselImage3,
        carouselImage4,
        carouselImage5,
        carouselImage6,
        carouselImage7,
          carouselImage8
      ]"
    />
    <CompanyProducts
      title="Nuestros productos"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolores magni, nam ad quaerat aspernatur eos quas exercitationem optio qui inventore nihil sapiente ipsum perferendis laborum laudantium illum similique eligendi!"
      :products="[
        {
          id: 1,
          title: 'Producto Tipo 1',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus quos expedit.',
          image: carouselImage1
        },
        {
          id: 2,
          title: 'Producto Tipo 2',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus quos expedit.',
          image: carouselImage2
        },
        {
          id: 3,
          title: 'Producto Tipo 3',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus quos expedit.',
          image: carouselImage3
        },
      ]"
    />
  </Layout>
  <p>
    
  </p>
</template>

<style focused>

img.background {
  position: absolute;
  z-index: -1;
  object-fit: cover;
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(10px);
}

</style>