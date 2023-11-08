<template>
    <!-- <NeuroSection /> -->
    <whoWeAreSection />
    <techCompanySection />
</template>

<script>
    import { defineComponent } from 'vue';
    import NeuroSection from '../components/LandingPage/NeuroSection.vue';
    import whoWeAreSection from '../components/LandingPage/whoWeAreSection.vue';
    import techCompanySection from '../components/LandingPage/TechCompanySection.vue';
    export default defineComponent({
    data() {
        return {};
    },
    components: { NeuroSection, whoWeAreSection, techCompanySection }
})
</script>

<style scoped>

</style>