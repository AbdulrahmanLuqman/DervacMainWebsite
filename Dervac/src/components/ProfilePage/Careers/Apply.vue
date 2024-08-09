<template>
    <section class="lg:px-20 md:px-16 px-10 my-20 space-y-4 ">
        <p class="text-center lg:text-2xl text-xl font-bold text-[#0E2B61]">Apply online</p>

        <form class="border border-4 lg:w-[60%] mx-auto rounded lg:p-14 p-6 space-y-10">
            <div class="flex lg:flex-row flex-col gap-12">
                <div class="flex flex-col gap-2 w-full">
                    <label for="name" class="font-semibold text-[#224C75]">Full name *</label>
                    <input id="name" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="e.g.,Kareem Abdulateef">
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="number" class="font-semibold text-[#224C75]">Phone number *</label>
                    <input id="number" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="Full Number(incl.prefix)">
                </div>
            </div>
            <div class="flex lg:flex-row flex-col gap-12">
                <div class="flex flex-col gap-2 w-full">
                    <label for="email" class="font-semibold text-[#224C75]">Email address *</label>
                    <input id="email" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="name@company.com">
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="address" class="font-semibold text-[#224C75]">Your address *</label>
                    <input id="address" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="9, Alhaji Odunsanya, Bariga">
                </div>
            </div>
            <div class="flex lg:flex-row flex-col gap-12">
                <div class="flex flex-col gap-2 w-full">
                    <label for="position" class="font-semibold text-[#224C75]">Position you are applying for *</label>
                    <input id="position" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="Marketing intern">
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="work" class="font-semibold text-[#224C75]">Resume *</label>
                    <input accept=".pdf" type="file">
                </div>

            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label for="message" class="font-semibold text-[#224C75]">Additional Information *</label>
                    <textarea id="message" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="Let us know what you need"></textarea>
            </div>
            <input type="submit" class="w-full bg-[#224C75] font-semibold text-white text-lg rounded-md py-2 cursor-pointer text-center hover:bg-[#DC2828] transition-all duration-[0.3s] hover:transition-all hover:duration-[0.3s]" />
        </form>
        <p>For more details or inquiries, please e-mail <a href="mailto:careers@dervac.com">careers@dervac.com</a></p>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>