<template>
    <section class="contact w-full mt-20">
        <div class="flex flex-col items-center md:w-[500px] mx-auto gap-6">
            <p class="text-[#224C75] font-semibold text-lg">Let's get started</p>
            <p class="text-[#224C75] font-bold text-2xl text-center">Are you ready for a better more productive business?</p>
            <p class="text-[#224C75] font-semibold text-center">Stop worrying about technology problems. Focus on your business. Let us provide the support you deserve</p>
            <div class="contactPage cursor-pointer overflow-hidden bg-[#dc2828] w-[220px] py-4 rounded-xl text-white font-bold text-lg relative">
                <p class="z-[999] relative text-center">Contact us Now</p>
                <div class="blue-bg bg-[#224C75] w-full h-full bottom-[-90px] absolute transition-all duration-[0.3s]"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.contact{
    background-image: url(../../assets/images/contact-bg.jpg);
    background-position: center;
    background-size: cover;
    height: 100vh;
}
.contactPage:hover .blue-bg{
    bottom: 0;
    transition: all 0.3s ease-in-out;
}
</style>