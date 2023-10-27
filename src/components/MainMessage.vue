<script setup>
import logo from "../assets/logo-dark.png"
import textLogo from "../assets/text-logo-dark.png"
import CustomButton from "./CustomButton.vue";
import { onMounted, ref } from "vue";

import image1 from "../assets/images/1.jpg"
import image2 from "../assets/images/2.jpg"
import image3 from "../assets/images/3.jpg"
import image4 from "../assets/images/4.jpg"

const showTitle = ref(false)
const showGallery = ref(false)

onMounted(() => {
    showTitle.value = true
    showGallery.value = true
})

</script>

<template>
    <div class="bg-light-200 pt-16 pb-6 lg:pt-6 lg:h-screen background px-2">
        <div class="container h-full mx-auto grid place-content-center">
            <div class="flex flex-col lg:flex-row justify-center w-full">
                <div class="lg:w-3/5 md:py-12">
                    <Transition>
                        <div v-if="showTitle" class="h-[80vh] md:h-full grid place-content-center">
                            <div class="flex justify-center mb-6">
                                <img :src="logo" class="h-24 md:h-44" alt="">
                                <img :src="textLogo" class="h-20 md:h-36" alt="">
                            </div>
                            <p class="text-2xl text-center text-primary-900  mx-2 lg:mx-16 mb-6">
                                Acompañar e impulsar el despertar espiritual y de consciencia <b>resideñando el camino.</b>
                            </p>
                            <div class="flex justify-center">
                                <CustomButton class="text-xl bg-primary-600 hover:bg-primary-700 text-primary-100" title="Contactanos" />
                            </div>
                        </div>
                    </Transition>
                </div>
                <div class="lg:w-2/5 h-full mb-6">
                    <Transition name="slide-fade">
                        <div v-if="showGallery" class="columns-2 gap-2">   
                            <img class="w-full rounded aspect-square object-cover mb-2" :src="image3" />
                            <img class="w-full rounded aspect-video  object-cover mb-2" :src="image1" />
                            <img class="w-full rounded aspect-video  object-cover mb-2" :src="image2" />
                            <img class="w-full rounded aspect-square object-cover mb-2" :src="image4" />
                        </div>
                    </Transition>     
                </div>
            </div>
        </div>
    </div>  
</template>

<style scoped>
.background {
    background-image: url("../assets/graphics/welcome-background.svg");
    object-fit: cover;
    background-repeat: no-repeat;
}

.v-enter-active {
  transition: opacity 1s ease;
}

.v-enter-from {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 1.5s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>