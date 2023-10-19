<script setup>
import backgroundImage from "../assets/background.jpeg"
import Layout from "./Layout.vue";
import WelcomeMessage from "./WelcomeMessage.vue"
</script>

<template>
  <Layout>
    <div class="background h-screen grid place-content-center ">
      <img class="background h-screen w-full" :src="backgroundImage" alt="Background">
      <WelcomeMessage />
    </div>
  </Layout>
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