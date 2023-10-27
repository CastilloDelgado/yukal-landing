<script setup>
import backgroundImage from "../assets/background.jpeg"
import CompanyInfo from "./CompanyInfo.vue";
import Layout from "./Layout.vue";
import MainMessage from "./MainMessage.vue";
import WelcomeMessage from "./WelcomeMessage.vue"
</script>

<template>
  <Layout>
    <MainMessage />
    <CompanyInfo />
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