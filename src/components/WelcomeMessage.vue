<script setup>
import facebookIcon from "../assets/icons/facebook.png"
import instagramIcon from "../assets/icons/instagram.png"
import youtubeIcon from "../assets/icons/youtube.png"
import logo from "../assets/logo.png"
import textLogo from "../assets/text-logo.png"

</script>

<template>
    <!-- Message -->
    <div class="bg-primary-500/50 text-center md:px-24 md:py-16 px-6 py-12 rounded"> 
      <div class="flex justify-center mb-6">
        <img :src="logo" class="h-24" alt="">
        <img :src="textLogo" class="h-24" alt="">
      </div>
      <p class="text-orange-300 text-3xl font-serif font-bold">Sitio en construcción</p>
      <p class="text-orange-100 ">Visitanos muy pronto para más informacion</p>
      <div class="mt-8">
        <p class="mb-4 text-2xl text-orange-100 font-serif">
          Nuestras Redes Sociales
        </p>
        <div class="flex justify-around text-orange-100 ">
          <div>
            <a target="_blank" href="https://www.instagram.com/yukal55/">
                <div class="w-full flex justify-center transition">
                    <img :src="instagramIcon" alt=""  class="w-8 transition hover:scale-125" />
                </div>
                <p>Instagram</p>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61551924016783">
                <div class="w-full flex justify-center transition">
                    <img :src="facebookIcon" alt=""  class="w-8 transition hover:scale-125" />
                </div>
                <p>Facebook</p>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.youtube.com/channel/UCES11jeVrqq2QrK8tgrBLtQ">
                <div class="w-full flex justify-center transition">
                    <img :src="youtubeIcon" alt="" class="w-8 transition hover:scale-125" />
                </div>
                <p>YouTube</p>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>