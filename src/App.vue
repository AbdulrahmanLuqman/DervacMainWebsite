<script>
import {defineComponent} from 'vue'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'

export default defineComponent({
    data() {
        return {

        }
    },
    components: { Navbar, Footer }
})
</script>

<template>
  <Navbar />
  <RouterView />
  <!-- <Footer /> -->
</template>

<style scoped>

</style>
