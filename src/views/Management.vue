<template>
    <HeroSection />
    <Management />
    <WhyWorkWithUs />
    <StandOut />
    <ContactSection />
</template>

<script>
    import HeroSection from '../components/ProfilePage/Management/HeroSection.vue';
    import ContactSection from '../components/LandingPage/ContactSection.vue'
import Management from '../components/ProfilePage/Management/Management.vue';
import WhyWorkWithUs from '../components/ProfilePage/Management/WhyWorkWithUs.vue';
import StandOut from '../components/ProfilePage/Management/StandOut.vue';
    export default {
        components:{ HeroSection, ContactSection, Management, WhyWorkWithUs, StandOut }
    }
</script>

<style scoped>

</style>