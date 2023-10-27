<script setup>
import logo from "../assets/logo-dark.png"
import textLogo from "../assets/text-logo-dark.png"
import CustomButton from "./CustomButton.vue";

import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import image4 from "../assets/images/4.jpg"

</script>

<template>
    <div class="bg-light-100 h-screen">
        <div class="container h-full mx-auto grid place-content-center">
            <div class="flex w-full h-full">
                <div class="w-3/5">
                    <div class="h-full grid place-content-center">
                        <div class="flex justify-center mb-6">
                            <img :src="logo" class="h-44" alt="">
                            <img :src="textLogo" class="h-36" alt="">
                        </div>
                        <p class="text-2xl text-center text-primary-900 mx-16 mb-4">
                            Acompañar e impulsar el despertar espiritual y de consciencia <b>resideñando el camino.</b>
                        </p>
                        <div class="flex justify-center">
                            <CustomButton class="text-xl bg-primary-600 hover:bg-primary-600 text-primary-100" title="Suscribete" color="light"/>
                        </div>
                    </div>
                </div>
                <div class="w-2/5 columns-2 gap-2 h-full">
                    <img class="w-full rounded aspect-square object-cover mb-2" :src="image3" />
                    <img class="w-full rounded aspect-video  object-cover" :src="image1" />
                    <img class="w-full rounded aspect-video  object-cover mb-2" :src="image2" />
                    <img class="w-full rounded aspect-square object-cover" :src="image4" />
                </div>
            </div>
        </div>
    </div>  
</template>