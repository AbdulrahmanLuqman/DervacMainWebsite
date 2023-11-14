<template>
    <HeroSection />
    <MiniNavigation />
    <Solutions />
    <History />
    <ContactSection />
</template>

<script>
import HeroSection from '../components/AboutPage/HeroSection.vue';
import MiniNavigation from '../components/MiniNavigations.vue'
import Solutions from '../components/AboutPage/Solutions.vue'
import History from '../components/AboutPage/History.vue'
import ContactSection from '../components/LandingPage/ContactSection.vue';

    export default {
    components: { HeroSection, MiniNavigation, Solutions, History, ContactSection }
}
</script>

<style scoped>

</style>