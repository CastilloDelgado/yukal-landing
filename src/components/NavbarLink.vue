<script setup> 
defineProps({
    option: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <p  
        class="text-light-200 mr-3 hover:scale-105 transition"
        :class="{
            'font-bold': true
        }"
    >
        <a :href="option.link" >
            {{ option.title }}
        </a>
    </p>
</template>