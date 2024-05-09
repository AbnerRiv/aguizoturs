<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    isFullWidth: {
        type: Boolean,
        default: false
    }
});

let images: string[] = ['/src/assets/images/imageTesting1.jpg', '/src/assets/images/imageTesting2.jpg', '/src/assets/images/imageTesting3.jpg']

let selectedImageIndex = ref(0);

function nextImage(){
    if(selectedImageIndex.value + 1 > images.length - 1){
        selectedImageIndex.value = 0;
    }else{
        selectedImageIndex.value++;
    }
}

function prevImage(){
    if(selectedImageIndex.value - 1 < 0){
        selectedImageIndex.value = images.length - 1;
    }else{
        selectedImageIndex.value--;
    }
}

</script>

<template src="./Carousel.html">
</template>

<style scoped lang="scss" src="./Carousel.scss">
</style>