<script setup>
import { ref } from 'vue';
import logo from "../assets/logo.png"
import textLogo from "../assets/text-logo.png"

const options = ref([
    {
        id: 1,
        title: "Inicio",
        alt: "inicio",
        link: "/"
    },
])

</script>

<template>
    <nav class="bg-gradient-to-r from-primary-700 to-primary-500 fixed w-full">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                    <img class="h-8 w-auto" :src="logo" alt="Yu-Kal Logo">
                    <img class="h-8 w-auto" :src="textLogo" alt="Yu-Kal Logo">
                </div>
            </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a v-for="option in options" :key="option.id" :href="option.link" class="font-bold bg-primary-400/70 hover:bg-primary-400/100 hover:scale-105 transition text-light-100 rounded-md px-3 py-2 text-sm" aria-current="page">
                                {{ option.title  }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>