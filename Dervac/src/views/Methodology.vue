<template>
    <HeroSection />
    <Approach />
    <ContactSection />
</template>

<script>
import ContactSection from '../components/LandingPage/ContactSection.vue';
import Approach from '../components/ProfilePage/Methodology/Approach.vue';
import HeroSection from '../components/ProfilePage/Methodology/HeroSection.vue';

    export default {
    components: { HeroSection, Approach, ContactSection }
}
</script>

<style scoped>

</style>