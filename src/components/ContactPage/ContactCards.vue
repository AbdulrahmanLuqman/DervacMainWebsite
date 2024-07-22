<template>
    <section class="py-20 lg:px-20 md:px-16 px-10 space-y-20 bg-gradient-to-t from-[#F3F4F7] to-[#FDFDFD] flex flex-col items-center">
        <div class="lg:w-[500px] md:w-[80%] space-y-4">
            <h1 class="text-5xl text-center text-[#224C75] font-bold">Contact Us</h1>
            <p class="text-[#8D8EA3] text-center">Interested in our IT services or need advice? Then please get in touch and we’ll be glad to help.</p>
        </div>

        <!-- if the images aren't showing online, try the svgs -->
        <div class="space-y-10 ">
            <div class="grid lg:grid-cols-3 md:grid-cols-2  lg:gap-10 md:gap-6 gap-10">
                <div v-for="contact in contacts" :key="contact.id" class="body w-full h-[400px] bg-white rounded-xl shadow-xl flex flex-col gap-6 items-center px-8 py-12">
                    <p class="text-[#253858] font-semibold text-3xl">{{ contact.heading }}</p>
                    <p class="text-[#8D8EA3] text-center">{{ contact.content }}</p>
                    <div class="flex flex-col items-center space-y-2">
                        <img :src=contact.icon class="icon transition-all duration-[0.2s] w-[90px] text-center">
                        <div class="shadow transition-all duration-[0.2s] bg-black w-[80px] h-[20px] rounded-[50%] opacity-[0.1] mx-auto"></div>
                    </div>
                    <div class="anchor flex gap-2 justify-center items-center font-semibold text-lg cursor-pointer relative z-[200] px-6 overflow-hidden">
                        <p class="anchor-link text-[#1EC2EF]"><a :href="contact.link">{{ contact.more }}</a></p>
                        <svg class="anchor-link text-[#1EC2EF]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>

                        <div class="bg-c transition-top duration-[0.2s] z-[-200] bg-[#FC5546] absolute w-full h-full top-8"></div>
                    </div>
                </div>
            </div>
            <p class="text-center text-[#8D8EA3] text-lg">You can also email us at <a class="cursor-pointer underline text-[#DC2828]" href="mailto:info@dervac.com">info@dervac.com</a></p>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue'
    export default defineComponent({
        data(){
            return{
                contacts: [
                    {
                        heading: 'Headquarters',
                        content: '9, Tunde Oshilaja Street, Opebi, Ikeja',
                        icon: 'src/assets/images/headquarters.svg',
                        more: 'Contact Us',
                        link: 'mailto:info@dervac.com'
                    },
                    {
                        heading: 'Hub',
                        content: '65, Shipeolu Street, Palmgroove, Lagos, Nigeria.',
                        icon: 'src/assets/images/messages.svg',
                        more: 'Contact Us',
                        link: 'mailto:hub@dervac.com'
                    },
                    {
                        heading: 'Working hours',
                        content: 'Open Monday to Friday From 09:00 AM to 18:00 PM',
                        icon: 'src/assets/images/time.svg',
                        more: 'Help Center',
                        link: 'mailto:hub@dervac.com'
                    }
                ]
            }
        }
    })
</script>

<style scoped>
.anchor:hover .anchor-link{
    color: white;
    transition: color 0.2s ease-in;
}
.anchor:hover .bg-c{
    top: 0;
    transition: top 0.2s ease-out;
}
.body:hover .shadow{
    width: 50px;
    height: 15px;
    transition: all 0.2s ease-out;
}
.body:hover .icon{
    transform: rotateZ(10deg);
    transform: translateY(-15px);
    transition: all 0.2s ease-in;
}
</style>