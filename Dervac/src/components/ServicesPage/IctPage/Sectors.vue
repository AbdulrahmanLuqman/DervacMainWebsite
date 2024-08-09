<template>
    <section id="sector" class="my-20 space-y-[70px] lg:px-20 md:px-16 px-10">
        <div class="space-y-2">
            <h3 class="text-[#8696AB] text-center font-semibold tracking-widest">Sectors</h3>
            <p class="text-[#224C75] lg:text-3xl md:text-2xl text-xl font-semibold text-center">The industry sectors we served include</p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            <div v-for="sector in sectors" class="container flex gap-4 items-start">
                <div class="icon" v-html="sector.icon">
                </div>
                <div class="space-y-2">
                    <h4 class="text-[#224C75] text-xl font-bold">{{ sector.heading }}</h4>
                    <p class="text-[#8696AB]">{{ sector.content }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {defineComponent} from 'vue'
    export default defineComponent({
        data(){
            return{
                sectors: [
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#224C75" width="50" height="50"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17h5m-4 2h2m-3-4v5m-4-4l-4 4-4-4m4-4l4 4 4-4"/></svg>',
                        heading:'Cloud Solutions',
                        content: 'Elevate your business with scalable, efficient, and tailored cloud solutions for optimal performance and growth.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#224C75" width="50" height="50"> <rect width="18" height="18" x="3" y="3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="1" y1="3" x2="21" y2="3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="10" y1="3" x2="10" y2="21" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
                        heading:'Data Center Management',
                        content: 'Ensure data reliability and security with expert oversight, minimizing downtime and maximizing productivity.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#224C75" width="50" height="50"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
                        heading:'Network Support',
                        content: 'Optimize and expand your network capabilities with dedicated support for robust and reliable performance.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#224C75" d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9zm4.1 8.5l-.1.1V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.4c-.6-.6-.7-1.5-.1-2.1c.6-.6 1.5-.7 2.1-.1c.6.5.7 1.5.1 2.1"/></svg>',
                        heading:'Security Measures',
                        content: 'Safeguard digital assets with advanced threat prevention, encryption, and compliance protocols for comprehensive security.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#224C75" width="50" height="50"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 14l5-5 5 5M7 21l5-5 5 5"/></svg>',
                        heading:'Remote User Assistance',
                        content: 'Empower remote teams with prompt and efficient technical support, ensuring smooth operations and productivity.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#224C75" width="50" height="50"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
                        heading:'Swift Issue Resolution',
                        content: 'Minimize disruptions with agile and proactive issue resolution, keeping your business operations seamlessly on track.'
                    }
                ]
            }
        }
    })
</script>

<style scoped>
.container:hover .icon{
    animation: shake 0.5s ease-in-out infinite;
}

@keyframes shake {
      0%, 100% {
        transform: translateY(0) rotateZ(0deg);
      }
      25%, 75% {
        transform: translateY(-7px) rotateZ(7deg);
      }
      50% {
        transform: translateY(7px) rotateZ(-7deg);
      }
    }
</style>