<template>
    <Header />
    <Support />
    <ContactSection />
</template>

<script>
    import Header from '../components/CustomerSupport/Header.vue';
    import Support from '../components/CustomerSupport/Support.vue';
import ContactSection from '../components/LandingPage/ContactSection.vue';
    export default {
        components:{ Header, Support, ContactSection }
    }
</script>

<style scoped>

</style>