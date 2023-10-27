<script setup>
import logo from "../assets/logo-dark.png"
import textLogo from "../assets/text-logo-dark.png"
import CustomButton from "./CustomButton.vue";

</script>

<template>
    <div class="bg-light-100 h-screen">
        <div class="container h-full mx-auto grid place-content-center">
            <div class="flex w-full">
                <div class="w-2/3">
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
                <div class="w-1/3">
                   
                </div>
            </div>
        </div>
    </div>  
</template>