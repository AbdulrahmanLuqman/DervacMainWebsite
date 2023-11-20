<template>
    <HeroSection />
    <DervacWay />
    <ContactSection />
</template>

<script>
import HeroSection from '../components/ProfilePage/CoreExpertisePage/HeroSection.vue';
import DervacWay from '../components/ProfilePage/CoreExpertisePage/DervacWay.vue'
import ContactSection from '../components/LandingPage/ContactSection.vue'

    export default {
    components: { HeroSection, DervacWay, ContactSection }
}
</script>

<style scoped>

</style>