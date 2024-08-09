<template>
    <HeroSection />
    <Apply />
    <ContactSection />
</template>

<script>
import ContactSection from '../components/LandingPage/ContactSection.vue';
import Apply from '../components/ProfilePage/Careers/Apply.vue';
import HeroSection from '../components/ProfilePage/Careers/HeroSection.vue';

    export default {
    components: { HeroSection, ContactSection, Apply }
}
</script>

<style scoped>

</style>