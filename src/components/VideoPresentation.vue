<script setup>

defineProps({
    video: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="h-[90vh] mx-auto w-full container flex grid-place-content-center">
        <div class="flex">
            <div class="w-1/2"> 
                <div class="w-full h-full grid place-content-center">
                    <div class="px-12">
                        <p>Title title</p>
                        <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis aliquid illum facere asperiores dolorum cupiditate quos corporis, omnis rerum eligendi commodi quasi, libero enim quam sed dolore. Rerum, vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste nemo eaque quis modi ullam non, aspernatur delectus. Et obcaecati facilis a quae consequatur fuga aliquam doloribus suscipit quidem ipsam?</p>
                    </div>
                </div>
            </div>
            <div class="w-1/2 h-full">
                <video class="h-full" :src="video" controls />
            </div>
        </div>
    </div>
</template>