<template>
    <header>
        <div class="bg-[#224C75] h-full w-full opacity-50 absolute top-0"></div>
        <div class="h-full w-full flex flex-col items-center justify-center absolute top-0 space-y-8">
            <p class="text-white font-semibold lg:text-5xl text-3xl tracking-widest border-b border-b-4 pb-2 text-center">Software Development & Integration</p>
            <router-link to="/contact">
                <div class="get flex items-center gap-4 cursor-pointer w-[250px] relative overflow-hidden">
                    <p class="text-white font-semibold">GET A IT SOLUTIONS QUOTE</p>
                    <svg class="icon transition-all duration-[0.2s] absolute right-[-50px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4l5.6-5.6Z"/></svg>
                </div>
            </router-link>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
header{
    background-image: url(../../../assets/images/ict.webp);
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
}
.get:hover .icon{
    right: 0;
}
</style>