<template>
    <div class="relative bg lg:h-screen h-[70vh] overflow-hidden">
        <div class="flex z-[999] top-0 justify-between w-[300%] overflow-hidden slide">
            <div class="text-center mx-auto w-full h-full space-y-2 px-4 lg:py-20 md:py-10 py-6 relative">
                <p class="lg:text-5xl md:text-4xl text-2xl text-white">seamless integration of</p>
                <p class="lg:text-8xl md:text-6xl text-4xl font-bold text-white">systems and technoligies</p> 
                <p class="lg:text-5xl md:text-4 text-2xl text-white">from different suppliers & cutting edge technology.</p>
            </div>
            <div class="text-center mx-auto w-full space-y-2 px-4 lg:py-20 md:py-10 py-6">
                <p class="lg:text-5xl md:text-4xl text-2xl text-white">Tailored</p>
                <p class="lg:text-8xl md:text-6xl text-4xl font-bold text-white">services and solutions</p> 
                <p class="lg:text-5xl md:text-4xl text-2xl text-white">based on individual needs.</p>
            </div>
            <div class="text-center mx-auto w-full space-y-2 px-4 lg:py-20 md:py-10 py-6">
                <p class="lg:text-5xl md:text-4xl text-2xl text-white">Dedicated,</p>
                <p class="lg:text-8xl md:text-6xl text-4xl font-bold text-white">skilled professionals</p> 
                <p class="lg:text-5xl md:text-4xl text-2xl text-white">surpassing client expectations with creativity.</p>
            </div>
        </div>
        <div class="absolute top-0 flex slideImage">
            <img class="h-screen w-[100vw]" src="../../assets/images/first_hero_section_bg.png" alt="">
            <img class="h-screen w-[100vw]" src="../../assets/images/second_hero_section_bg.jpg" alt="">
            <img class="h-screen w-[100vw]" src="../../assets/images/third_hero_section_bg.jpg" alt="">
        </div>
        <div class="bg w-full h-full opacity-75 absolute top-0 bg-[#253858]"></div>

    </div>

    <div class="lg:flex flex-col items-center gap-16 mt-[-210px] relative hidden lg:px-20 md:px-16 px-10">
        <div class="flex gap-6">
    <!-- <VueAIcarousel :Property="{ID: 'Unique_id', Dlay: 1000}"> -->
        <div v-for="service in displayServices" :key="service.id" class="body bg-white h-[550px] rounded-xl shadow-xl flex flex-col justify-between w-full items-center px-8 py-12">
            <p class="text-[#253858] font-semibold text-2xl text-center">{{ service.heading }}</p>
            <div class="flex flex-col items-center">
                <div v-html="service.icon" class="icon transition-all duration-[0.2s] w-[90px] text-center"></div>
                <div class="shadow transition-all duration-[0.2s] bg-black w-[80px] h-[20px] rounded-[50%] opacity-20 mx-auto"></div>
            </div>
            <p class="text-[#8D8EA3] text-center">{{ service.content }}</p>
            <div class="anchor flex gap-2 justify-center items-center font-semibold text-lg cursor-pointer relative z-[200] px-6 overflow-hidden">
                <router-link :to="service.more"><p class="anchor-link text-[#1EC2EF]">Find out more</p></router-link>
                <svg class="anchor-link text-[#1EC2EF]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>

                <div class="bg-c transition-top duration-[0.7s] z-[-200] bg-[#FC5546] absolute w-full h-full top-8"></div>
            </div>
        </div>
    <!-- </VueAIcarousel> -->
    </div>
    <div class="flex gap-6">
        <div  @click="prev = true, next = false" :class="prev ? 'bg-[#DC2828]' : 'bg-gray-200'" class="cursor-pointer w-20 rounded-xl h-2 "></div>
        <div  @click="prev = false, next = true" :class="next ? 'bg-[#DC2828]' : 'bg-gray-200'" class="cursor-pointer w-20 rounded-xl h-2"></div>
    </div>
    </div>

        <div class="mobile-service relative body bg-white rounded-xl shadow-xl flex flex-col gap-10 mx-auto items-center px-8 py-12">
            <p class="text-[#253858] font-semibold text-2xl text-center">Infrastructure & Support</p>
            <div class="flex flex-col items-center">
                <div class="icon transition-all duration-[0.2s] w-[90px] text-center">
                    <svg class="w-fit mx-auto" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#253858" d="M9 20q-3.35 0-5.675-2.325T1 12q0-3.35 2.325-5.675T9 4h6q3.35 0 5.675 2.325T23 12q0 3.35-2.325 5.675T15 20H9Zm3-6q.825 0 1.413-.588T14 12q0-.825-.588-1.413T12 10q-.825 0-1.413.588T10 12q0 .825.588 1.413T12 14Zm-1-5h2q.425 0 .713-.288T14 8q0-.425-.288-.713T13 7h-2q-.425 0-.713.288T10 8q0 .425.288.713T11 9Zm0 8h2q.425 0 .713-.288T14 16q0-.425-.288-.713T13 15h-2q-.425 0-.713.288T10 16q0 .425.288.713T11 17Zm5-3q.425 0 .713-.288T17 13v-2q0-.425-.288-.713T16 10q-.425 0-.713.288T15 11v2q0 .425.288.713T16 14Zm-8 0q.425 0 .713-.288T9 13v-2q0-.425-.288-.713T8 10q-.425 0-.713.288T7 11v2q0 .425.288.713T8 14Z"/></svg>
                </div>
                <div class="shadow transition-all duration-[0.2s] bg-black w-[80px] h-[20px] rounded-[50%] opacity-20 mx-auto"></div>
            </div>
            <p class="text-[#8D8EA3] text-center">Dervac excels in Infrastructure & Support Services, providing robust systems and reliable support. Our core competence ensures seamless operations and optimal performance for your business infrastructure.</p>
            <div class="anchor flex gap-2 justify-center items-center font-semibold text-lg cursor-pointer relative z-[200] px-6 overflow-hidden">
                <router-link to="/is"><p class="anchor-link text-[#1EC2EF]">Find out more</p></router-link>
                <svg class="anchor-link text-[#1EC2EF]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>

                <div class="bg-c transition-top duration-[0.7s] z-[-200] bg-[#FC5546] absolute w-full h-full top-8"></div>
            </div>
        </div>
</template>

<script>
import VueAIcarousel from "vue-ai-carousel";
import store from '../../stores/counter';
import { defineComponent } from 'vue'
    export default defineComponent({
        components: {
            VueAIcarousel
        },
        data(){
            return{
                services: store().$state.services,
                prev: true,
                next: false
            }
        },
        computed:{
            displayServices(){
                return this.prev ? this.services.slice(0, 3) : this.services.slice(3);
            }
        },
    })
</script>

<style>
.bg{
    clip-path: polygon(100% 0,100% 80%,0% 100%,-200% 0%);
}

.anchor:hover .anchor-link{
    color: white;
    transition: color 0.7s ease-in;
}
.anchor:hover .bg-c{
    top: 0;
    transition: top 0.7s ease-out;
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
.slideImage{
    animation: slideImage 15s infinite alternate ease-in-out;

}
@keyframes slideImage{
    10%{
        left: 0;
    }
    20%{
        left: 0;
    }
    30%{
        left: 0;
    }
    40%{
        left: -100%;
    }
    50%{
        left: -100%;
    }
    60%{
        left: -100%;
    }
    70%{
        left: -100%;
    }
    80%{
        left: -200%;
    }
    90%{
        left: -200%;
    }
    100%{
        left: -200%;
    }
}
.slide{
    animation: slide 15s infinite alternate ease-in-out;
    position: relative;
}
@keyframes slide{
    10%{
        left: 0;
    }
    20%{
        left: 0;
    }
    30%{
        left: 0;
    }
    40%{
        left: -100%;
    }
    50%{
        left: -100%;
    }
    60%{
        left: -100%;
    }
    70%{
        left: -100%;
    }
    80%{
        left: -200%;
    }
    90%{
        left: -200%;
    }
    100%{
        left: -200%;
    }
}

.mobile-service{
    display: none;
}

@media (max-width:1023px) {
    .mobile-service{
        display: block;
        margin-top: -200px;
        width: 60%;
    }
}
@media (max-width:611px) {
    .mobile-service{
        width: 80%;
        margin-top: -180px;
    }
}
@media (max-width:379px) {
    .mobile-service{
        width: 90%;
        margin-top: -100px;
    }
}
</style>