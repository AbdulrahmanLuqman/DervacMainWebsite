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
import Benefits from '../components/ServicesPage/BusinessPage/Benefits.vue';
import Header from '../components/ServicesPage/BusinessPage/Header.vue';
    import MiniServicesNavigations from '../components/ServicesPage/BusinessPage/MiniServicesNavigations.vue';
    import OverView from '../components/ServicesPage/BusinessPage/OverView.vue';
    import Sectors from '../components/ServicesPage/BusinessPage/Sectors.vue'
    export default {
        components:{ Header, MiniServicesNavigations, OverView, Sectors, Benefits, ContactSection }
    }
</script>

<style scoped>

</style>