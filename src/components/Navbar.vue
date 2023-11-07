<template>
    <header class="bg-[#FFFFFF] py-10 lg:block hidden">
        <nav class="flex items-center justify-between px-16">
            <div class="flex items-center h-fit">
                <img class="w-[40px]" src="../assets/images/dervac_logo.png" alt="LOGO">
                <p class="text-4xl font-bold text-[#224C75] font-[Bimini]">dervac</p>
            </div>

            <ul class="flex items-center gap-8">
                <li @click="HomeActive()" class="cursor-pointer font-semibold hover:text-[#8D8EA3]" :class="isHomeActive ? 'text-[#DC2828]' : 'text-[#224C75]'">Home</li>
                <li class="relative">
                    <div @click="Company()" class="flex items-center cursor-pointer">
                        <p class="font-semibold" :class="isCompanyActive ? 'text-[#DC2828]' : 'text-[#224C75]'">Company</p>

                        <div>
                            <svg v-if="!isCompanyDropDown" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path fill="#929FB5" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"/></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="#929FB5" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                        </div>
                    </div>

                    <ul v-show="isCompanyDropDown" class="z-[200] absolute left-[-69px] bg-white shadow-xl w-[300px] rounded-xl py-4">
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isHistoryActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="HistoryActive()" class="font-semibold hover:text-[#0E2B61]" :class="isHistoryActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Our History and Ethos</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isManagementActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="ManagementActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isManagementActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Management Team</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isCoreActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="CoreActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isCoreActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Our Core Expertise</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isMethodologyActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="MetholodogyActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isMethodologyActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Our Metholodogy</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isWhyUsActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="WhyUsActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isMethodologyActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Why Us</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isCareersActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="CareerActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isMethodologyActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Careers</p>
                        </li>
                    </ul>
                </li>
                <li class="relative">
                    <div @click="Services()" class="flex items-center cursor-pointer">
                        <p class="font-semibold" :class="isServicesActive ? 'text-[#DC2828]' : 'text-[#224C75]'">Services & Solutions</p>

                        <div>
                            <svg v-if="!isServicesDropDown" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path fill="#929FB5" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"/></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="#929FB5" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                        </div>
                    </div>

                    <ul v-show="isServicesDropDown" class="z-[200] absolute left-[-69px] bg-white shadow-xl w-[300px] rounded-xl py-4">
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isDataAnalyticsActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="DataAnalyticsActive()" class="font-semibold hover:text-[#0E2B61]" :class="isDataAnalyticsActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Data Analytics</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isWebDevActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="WebDevActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isWebDevActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Web Development</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isWebAndEmailHostingActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="WebAndEmailHostingActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isWebAndEmailHostingActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Web & Email Hosting</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isDomainRegActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="DomainRegActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isDomainRegActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Domain Registration</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isNetworkingProfActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="NetworkingProfActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isNetworkingProfActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Networking Professionals</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isCareersActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="CareerActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isMethodologyActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Careers</p>
                        </li>
                    </ul>
                </li>

                <!-- <li class="relative">
                    <div @click="Services()" class="flex  items-center cursor-pointer">
                        <p class="font-semibold" :class="isServicesActive ? 'text-[#DC2828]' : 'text-[#224C75]'">Products</p>

                        <div>
                            <svg v-if="!isServicesDropDown" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path fill="#929FB5" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"/></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="#929FB5" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                        </div>
                    </div>

                    <ul v-show="isServicesDropDown" class="absolute left-[-69px] shadow-xl w-[300px] rounded-xl py-4">
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isDataAnalyticsActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="DataAnalyticsActive()" class="font-semibold hover:text-[#0E2B61]" :class="isDataAnalyticsActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Data Analytics</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isWebDevActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="WebDevActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isWebDevActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Web Development</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isWebAndEmailHostingActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="WebAndEmailHostingActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isWebAndEmailHostingActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Web & Email Hosting</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isDomainRegActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="DomainRegActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isDomainRegActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Domain Registration</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isWhyUsActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="WhyUsActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isMethodologyActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Why Us</p>
                        </li>
                        <li class="flex items-center gap-4 cursor-pointer px-8 py-2">
                            <svg v-show="isCareersActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>
                            <p @click="CareerActive()" class="text-[#627792] font-semibold hover:text-[#0E2B61]" :class="isMethodologyActive ? 'text-[#0E2B61]' : 'text-[#627792]'">Careers</p>
                        </li>
                    </ul>
                </li> -->

                <li class="text-[#224C75] font-semibold">Customer Support</li>

                <li class="text-[#224C75] font-semibold">Get in Touch</li>
            </ul>

            <div class="flex gap-2">
                <img class="w-[40px] cursor-pointer" src="../assets/images/messages.svg" alt="Chat Icon">

                <div class="">
                    <p class="font-semibold text-[#8D8EA3]">Have any questions?</p>
                    <p class="text-[#8D8EA3] font-semibold">Free <span class="text-[#224C75] underline"><a>09016461891</a></span></p>
                </div>
            </div>
        </nav>
    </header>

    <header class="bg-[#FFFFFF] py-10 lg:hidden block">
        <nav class="flex items-center justify-between px-16">
            <div class="flex items-center h-fit">
                <img class="w-[40px]" src="../assets/images/dervac_logo.png" alt="LOGO">
                <p class="text-4xl font-bold text-[#224C75] font-[Bimini]">dervac</p>
            </div>

            <div class="flex gap-2">
                <img class="w-[40px] cursor-pointer" src="../assets/images/messages.svg" alt="Chat Icon">

                <div class="">
                    <p class="font-semibold text-[#8D8EA3]">Have any questions?</p>
                    <p class="text-[#8D8EA3] font-semibold">Free <span class="text-[#224C75] underline"><a>09016461891</a></span></p>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg>
        </nav>
    </header>
</template>

<script>
    import { defineComponent } from 'vue';
    import store from '../stores/counter'
    export default defineComponent({
        data(){
            return{
                isCompanyDropDown: store().$state.inActiveMode, isServicesDropDown: store().$state.inActiveMode,
                isHomeActive: true, 
                isCompanyActive: store().$state.inActiveMode, isHistoryActive: store().$state.inActiveMode, isManagementActive: store().$state.inActiveMode, isCoreActive: store().$state.inActiveMode, isMethodologyActive: store().$state.inActiveMode, isWhyUsActive: store().$state.inActiveMode, isCareersActive: store().$state.inActiveMode, 
                isServicesActive: store().$state.inActiveMode, isDataAnalyticsActive: store().$state.inActiveMode, isWebDevActive: store().$state.inActiveMode, isWebAndEmailHostingActive: store().$state.inActiveMode, isDomainRegActive: store().$state.inActiveMode, isNetworkingProfActive: store().$state.inActiveMode,
            }
        },
        methods: {
            HomeActive(){
                this.isHomeActive = true
                this.isHistoryActive = false
                this.isCompanyActive = false
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isWebDevActive = false
                this.isServicesActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false

                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            HistoryActive(){
                this.isHomeActive = false
                this.isHistoryActive = true
                this.isCompanyActive = true
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isWebDevActive = false
                this.isServicesActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false

                
                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            ManagementActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = true
                this.isManagementActive = true
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isWebDevActive = false
                this.isServicesActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            CoreActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = true
                this.isManagementActive = false
                this.isCoreActive = true
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isWebDevActive = false
                this.isServicesActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            MetholodogyActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = true
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = true
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isWebDevActive = false
                this.isServicesActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            WhyUsActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = true
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = true
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isWebDevActive = false
                this.isServicesActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            CareerActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = true
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = true
                this.isDataAnalyticsActive = false
                this.isWebDevActive = false
                this.isServicesActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            DataAnalyticsActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = false
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = true
                this.isServicesActive = true
                this.isWebDevActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            WebDevActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = false
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isServicesActive = true
                this.isWebDevActive = true
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            WebAndEmailHostingActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = false
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isServicesActive = true
                this.isWebDevActive = false
                this.isWebAndEmailHostingActive = true
                this.isDomainRegActive = false
                this.isNetworkingProfActive = false


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            DomainRegActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = false
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isServicesActive = true
                this.isWebDevActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = true
                this.isNetworkingProfActive = false


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            NetworkingProfActive(){
                this.isHomeActive = false
                this.isHistoryActive = false
                this.isCompanyActive = false
                this.isManagementActive = false
                this.isCoreActive = false
                this.isMethodologyActive = false
                this.isWhyUsActive = false
                this.isCareersActive = false
                this.isDataAnalyticsActive = false
                this.isServicesActive = true
                this.isWebDevActive = false
                this.isWebAndEmailHostingActive = false
                this.isDomainRegActive = false
                this.isNetworkingProfActive = true


                // dropdowns
                this.isCompanyDropDown = false
                this.isServicesDropDown = false
            },
            // Dropdowns
            Company(){
                this.isCompanyDropDown = !this.isCompanyDropDown
                this.isServicesDropDown = false
            },
            Services(){
                this.isServicesDropDown = !this.isServicesDropDown
                this.isCompanyDropDown = false
            }

        }
    })
</script>

<style scoped>
@font-face {
        font-family: 'Bimini';
        src: url('../../assets/bimini/BiminiNormal.ttf') format('truetype');
             /* url('./bimini/BIMINI__.TTF') format('TTF'); */
        /* You can add more formats if needed */
        font-weight: normal;
        font-style: normal;
}
</style>