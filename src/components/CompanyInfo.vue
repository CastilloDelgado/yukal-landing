<script setup>
import CustomButton from "./CustomButton.vue";
import image1 from "../assets/images/carousel/1.jpg"
import image2 from "../assets/images/carousel/2.jpg"
import image3 from "../assets/images/carousel/3.jpg"
import image4 from "../assets/images/carousel/4.jpg"
import image5 from "../assets/images/carousel/5.jpg"
import image6 from "../assets/images/carousel/6.jpg"
import image7 from "../assets/images/carousel/7.jpg"
import image8 from "../assets/images/carousel/8.jpg"
import ImageCarousel from "./ImageCarousel.vue";
</script>

<template>
    <div class="bg-primary-100 grid place-content-center">
        <div class="container mx-auto flex flex-col lg:flex-row py-12">
            <div class="hidden lg:inline-block lg:w-3/5 h-full grid place-content-center">
                <div>
                    <ImageCarousel :images="[image1,image2,image3,image4,image5,image6,image7,image8]" />
                </div>
            </div>
            <div class="py-12 mb-6 lg:w-2/5 text-center px-8 grid place-content-center">
                <div>
                    <p class="text-primary-600 text-4xl font-bold mb-8">This is the title</p>
                    <p class="text-center text-primary-800 lg:text-justify mb-8 px-4 md:px-16 lg:px-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quo incidunt assumenda repellat, pariatur vitae facere voluptatem dolorem illum dicta laboriosam eligendi culpa, aspernatur nisi ut et ipsum, tenetur quisquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed ad porro nobis cum maxime quisquam dicta debitis facere aliquam. Vel esse doloremque quae magni minima facilis pariatur odio reprehenderit!</p>
                    <CustomButton class="bg-primary-600 hover:bg-primary-700 text-primary-100" title="Newsletter" />
                </div>
            </div>
            <div class="lg:hidden lg:w-3/5 h-auto grid place-content-center">
                <ImageCarousel :images="[image1,image2,image3,image4,image5,image6,image7,image8]" />
            </div>
        </div>
    </div>
</template>