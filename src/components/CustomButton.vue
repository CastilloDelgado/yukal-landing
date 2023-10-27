<script setup>

const props = defineProps({
    title: {
        type: String,
        default: "Title Undefined"
    },
    color: {
        type: String,
        default: 'primary'
    }
})

</script>
<template>
    <button 
        class="px-4 py-2 hover:scale-105 transition rounded font-bold"
    >
        {{  title  }}
    </button>
</template>