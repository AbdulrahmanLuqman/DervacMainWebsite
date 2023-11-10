<template>
    <NeuroSection />
    <whoWeAreSection />
    <DiscoverOurCompany />
    <CompanyInNumbers />
    <WhyChooseUs />
    <techCompanySection />
    <ContactSection />
</template>

<script>
    import { defineComponent } from 'vue';
    import NeuroSection from '../components/LandingPage/NeuroSection.vue';
    import whoWeAreSection from '../components/LandingPage/whoWeAreSection.vue';
    import techCompanySection from '../components/LandingPage/TechCompanySection.vue';
    import DiscoverOurCompany from '../components/LandingPage/DiscoverOurCompany.vue';
    import CompanyInNumbers from '../components/LandingPage/CompanyInNumbers.vue';
    import WhyChooseUs from '../components/LandingPage/WhyChooseUs.vue';
    import ContactSection from '../components/LandingPage/ContactSection.vue'
    export default defineComponent({
    data() {
        return {};
    },
    components: { NeuroSection, whoWeAreSection, techCompanySection, DiscoverOurCompany, CompanyInNumbers, WhyChooseUs, ContactSection }
})
</script>

<style scoped>

</style>