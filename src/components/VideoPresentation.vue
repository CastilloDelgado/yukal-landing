<script setup>
import CustomButton from './CustomButton.vue';


defineProps({
    video: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="bg-secondary-100 pb-0 md:pb-8 lg:pb-4 ">
        <div class="lg:h-[70vh] mx-auto w-full container flex grid-place-content-center">
            <div class="flex flex-col lg:flex-row">
                <div class="lg:w-1/2"> 
                    <div class="w-full h-full grid place-content-center">
                        <div class="py-16 lg:py-2 px-12">
                            <p class="text-4xl text-center font-bold text-secondary-600 mb-4">Title</p>
                            <p class="text-justify text-lg text-secondary-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis aliquid illum facere asperiores dolorum cupiditate quos corporis, omnis rerum eligendi commodi quasi, libero enim quam sed dolore. Rerum, vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste nemo eaque quis modi ullam non, aspernatur delectus. Et obcaecati facilis a quae consequatur fuga aliquam doloribus suscipit quidem ipsam?</p>
                            <div class="w-full flex justify-center mt-4">
                                <CustomButton title="Más información" class="bg-secondary-600 hover:bg-secondary-700 text-secondary-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 ">
                    <video class="w-auto lg:h-full" height="100hv" :src="video" controls />
                </div>
            </div>
        </div>
    </div>
</template>