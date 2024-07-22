<template>
    <section id="benefits" class="bg-[#224C75] py-20 lg:px-20 md:px-16 px-10 space-y-16">
        <div class="space-y-2">
            <h3 class="text-[#DC2828] text-center font-semibold tracking-widest">Benefits</h3>
            <p class="text-white lg:text-3xl md:text-2xl text-xl font-semibold text-center lg:w-[80%] md:w-[90%] w-full mx-auto">Our clients are able to increase end-user productivity without sacrificing usability.</p>
        </div>

        <div class="grid lg:grid-cols-4 gap-8 md:grid-cols-2 grid-cols-1">
            <div v-for="benefit in benefits" class="bg-[#225C85] w-full p-6 rounded-lg h-[200px] flex flex-col justify-center gap-4">
                <p class="font-semibold text-white text-lg text-center">{{ benefit.header }}</p>
                <p class="text-center text-sm text-gray-300">{{ benefit.content }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                benefits: [
                    {
                        header: 'Increased Operational Efficiency',
                        content: 'Our clients experience heightened end-user productivity, achieving more with streamlined and efficient IT solutions.'
                    },
                    {
                        header: 'Seamless Technology Integration',
                        content: 'Benefit from expertly integrated solutions, ensuring a smooth blend of technology within your business processes for optimal performance.'
                    },
                    {
                        header: 'Proactive Issue Prevention',
                        content: 'Stay ahead with our services that proactively identify and address potential issues, minimizing disruptions and maximizing business continuity.'
                    },
                    {
                        header: 'Scalable Solutions for Growth',
                        content: 'Our offerings provide scalable IT solutions, accommodating your business growth and adapting to evolving needs effortlessly.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>