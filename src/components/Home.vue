<script setup>
import backgroundImage from "../assets/background.jpg"
import WelcomeMessage from "./WelcomeMessage.vue"
</script>

<template>
  <div class="background h-screen grid place-content-center ">
    <img class="background h-screen w-screen" :src="backgroundImage" alt="Background">
    <WelcomeMessage />
  </div>
</template>

<style focused>

img.background {
  position: absolute;
  z-index: -1;
  object-fit: cover;
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(1px);
}

</style>