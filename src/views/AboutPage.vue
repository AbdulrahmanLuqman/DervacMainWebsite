<template>
    <HeroSection />
    <MiniNavigation />
    <Solutions />
    <History />
    <ContactSection />
</template>

<script>
import HeroSection from '../components/ProfilePage/AboutPage/HeroSection.vue';
import Solutions from '../components/ProfilePage/AboutPage/Solutions.vue'
import History from '../components/ProfilePage/AboutPage/History.vue'
import ContactSection from '../components/LandingPage/ContactSection.vue';

    export default {
    components: { HeroSection, Solutions, History, ContactSection }
}
</script>

<style scoped>

</style>