<template>
    <ContactCards />
    <FormPage />
    <ContactSection />
</template>

<script>
import ContactCards from '../components/ContactPage/ContactCards.vue';
import FormPage from '../components/ContactPage/FormPage.vue'
import ContactSection from '../components/LandingPage/ContactSection.vue';

    export default {
    components: { ContactCards,FormPage, ContactSection }
}
</script>

<style scoped>

</style>