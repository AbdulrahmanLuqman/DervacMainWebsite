<template>
    <section class="my-20">
        <form class="border border-4 w-[60%] mx-auto rounded p-14 space-y-10">
            <div class="flex gap-12">
                <div class="flex flex-col gap-2 w-full">
                    <label for="name" class="font-semibold text-[#224C75]">Full name *</label>
                    <input id="name" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="e.g.,Kareem Abdulateef">
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="company" class="font-semibold text-[#224C75]">Organization *</label>
                    <input id="company" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="Company Name">
                </div>
            </div>
            <div class="flex gap-12">
                <div class="flex flex-col gap-2 w-full">
                    <label for="work" class="font-semibold text-[#224C75]">Work email address *</label>
                    <input id="work" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="name@company.com">
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="number" class="font-semibold text-[#224C75]">Phone number *</label>
                    <input id="number" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="Full Number(incl.prefix)">
                </div>
            </div>
            <div class="flex gap-12">
                <div class="flex flex-col gap-2 w-full">
                    <label for="size" class="font-semibold text-[#224C75]">Company size *</label>
                    <select id="size" class="border rounded-lg outline-none py-4 px-10 focus:border-[#DC2828] text-[#8D8EA3] font-semibold" type="text">
                        <option class="text-[#8D8EA3] font-semibold">Please Select</option>
                        <option class="text-[#8D8EA3] font-semibold">1(freelancer)</option>
                        <option class="text-[#8D8EA3] font-semibold">2-19</option>
                        <option class="text-[#8D8EA3] font-semibold">20-49</option>
                        <option class="text-[#8D8EA3] font-semibold">50+</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="inquiry" class="font-semibold text-[#224C75]">What is your inquiry about? *</label>
                    <select id="inquiry" class="border rounded-lg outline-none py-4 px-10 focus:border-[#DC2828] text-[#8D8EA3] font-semibold" type="text">
                        <option class="text-[#8D8EA3] font-semibold">Please Select</option>
                        <option class="text-[#8D8EA3] font-semibold">General Information Request</option>
                        <option class="text-[#8D8EA3] font-semibold">Partner Relations</option>
                        <option class="text-[#8D8EA3] font-semibold">Careers</option>
                        <option class="text-[#8D8EA3] font-semibold">Software Licensing</option>
                        <option class="text-[#8D8EA3] font-semibold">I need help</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-col gap-2 w-full">
                    <label for="message" class="font-semibold text-[#224C75]">How can we help you? *</label>
                    <textarea id="message" class="border rounded-lg outline-none py-4 px-10 text-[#224C75] focus:border-[#DC2828]" type="text" placeholder="Let us know what you need"></textarea>
            </div>
            <p class="w-full bg-[#224C75] font-semibold text-white text-lg rounded-md py-2 cursor-pointer text-center hover:bg-[#DC2828] transition-all duration-[0.3s] hover:transition-all hover:duration-[0.3s]">Submit</p>
        </form>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>