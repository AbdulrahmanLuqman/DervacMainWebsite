<template>
    <div class="relative h-screen">
        <div class="bg w-full h-full absolute top-0 bg-[#2FD1D6]"></div>
        <img class="absolute h-full top-0 bg opacity-20" src="../../assets/images/bg.jpg" alt="bg">
        <div class="mx-auto top-[100px] w-fit text-center left-0 right-0 absolute">
            <p class="lg:text-5xl md:text-6xl text-2xl text-white">stop wasting </p>
             <p class="lg:text-8xl md:text-7xl text-5xl font-bold text-white">time and money</p> 
             <p class="lg:text-5xl md:text-6xl text-2xl text-white">on technology</p>
        </div>
    </div>

    <div class="flex flex-col items-center gap-10 relative bottom-[220px]">
        <div class="flex gap-6 px-20">
        <div class="body bg-white h-[450px] rounded-xl shadow-xl flex flex-col gap-6 items-center px-8 py-12">
            <p class="text-[#253858] font-semibold text-3xl">Data Analytics</p>
            <div>
                <img class="icon transition-all duration-[0.2s] w-[90px]" src="../../assets/images/manage-it-services.svg" alt="">
                <div class="shadow transition-all duration-[0.2s] bg-black w-[80px] h-[20px] rounded-[50%] opacity-20 mx-auto"></div>
            </div>
            <p class="text-[#8D8EA3] text-center text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio non exercitationem corrupti sapiente odit molestiae.</p>
            <div class="anchor flex gap-2 justify-center items-center font-semibold text-lg cursor-pointer relative z-[200] px-6 overflow-hidden">
                <p class="anchor-link text-[#1EC2EF]">Find out more</p>
                <svg class="anchor-link text-[#1EC2EF]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>

                <div class="bg-c transition-top duration-[0.7s] z-[-200] bg-[#DC2828] absolute w-full h-full top-8"></div>
            </div>
        </div>

        <div class="body bg-white h-[450px] rounded-xl shadow-xl flex flex-col gap-6 items-center px-8 py-12">
            <p class="text-[#253858] font-semibold text-3xl">Web Development</p>
            <div>
                <img class="icon transition-all duration-[0.2s] w-[90px]" src="../../assets/images/cyber-security.svg" alt="">
                <div class="shadow transition-all duration-[0.2s] bg-black w-[80px] h-[20px] rounded-[50%] opacity-20 mx-auto"></div>
            </div>
            <p class="text-[#8D8EA3] text-center text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio non exercitationem corrupti sapiente odit molestiae.</p>
            <div class="anchor flex gap-2 justify-center items-center font-semibold text-lg cursor-pointer relative z-[200] px-6 overflow-hidden">
                <p class="anchor-link text-[#1EC2EF]">Find out more</p>
                <svg class="anchor-link text-[#1EC2EF]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>

                <div class="bg-c transition-top duration-[0.7s] z-[-200] bg-[#DC2828] absolute w-full h-full top-8"></div>
            </div>
        </div>

        <div class="body bg-white h-[450px] rounded-xl shadow-xl flex flex-col gap-6 items-center px-8 py-12">
            <p class="text-[#253858] font-semibold text-3xl">Web & Email Hosting</p>
            <div>
                <img class="icon transition-all duration-[0.2s] w-[90px]" src="../../assets/images/it-consultancy.svg" alt="">
                <div class="shadow transition-all duration-[0.2s] bg-black w-[80px] h-[20px] rounded-[50%] opacity-20 mx-auto"></div>
            </div>
            <p class="text-[#8D8EA3] text-center text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio non exercitationem corrupti sapiente odit molestiae.</p>
            <div class="anchor flex gap-2 justify-center items-center font-semibold text-lg cursor-pointer relative z-[200] px-6 overflow-hidden">
                <p class="anchor-link text-[#1EC2EF]">Find out more</p>
                <svg class="anchor-link text-[#1EC2EF]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"/></svg>

                <div class="bg-c transition-top duration-[0.7s] z-[-200] bg-[#DC2828] absolute w-full h-full top-8"></div>
            </div>
        </div>
    </div>

    <div class="flex gap-6">
        <div class="w-16 cursor-pointer rounded-xl h-2 bg-[#DC2828]"></div>
        <div class="w-16 cursor-pointer rounded-xl h-2 bg-gray-200"></div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
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

</style>