<template>
    <section class="flex flex-col gap-14 items-center my-20 lg:px-20 md:px-16 px-10">
        <div class="w-full flex flex-col items-center gap-8">
            <h2 class=" text-center lg:text-4xl text-2xl font-bold text-[#0E2B61]">APPROACH / IMPLEMENTATION.</h2>
            <p class="text-[#8D8EA3] text-center font-semibold">Dervac Technologies service delivery process is geared towards understanding your business requirements and provides specific solutions that address these needs. We use the following steps, amongst others, to fully understand and implement business suites to achieve your objectives.</p>
            <ul class="w-full flex flex-col items-start px-8">
                <li class="text-[#8D8EA3] list-disc">Discuss and obtain your requirement</li>
                <li class="text-[#8D8EA3] list-disc">Defines the service scope</li>
                <li class="text-[#8D8EA3] list-disc">Management presentation to get your input and carry you along the development process</li>
                <li class="text-[#8D8EA3] list-disc">Sign-off: we implement the project following the specification</li>
                <li class="text-[#8D8EA3] list-disc">Provide standard technical support as required</li>
            </ul>
        </div>

        <div class="w-full flex flex-col items-center gap-8">
            <h2 class=" text-center lg:text-4xl text-2xl font-bold text-[#0E2B61]">KEY BENEFITS</h2>
            <p class="text-[#8D8EA3] text-center font-semibold">The members of the team posses a broad range of experience and expertise, so every phase of the project is monitored and implemented to ensure the highest quality result.</p>
            <ul class="w-full flex flex-col items-start px-8">
                <li class="text-[#8D8EA3] list-disc">Our creative and technical team members are immediately involved in your brainstorming session, enabling us to understood your goals and strategies to give you the best possible solutions.</li>
                <li class="text-[#8D8EA3] list-disc">We develop and maintain TRUSTING; beneficial relationships with our client by working hand in hand at team-building with your organisation to be sure business objectives are met.</li>
                <li class="text-[#8D8EA3] list-disc">We use a project management process that actively involves our clients during the duration of the project and employ cost effective approach that are sensitive to budget concerns.</li>
            </ul>
            <p class="text-[#8D8EA3] text-center font-semibold">The build process of all Dervac websites follows the same path so it is clear, and easy for you to follow. This outlines the 9 steps a website goes through during this process and the client involvement at each of these steps.</p>
        </div>

        <div class="grid lg:grid-cols-2 grid-cols-1 w-full gap-10">
            <div v-for="benefit in benefits" class="cont transition-all duration-[0.3s] bg-white w-full flex gap-6 p-6 rounded-xl" style="box-shadow: 2px 2px 10px 1px rgb(203, 202, 202), -2px -2px 10px 1px rgb(203, 202, 202);">
                <p class="text-xl font-bold text-[#0E2B61]">{{ benefit.num }}</p>
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#0E2B61]">{{benefit.header}}</h3>
                    <p class="text-[#8D8EA3] text-[15px]">{{benefit.content}}</p>
                    <!-- <div class="flex md:flex-row flex-col justify-between">
                        <p class="text-sm font-bold text-[#737373]">Website Consultation,</p>
                        <p class="text-sm font-bold text-[#737373]">Supply Required Information,</p>
                        <p class="text-sm font-bold text-[#737373]">Timeframe: 2 Weeks</p>
                    </div> -->
                </div>
            </div>

            <!-- <div class="cont transition-all duration-[0.3s] bg-white w-full flex gap-6 p-6 rounded-xl" style="box-shadow: 2px 2px 10px 1px rgb(203, 202, 202), -2px -2px 10px 1px rgb(203, 202, 202);">
                <p class="text-xl font-bold text-[#0E2B61]">2.</p>
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#0E2B61]">DESIGN</h3>
                    <p class="text-[#8D8EA3] text-[15px]">We will provide a design mock-up based on the information from the Discovery stage. Up to 2 rounds of design revisions are included. <br><br> Please note that premium design may extend the estimated timeframe.</p>
                    <div class="flex md:flex-row flex-col justify-between">
                        <p class="text-sm font-bold text-[#737373]">Give Design Feedback,</p>
                        <p class="text-sm font-bold text-[#737373]"> Approve a Design Layout,</p>
                        <p class="text-sm font-bold text-[#737373]">Timeframe: 2 Weeks</p>
                    </div>
                </div>
            </div> -->

            <!-- <div class="cont transition-all duration-[0.3s] bg-white w-full flex gap-6 p-6 rounded-xl" style="box-shadow: 2px 2px 10px 1px rgb(203, 202, 202), -2px -2px 10px 1px rgb(203, 202, 202);">
                <p class="text-xl font-bold text-[#0E2B61]">3.</p>
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#0E2B61]">DEVELOPMENT</h3>
                    <p class="text-[#8D8EA3] text-[15px]">We take your confirmed design layout and develop a fully functional website with all the features as per the selected website package. You will be provided with a testing link to approve the website build which contains dummy content only at this stage.</p>
                    <div class="flex md:flex-row flex-col justify-between">
                        <p class="text-sm font-bold text-[#737373]">Prepare Website Content,</p>
                        <p class="text-sm font-bold text-[#737373]">Approve Website Build,</p>
                        <p class="text-sm font-bold text-[#737373]">Timeframe: 2 Weeks</p>
                    </div>
                </div>
            </div> -->

            <!-- <div class="cont transition-all duration-[0.3s] bg-white w-full flex gap-6 p-6 rounded-xl" style="box-shadow: 2px 2px 10px 1px rgb(203, 202, 202), -2px -2px 10px 1px rgb(203, 202, 202);">
                <p class="text-xl font-bold text-[#0E2B61]">4.</p>
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#0E2B61]">DATA LOADING</h3>
                    <p class="text-[#8D8EA3] text-[15px]">Once the development is approved we provide you with the login access to the Content Management System so you can upload your text, photos and other content into the new website. Any optional training sessions purchased will be conducted at this stage.</p>
                    <div class="flex md:flex-row flex-col justify-between">
                        <p class="text-sm font-bold text-[#737373]">Attend Training Session,</p>
                        <p class="text-sm font-bold text-[#737373]">Load Website Content,</p>
                        <p class="text-sm font-bold text-[#737373]">Confirm Website Launch</p>
                        <p class="text-sm font-bold text-[#737373]">Timeframe: 2 Weeks</p>
                    </div>
                </div>
            </div> -->
            
            <!-- <div class="cont transition-all duration-[0.3s] bg-white w-full flex gap-6 p-6 rounded-xl" style="box-shadow: 2px 2px 10px 1px rgb(203, 202, 202), -2px -2px 10px 1px rgb(203, 202, 202);">
                <p class="text-xl font-bold text-[#0E2B61]">5.</p>
                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-[#0E2B61]">DEPLOYMENT</h3>
                    <p class="text-[#8D8EA3] text-[15px]">Once you have loaded all your content onto the website and notified us for launch, we will get your website live so that it can be accessed via the internet on your primary domain name.</p>
                    <div class="flex md:flex-row flex-col justify-between">
                        <p class="text-sm font-bold text-[#737373]">Pop the Bottle of Champagne!,</p>
                        <p class="text-sm font-bold text-[#737373]">Timeframe: 1 Week</p>
                    </div>
                </div>
            </div> -->
        </div>

        <div class="space-y-4">
            <h3 class="lg:text-4xl md:text-3xl text-xl text-[#0E2B61]">ESTIMATED PROJECT TIMEFRAME</h3>
            <p class="lg:text-xl md:text-lg text-md text-[#8D8EA3]"><span class="font-bold text-[#737373]">Please Note: </span>Timeframes given are indicative and included as a guide only. At various stages throughout the process client input and signoff will be required. Dervac Technologies cannot be held responsible for extended project timeframes due to delays in receiving information or approval from clients. An optional fast-track fee can be purchased to give your project priority whenever possible throughout this process.</p>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                benefits: [
                    {
                        num: 1,
                        header: "Efficiently utilize resources",
                        content: " Mastering the art of resource efficiency to achieve optimal performance."
                    },
                    {
                        num: 2,
                        header: "Deploy resources optimally",
                        content: " Implementing innovative strategies for the optimal deployment of resources."
                    },
                    {
                        num: 3,
                        header: "Reduce infrastructure and operating costs",
                        content: " Streamlining operational costs through effective and economical management."
                    },
                    {
                        num: 4,
                        header: "Design and implement to precision",
                        content: " Executing projects with meticulous attention to detail, ensuring precision in every aspect."
                    },
                    {
                        num: 5,
                        header: "Improve revenue realization",
                        content: " Adopting a holistic approach to improve revenue streams and overall financial performance."
                    },
                    {
                        num: 6,
                        header: "Enhance Security & Safety Measures",
                        content: " Implementing comprehensive security measures to safeguard assets and information."
                    },
                    {
                        num: 7,
                        header: "Professional & Friendly Staff",
                        content: "Embodying professionalism with a focus on meeting and exceeding client expectations through a friendly and dedicated staff."
                    },
                    {
                        num: 8,
                        header: "Proven Track Record",
                        content: "Demonstrate a consistent and proven track record of excellence in service delivery and project execution."
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.cont:hover h3, .cont:hover > p{
    color: #DC2828;
    transition: color 0.1s linear;
}
.cont:hover{
    transform: translateY(-10px);
    transition: transform 0.3s linear;
}
</style>