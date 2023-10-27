<script setup>
import ProductBadge from './ProductBadge.vue';


defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <div class="bg-primary-100 py-24">
        <div class="container mx-auto">
            <div>
                <div class="mb-12 text-center">
                    <p class="text-primary-600 font-bold text-4xl mb-6">{{ title }}</p>
                    <p class="text-primary-800 text-lg px-36">{{ description }}</p>
                </div>
                <div class="flex w-full justify-center gap-6">
                    <ProductBadge v-for="product in products" :key="product.id" :product="product"/>
                </div>
            </div>
        </div>
    </div>
</template>