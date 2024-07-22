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
import Benefits from '../components/ServicesPage/SoftwarePage/Benefits.vue';
import Header from '../components/ServicesPage/SoftwarePage/Header.vue';
    import MiniServicesNavigations from '../components/ServicesPage/SoftwarePage/MiniServicesNavigations.vue';
    import OverView from '../components/ServicesPage/SoftwarePage/OverView.vue';
    import Sectors from '../components/ServicesPage/SoftwarePage/Sectors.vue'
    export default {
        components:{ Header, MiniServicesNavigations, OverView, Sectors, Benefits, ContactSection }
    }
</script>

<style scoped>

</style>