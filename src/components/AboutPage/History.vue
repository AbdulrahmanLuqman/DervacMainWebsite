<template>
    <section class="bg-[#0E2B61] py-20 space-y-10">
        <h1 class="text-white text-4xl font-bold text-center">Our History</h1>

        <div class="space-y-8">
            <div v-for="history in histories" :key="history.id" class="flex gap-20 justify-center">
                <p class="font-semibold text-white text-xl">{{ history.year }}</p>
                <p class="text-[#8D8EA3] font-semibold w-[700px] text-lg">{{ history.content }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    import {defineComponent} from 'vue'
    export default defineComponent({
        data(){
            return{
                histories: [
                    {
                        year: '1990 - 2021',
                        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ullam deserunt, nemo, expedita eos nisi illum nam error earum necessitatibus recusandae voluptate pariatur atque culpa dolor quis velit non vel!'
                    },
                    {
                        year: '1990 - 2021',
                        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ullam deserunt, nemo, expedita eos nisi illum nam error earum necessitatibus recusandae voluptate pariatur atque culpa dolor quis velit non vel!'
                    },
                    {
                        year: '1990 - 2021',
                        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ullam deserunt, nemo, expedita eos nisi illum nam error earum necessitatibus recusandae voluptate pariatur atque culpa dolor quis velit non vel!'
                    },
                    {
                        year: '1990 - 2021',
                        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ullam deserunt, nemo, expedita eos nisi illum nam error earum necessitatibus recusandae voluptate pariatur atque culpa dolor quis velit non vel!'
                    },
                ]
            }
        }
    })
</script>

<style scoped>

</style>