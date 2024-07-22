<template>
    <Header />
    <!-- <MiniServicesNavigations /> -->
    <OverView />
    <!-- <Sectors />
    <Benefits /> -->
    <ContactSection id="contact" />
</template>

<script>
    import ContactSection from '../components/LandingPage/ContactSection.vue';
import Benefits from '../components/ServicesPage/EducationalPage/Benefits.vue';
import Header from '../components/ServicesPage/EducationalPage/Header.vue';
    import MiniServicesNavigations from '../components/ServicesPage/EducationalPage/MiniServicesNavigations.vue';
    import OverView from '../components/ServicesPage/EducationalPage/OverView.vue';
    import Sectors from '../components/ServicesPage/EducationalPage/Sectors.vue'
    export default {
        components:{ Header, MiniServicesNavigations, OverView, Sectors, Benefits, ContactSection }
    }
</script>

<style scoped>

</style>