<script setup>
import { ref } from 'vue';
import logo from "../assets/logo.png"
import textLogo from "../assets/text-logo.png"
import NavbarLink from './NavbarLink.vue';
import CustomButton from './CustomButton.vue';

const options = ref([
    {
        id: 1,
        title: "Inicio",
        alt: "inicio",
        link: "/",
        selected: true
    },
    {
        id: 2,
        title: "Nuestros Servicios",
        alt: "inicio",
        link: "/",
        selected: false
    },
    {
        id: 3,
        title: "Contacto",
        alt: "inicio",
        link: "/",
        selected: false
    },
])

</script>

<template>
    <nav class="bg-primary-900 fixed w-full z-10">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-8 w-auto" :src="logo" alt="Yu-Kal Logo">
                        <img class="h-8 w-auto" :src="textLogo" alt="Yu-Kal Logo">
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div class="align-middle hidden sm:flex">
                        <NavbarLink v-for="option in options" :key="option.id" :option="option"  />
                        <CustomButton class="text-sm bg-primary-600 hover:bg-primary-700 hover:bg-primary-600 text-primary-100" title="Contactanos"/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>