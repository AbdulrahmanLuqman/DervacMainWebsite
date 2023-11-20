<template>
    <section class="flex flex-col gap-14 items-center my-20 lg:px-20 md:px-16 px-10">
        <div class="w-full flex flex-col items-center gap-8">
            <h2 class=" text-center lg:text-4xl text-2xl font-bold text-[#0E2B61]">Innovative Turnkey Solutions: Dervac's Strategic Approach to Technology Excellence</h2>
            <p class="text-[#8D8EA3] text-center font-semibold">Dervac combines strategic thinking, distinctive design, and emerging technologies to deliver innovative solutions that consistently break new ground. We strive to be the first choice provider of the Turnkey Solutions & Services, Outsourcing & Maintenance of Projects & Services with state of the art systems, equipment and services with complete back up support for our valued clients</p>
            <a href="../../assets/dervac_profile_full.pdf" download>
                <div class="contactPage cursor-pointer overflow-hidden bg-[#dc2828] w-[220px] py-4 rounded-xl text-white font-bold text-lg relative">
                    <p class="z-[999] relative text-center">Download Brochure</p>
                    <div class="blue-bg bg-[#224C75] w-full h-full bottom-[-90px] absolute transition-all duration-[0.3s]"></div>
                </div>
            </a>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2  lg:gap-10 md:gap-6 gap-10">
            <div v-for="about in abouts" :key="about.id" class="body w-full h-[400px] bg-white rounded-xl shadow-xl flex flex-col justify-between items-center px-8 py-12">
                <p class="text-[#253858] font-semibold text-2xl">{{ about.heading }}</p>
                <div class="flex flex-col items-center space-y-2">
                    <img :src=about.icon class="icon transition-all duration-[0.2s] w-[90px] text-center">
                    <div class="shadow transition-all duration-[0.2s] bg-black w-[80px] h-[20px] rounded-[50%] opacity-[0.1] mx-auto"></div>
                </div>
                <p class="text-[#8D8EA3] text-center">{{ about.content }}</p>
                <div class="anchor flex gap-2 justify-center items-center font-semibold text-lg cursor-pointer relative z-[200] px-6 overflow-hidden">
                    <router-link :to="about.link"><p class="anchor-link text-[#1EC2EF] md:text-md text-sm">{{ about.more }}</p></router-link>
                    <svg class="anchor-link text-[#1EC2EF]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                    <div class="bg-c transition-top duration-[0.2s] z-[-200] bg-[#FC5546] absolute w-full h-full top-20"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue'
    export default defineComponent({
        data(){
            return{
                abouts: [
                    {
                        heading: 'What We Do',
                        content: 'For quick answers to common questions, try our FAQ first!',
                        icon: 'src/assets/images/messages.svg',
                        more: 'View Our Services',
                        link: '/faqs'
                    },
                    {
                        heading: 'Who We Help',
                        content: '9, Tunde Oshilaja Street, Opebi, Ikeja',
                        icon: 'src/assets/images/headquarters.svg',
                        more: 'Industries We Serve',
                        link: '/faqs'
                    },
                    {
                        heading: 'Why Choose Us',
                        content: 'Open Monday to Friday From 09:00 AM to 18:00 PM',
                        icon: 'src/assets/images/time.svg',
                        more: 'Find Out More',
                        link: '/faqs'
                    }
                ]
            }
        }
    })
</script>

<style scoped>
.contactPage:hover .blue-bg{
    bottom: 0;
    transition: all 0.3s ease-in-out;
}
</style>