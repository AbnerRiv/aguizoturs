<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

function showDropdownContent(){
    let elem = document.getElementById('lang-dropdown');
    if(elem?.classList.contains('hidden')){
        elem?.classList.remove('hidden')
        elem?.classList.add('flex')
    }else{
        elem?.classList.add('hidden')
        elem?.classList.remove('flex')
    }
}

function selectLanguage(language: string){
    let elem = document.getElementById('lang-dropdown');
    elem?.classList.add('hidden')
    elem?.classList.remove('flex')
}

</script>
<template src="./Header.html">
</template>

<style scoped lang="scss" src="./Header.scss">
</style>