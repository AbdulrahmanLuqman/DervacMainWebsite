<template>
    <NeuroSection />
    <whoWeAreSection />
    <DiscoverOurCompany />
    <techCompanySection />
</template>

<script>
    import { defineComponent } from 'vue';
    import NeuroSection from '../components/LandingPage/NeuroSection.vue';
    import whoWeAreSection from '../components/LandingPage/whoWeAreSection.vue';
    import techCompanySection from '../components/LandingPage/TechCompanySection.vue';
import DiscoverOurCompany from '../components/DiscoverOurCompany.vue';
    export default defineComponent({
    data() {
        return {};
    },
    components: { NeuroSection, whoWeAreSection, techCompanySection, DiscoverOurCompany }
})
</script>

<style scoped>

</style>