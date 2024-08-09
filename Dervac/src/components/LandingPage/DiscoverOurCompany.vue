<template>
    <section class="space-y-10 lg:py-10 py-10 lg:px-20 md:px-16 px-10">
        <div class="space-y-2">
            <p class="text-[#224C75] tracking-widest text-sm">DISCOVER OUR COMPANY</p>
            <p class="text-4xl max-[1397px]:text-3xl max-[1183px]:text-2xl max-[1024px]:text-4xl max-[700px]:text-2xl max-[500px]:text-xl text-[#0E2B5C] font-semibold">Experience the culture that make us stand out.</p>
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-[60px] lg:gap-[40px]">
            <!-- <div class="w-full space-y-4 border-t-[8px] border-[#DC2828] px-4 pt-10">
                <p class="flex gap-6 font-semibold text-[#224C75] text-lg"><span @click="showVision = false" :class="showVision ? 'text-[#224C75] cursor-pointer hover:bg-[#224C75] hover:text-white py-[2px] px-2 rounded-lg hover:shadow-md' : 'text-white bg-[#224C75] py-[2px] px-2 rounded-lg shadow-md cursor-pointer'">Mission</span> <span @click="showVision = true" :class="!showVision ? 'text-[#224C75] cursor-pointer hover:bg-[#224C75] hover:text-white py-[2px] px-2 rounded-lg hover:shadow-md' : 'text-white bg-[#224C75] py-[2px] px-2 rounded-lg shadow-md cursor-pointer'">Vision</span></p>
                <p v-show="showVision" class="text-[#929FB5] text-[17px]">To become one, of the world's leading provider of innovative, systematic and goal-orientated quality services and solutions with effective presence in Nigeria and Africa as a backbone.</p>
                <p v-show="!showVision" class="text-[#929FB5] text-[17px]">To provide our clients with a healthy, Efficient, Cost–Effective and Quality ICT based services and solutions which are uncompromisingly based on the exact needs of the clients.</p>
            </div>

            <div class="w-full space-y-4 border-t-[8px] border-[#DC2828] px-4 pt-10">
                <p class="flex gap-10 font-semibold text-[#224C75] text-lg">Our Strategy</p>
                <p class="text-[#929FB5] text-[17px]">At Dervac, we won't just plan your company's IT Solutions; we will , and <strong>BUILD IT</strong>, <strong>MAINTAIN IT</strong> and <strong>HELP YOU GROW YOUR BUSINESS</strong>.</p>
            </div>

            <div class="w-full space-y-4 border-t-[8px] border-[#DC2828] px-4 pt-10">
                <p class="flex gap-10 font-semibold text-[#224C75] text-lg">Our Promise and Dedication</p>
                <p class="text-[#929FB5] text-[17px]">We are dedicated to serving, satisfying and making our valued clients stay ahead of today's technology by providing updated IT Solutions. And to win new ones through excellent performance.</p>
            </div> -->

            <div v-for="discover in discoveries">
                <router-link :to="discover.routeTo">
                    <div class="container w-full cursor-pointer space-y-4 border-t-[8px] border-[#DC2828] px-4 pt-10">
                        <div class="flex overflow-hidden gap-2 items-center">
                            <p class="flex gap-10 font-semibold text-[#224C75] text-lg">{{ discover.heading }}</p>
                            <div class="relative"><svg class="icon absolute top-[-5px] left-[2000px] transition-all duration-500" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#224C75" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg></div>
                        </div>
                        <p v-html="discover.content" class="text-[#929FB5]"></p>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import {defineComponent} from 'vue'
    import store from '../../stores/counter';
    export default defineComponent({
        data(){
            return{
                showVision: false,
                discoveries: store().$state.ourCompany
            }
        }
    })
</script>

<style scoped>
.container:hover .icon{
    left: 0px;
}
</style>