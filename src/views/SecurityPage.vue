<template>
    <Header />
    <MiniServicesNavigations />
    <OverView />
    <Sectors />
    <Benefits />
    <ContactSection id="contact" />
</template>

<script>
    import ContactSection from '../components/LandingPage/ContactSection.vue';
import Benefits from '../components/ServicesPage/SecurityPage/Benefits.vue';
import Header from '../components/ServicesPage/SecurityPage/Header.vue';
    import MiniServicesNavigations from '../components/ServicesPage/SecurityPage/MiniServicesNavigations.vue';
    import OverView from '../components/ServicesPage/SecurityPage/OverView.vue';
    import Sectors from '../components/ServicesPage/SecurityPage/Sectors.vue'
    export default {
        components:{ Header, MiniServicesNavigations, OverView, Sectors, Benefits, ContactSection }
    }
</script>

<style scoped>

</style>