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

import productsImage1 from "../assets/images/products/1.jpg"
import productsImage2 from "../assets/images/products/2.jpg"
import productsImage3 from "../assets/images/products/3.jpg"



import CompanyProducts from "./CompanyProducts.vue";
import ContactForm from "./ContactForm.vue";

</script>

<template>
  <Layout>
    <MainMessage />
    <CompanyInfo
      title="YU - KAL"
      description="Es la fusión de nuestros nombres, nuestra amistad, el compartir cosas en común y sobre todo el llamado al servicio hacia los demás. Este proyecto nace desde el amor de transmitir nuestras experiencias del camino espiritual que ambas hemos transitado y el aprendizaje que hemos adquirido a través del tiempo nos es grato compartirlo."
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
      title="Nuestros Servicios"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolores magni, nam ad quaerat aspernatur eos quas exercitationem optio qui inventore nihil sapiente ipsum perferendis laborum laudantium illum similique eligendi!"
      :products="[
        {
          id: 1,
          title: 'Despertar de conciencia',
          description: 'El viaje del ser humano es el despertar de conciencia, el cual nos puede llegar a temprana edad o incluso antes de trasmutar.',
          image: productsImage1
        },
        {
          id: 2,
          title: 'Despertar espiritual',
          description: 'Son experiencias cercanas a la es el polo positivo femenino. Tú puedes estar muerte o con experiencia de medicina sagrada, en despierto en consciencia y no en espíritu o al un parto, cuando te rompen el corazón, esto alude revés, esto es la densidad de la dualidad y se tiene al chacra corazón porque te contraes o te expandes que estar en balance. Los dos se tiene que a través de estas experiencias.',
          image: productsImage2
        },
        {
          id: 3,
          title: 'Servicios',
          description: 'Mujeres medicina, talleres, Ceremonias particulares, Escuela mística, Meditaciones guiadas, etc...',
          image: productsImage3
        },
      ]"
    />
    <ContactForm message="¿Tienes alguna duda? Escribenos por este medio."/>
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