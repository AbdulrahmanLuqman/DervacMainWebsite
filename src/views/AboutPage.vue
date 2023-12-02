<template>
    <HeroSection />
    <Solutions />
    <History />
    <Missions />
    <ContactSection />
</template>

<script>
import HeroSection from '../components/ProfilePage/AboutPage/HeroSection.vue';
import Solutions from '../components/ProfilePage/AboutPage/Solutions.vue'
import History from '../components/ProfilePage/AboutPage/History.vue'
import ContactSection from '../components/LandingPage/ContactSection.vue';
import Missions from '../components/ProfilePage/AboutPage/Missions.vue';

    export default {
    components: { HeroSection, Solutions, History, ContactSection, Missions }
}
</script>

<style scoped>

</style>