<script setup>
import CompanyInfo from "./CompanyInfo.vue";
import MainMessage from "./MainMessage.vue";
import Layout from "./Layout.vue";

import image1 from "../assets/images/carousel/1.jpg"
import image2 from "../assets/images/carousel/2.jpg"
import image3 from "../assets/images/carousel/3.jpg"
import image4 from "../assets/images/carousel/4.jpg"
import image5 from "../assets/images/carousel/5.jpg"
import image6 from "../assets/images/carousel/6.jpg"
import image7 from "../assets/images/carousel/7.jpg"
import image8 from "../assets/images/carousel/8.jpg"

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
        image1,image2,image3,image4,image5,image6,image7,image8
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