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
import Benefits from '../components/ServicesPage/TrainingServices/Benefits.vue';
import Header from '../components/ServicesPage/TrainingServices/Header.vue';
    import MiniServicesNavigations from '../components/ServicesPage/TrainingServices/MiniServicesNavigations.vue';
    import OverView from '../components/ServicesPage/TrainingServices/OverView.vue';
    import Sectors from '../components/ServicesPage/TrainingServices/Sectors.vue'
    export default {
        components:{ Header, MiniServicesNavigations, OverView, Sectors, Benefits, ContactSection }
    }
</script>

<style scoped>

</style>