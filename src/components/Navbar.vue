<template>
    <header class="desktop-header sticky z-[999] top-0 shadow-xl bg-[#FFFFFF] py-8">
        <nav class="flex items-center justify-between px-16">
           <router-link to="/"> 
                <div @click="HomeActive()" class="flex gap-2 items-center h-fit">
                    <img class="z-[999] w-[50px]" src="../assets/images/dervac_logo.png" alt="LOGO">
                    <p class="z-[999] text-5xl font-bold text-[#224C75] font-[Bimini]">dervac</p>
                </div>
            </router-link>

            <ul class="flex items-center gap-8">
                <router-link to="/"><li @click="HomeActive()" class="relative z-[999] cursor-pointer font-semibold hover:text-[#8D8EA3] text-[#224C75]" :class="{ 'active': $route.name === 'LandingPage' }">Home</li></router-link>
                <li class="relative">
                    <div @click="Company()" class="flex items-center cursor-pointer">
                        <p class="relative z-[999] font-semibold" :class="isCompanyActive ? 'text-[#DC2828]' : 'text-[#224C75]'">Profile</p>

                        <div>
                            <svg v-if="!isCompanyDropDown" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path fill="#929FB5" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"/></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="#929FB5" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                        </div>
                    </div>

                    <ul v-show="isCompanyDropDown" class="z-[200] absolute left-[-69px] bg-white shadow-xl w-[300px] rounded-xl py-4">
                      <div v-for="profileSubMenu in profileSubMenus" :key="profileSubMenu.id">
                        <router-link :to="profileSubMenu.navLink">
                          <li class="flex items-center gap-4 cursor-pointer px-8 py-2" @click="toggleSubMenu(profileSubMenu)">
                            <svg v-show="profileSubMenu.isActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" /></svg>
                            <p class="font-semibold hover:text-[#0E2B61]" :class="{ 'text-[#0E2B61]': profileSubMenu.isActive, 'text-[#627792]': !profileSubMenu.isActive }" v-html="profileSubMenu.navName"></p>
                          </li>
                        </router-link>
                      </div>
                    </ul>
                </li>
                <li class="relative">
                    <div @click="Services()" class="flex items-center cursor-pointer">
                        <p class="relative z-[999] font-semibold" :class="isServicesActive ? 'text-[#DC2828]' : 'text-[#224C75]'">Services & Solutions</p>

                        <div>
                            <svg v-if="!isServicesDropDown" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path fill="#929FB5" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"/></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="#929FB5" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                        </div>
                    </div>

                    <ul v-show="isServicesDropDown" class="z-[200] absolute left-[-69px] bg-white shadow-xl w-[400px] rounded-xl py-4">
                      <div v-for="servicesSubMenu in servicesSubMenus" :key="servicesSubMenu.id">
                        <router-link :to="servicesSubMenu.navLink">
                          <li class="flex items-center gap-4 cursor-pointer px-8 py-2" @click="toggleServicesMenu(servicesSubMenu)">
                            <svg v-show="servicesSubMenu.isActive" class="icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="#8D8EA3" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" /></svg>
                            <p class="font-semibold hover:text-[#0E2B61]" :class="{ 'text-[#0E2B61]': servicesSubMenu.isActive, 'text-[#627792]': !servicesSubMenu.isActive }" v-html="servicesSubMenu.navName"></p>
                          </li>
                        </router-link>
                      </div>
                    </ul>
                </li>

                <router-link to="/customer-support"><li class="relative z-[999] text-[#224C75] font-semibold cursor-pointer" :class="{ 'active' : $route.name === 'CustomerSupport' }">Customer Support</li></router-link>

                <router-link to="/contact"><li @click="" class="relative z-[999] text-[#224C75] font-semibold cursor-pointer" :class="{ 'active': $route.name === 'ContactPage' }">Get in Touch</li></router-link>
            </ul>

            <div class="flex gap-2">
                <img class="w-[40px] cursor-pointer" src="../assets/images/messages.svg" alt="Chat Icon">

                <div class="">
                    <p class="font-semibold text-[#8D8EA3]">Have an idea or project?</p>
                    <p class="text-[#8D8EA3] font-semibold">Dial <span class="relative z-[999] text-[#224C75] underline"><a href="tel:08160225365,">+234 816 022 5365,</a></span></p>
                </div>
            </div>
        </nav>
        <div @click="isCompanyDropDown = false, isServicesDropDown = false" v-show="isCompanyDropDown || isServicesDropDown" class="w-full h-screen absolute top-0"></div>
    </header>

    <header class="mobile-header sticky top-0 shadow-xl z-[999] bg-[#FFFFFF] md:py-10 py-4 md:px-16 px-10 hidden">
        <nav class="flex items-center justify-between">
            <router-link to="/">
                <div class="flex items-center h-fit">
                    <img class="w-[40px]" src="../assets/images/dervac_logo.png" alt="LOGO">
                    <p class="text-4xl font-bold text-[#224C75] font-[Bimini]">dervac</p>
                </div>
            </router-link>

            <div class="flex items-center gap-6">
                <div class="hidden md:flex gap-2">
                    <img class="w-[40px] cursor-pointer" src="../assets/images/messages.svg" alt="Chat Icon">
    
                    <div>
                        <p class="font-semibold text-[#8D8EA3]">Have any questions?</p>
                        <p class="text-[#8D8EA3] font-semibold">Free <span class="text-[#224C75] underline"><a>09016461891</a></span></p>
                    </div>
                </div>
                <svg @click="showMobileNav = true" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#224C75" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg>
            </div>

            <div v-show="showMobileNav" class="absolute bg-[#0E2B5C] w-full h-screen top-0 left-0 py-10 px-8 flex flex-col gap-8 items-end overflow-auto">
                <div @click="showMobileNav = false" class="bg-[#DC2828] w-fit h-fit cursor-pointer rounded-[50%] p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="white" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
                </div>
                <ul class="flex gap-8 flex-col items-start w-full">
                    <router-link to="/"><li @click="showMobileNav = false" class="text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Home</li></router-link>
                    <li class="w-full">
                        <div @click="isCompanyDropDown = !isCompanyDropDown, isServicesDropDown = false" class="flex justify-between">
                            <p class="text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Company</p>
                            <div class="border border-gray-500 rounded-[50%] p-2 cursor-pointer" :class="isCompanyDropDown ? 'bg-[#0A1E40] border-none' : 'bg-transparent'">
                                <svg :class="isCompanyDropDown ? 'icon' : ''" class=" transition-all duration-[0.2s]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/></svg>
                            </div>
                        </div>

                        <div v-show="isCompanyDropDown" class="pl-6 space-y-2">
                            <p @click="showMobileNav = false" class="w-fit text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Our History and Ethos</p>
                            <p @click="showMobileNav = false" class="w-fit text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Our History and Ethos</p>
                            <p @click="showMobileNav = false" class="w-fit text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Our History and Ethos</p>
                            <p @click="showMobileNav = false" class="w-fit text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Our History and Ethos</p>
                        </div>
                    </li>
                    <li class="w-full">
                        <div @click="isServicesDropDown = !isServicesDropDown, isCompanyDropDown = false" class="flex justify-between">
                            <p class="text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Services & Solutions</p>
                            <div class="border border-gray-500 rounded-[50%] p-2 cursor-pointer" :class="isServicesDropDown ? 'bg-[#0A1E40] border-none' : 'bg-transparent'">
                                <svg :class="isServicesDropDown ? 'icon' : ''" class=" transition-all duration-[0.2s]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/></svg>
                            </div>
                        </div>

                        <div v-show="isServicesDropDown" class="pl-6 space-y-2">
                            <p @click="showMobileNav = false" class="w-fit text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Our History and Ethos</p>
                            <p @click="showMobileNav = false" class="w-fit text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Our History and Ethos</p>
                            <p @click="showMobileNav = false" class="w-fit text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Our History and Ethos</p>
                            <p @click="showMobileNav = false" class="w-fit text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Our History and Ethos</p>
                        </div>
                    </li>
                    <li class="text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Customer Support</li>
                    <router-link to="/contact"><li @click="showMobileNav = false" class="text-white font-semibold text-xl hover:text-[#DC2828] cursor-pointer">Get in touch</li></router-link>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import { defineComponent } from 'vue';
    import store from '../stores/counter'
    export default defineComponent({
        data(){
            return{
                showMobileNav: store().$state.inActiveMode, 
                isHomeActive: true,
                isCompanyActive: store().$state.inActiveMode, 
                isCompanyDropDown: store().$state.inActiveMode, 
                isServicesDropDown: store().$state.inActiveMode,
                isServicesActive: store().$state.inActiveMode,

                isDataAnalyticsActive: store().$state.inActiveMode, isWebDevActive: store().$state.inActiveMode, isWebAndEmailHostingActive: store().$state.inActiveMode, isDomainRegActive: store().$state.inActiveMode, isNetworkingProfActive: store().$state.inActiveMode,
                isContactActive: store().$state.inActiveMode,

                profileSubMenus: [
                    {
                        navName: "About Us",
                        navLink: "/about",
                        isActive: false
                    },
                    {
                        navName: "Our Core Expertise",
                        navLink: "/core-expertise",
                        isActive: false
                    },
                    {
                        navName: "Our Metholodogy",
                        navLink: "/methodology",
                        isActive: false
                    },
                    {
                        navName: "Management Team",
                        navLink: "/management-team",
                        isActive: false
                    },
                    {
                        navName: "Careers",
                        navLink: "/careers",
                        isActive: false
                    }
                ],
                servicesSubMenus: [
                    {
                        navName: "Information & Communication Technology",
                        navLink: "/ict",
                        isActive: false
                    },
                    {
                        navName: "Software Development & Integration",
                        navLink: "/sdi",
                        isActive: false
                    },
                    {
                        navName: "Infrastructure & Support",
                        navLink: "/is",
                        isActive: false
                    },
                    {
                        navName: "Security System",
                        navLink: "/ss",
                        isActive: false
                    },
                    {
                        navName: "Business Solutions",
                        navLink: "/bs",
                        isActive: false
                    },
                    {
                        navName: "Educational Technology Consultancy",
                        navLink: "/etc",
                        isActive: false
                    },
                    {
                        navName: "Training Services & Customer Education",
                        navLink: "/ts",
                        isActive: false
                    },
                ]
            }
        },
        methods:{
            toggleSubMenu(clickedSubMenu) {
              // Set isActive to true for the clicked sub-menu and false for others
                this.profileSubMenus.forEach((subMenu) => {
                subMenu.isActive = subMenu === clickedSubMenu;
              });
                this.isCompanyActive = true
                this.isHomeActive = false
                this.isCompanyDropDown = false
                this.isServicesActive = false
                this.servicesSubMenus.forEach((subMenu) => {
                subMenu.isActive = false;
              });
            },
            toggleServicesMenu(clickedServicesMenu) {
              // Set isActive to true for the clicked sub-menu and false for others
                this.servicesSubMenus.forEach((servMenu) => {
                servMenu.isActive = servMenu === clickedServicesMenu;
              });
                this.isCompanyActive = false
                this.isHomeActive = false
                this.isCompanyDropDown = false
                this.isServicesActive = true
                this.isServicesDropDown = false
                this.profileSubMenus.forEach((subMenu) => {
                subMenu.isActive = false;
              })
            },
            resetProfileSubMenus() {
              this.profileSubMenus.forEach((subMenu) => {
                subMenu.isActive = false;
              });
              this.servicesSubMenus.forEach((subMenu) => {
                subMenu.isActive = false;
              });
            },
            Company(){
                this.isCompanyDropDown = !this.isCompanyDropDown
                this.isServicesDropDown = false
            },
            Services(){
                this.isServicesDropDown = !this.isServicesDropDown
                this.isCompanyDropDown = false
            },
            HomeActive(){
                this.isCompanyActive = false
                this.isHomeActive = true
                this.isCompanyDropDown = false
                this.isServicesActive = false
                this.isServicesDropDown = false
                this.resetProfileSubMenus()
            }
        },
//         computed: {
//             isSubMenuActive() {
//               const currentRouteName = this.$route.name;
//               const activeSubMenu = this.servicesSubMenus.find(subMenu => subMenu.navLink === `/${currentRouteName}`);
//               return activeSubMenu ? activeSubMenu.isActive : false;
//             },
//   },

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

@media (max-width:1253px) {
    .desktop-header{
        display: none;
    }
    .mobile-header{
        display: block;
    }
}
.active{
    color: #DC2828;
}
.menuActive{
    color: blue;
}
</style>