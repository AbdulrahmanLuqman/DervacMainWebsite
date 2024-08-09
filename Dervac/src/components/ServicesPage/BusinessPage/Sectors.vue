<template>
    <section id="sector" class="my-20 space-y-[70px] lg:px-20 md:px-16 px-10">
        <div class="space-y-2">
            <h3 class="text-[#8696AB] text-center font-semibold tracking-widest">Sectors</h3>
            <p class="text-[#224C75] lg:text-3xl md:text-2xl text-xl font-semibold text-center">The industry sectors we served include</p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            <div v-for="sector in sectors" class="container flex gap-4 items-start">
                <div class="icon" v-html="sector.icon">
                </div>
                <div class="space-y-2">
                    <h4 class="text-[#224C75] text-xl font-bold">{{ sector.heading }}</h4>
                    <p class="text-[#8696AB]">{{ sector.content }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {defineComponent} from 'vue'
    export default defineComponent({
        data(){
            return{
                sectors: [
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#224C75" d="M19 19h-2q-.425 0-.713-.288T16 18q0-.425.288-.713T17 17h2v-2q0-.425.288-.713T20 14q.425 0 .713.288T21 15v2h2q.425 0 .713.288T24 18q0 .425-.288.713T23 19h-2v2q0 .425-.288.713T20 22q-.425 0-.713-.288T19 21v-2ZM4 12h16V8H4v4Zm0 8q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v6h-3q-2.075 0-3.538 1.463T14 17v3H4Z"/></svg>',
                        heading:'Investment Banking',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis deleniti consectetur, suscipit ducimus molestias.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#224C75" d="M19 19h-2q-.425 0-.713-.288T16 18q0-.425.288-.713T17 17h2v-2q0-.425.288-.713T20 14q.425 0 .713.288T21 15v2h2q.425 0 .713.288T24 18q0 .425-.288.713T23 19h-2v2q0 .425-.288.713T20 22q-.425 0-.713-.288T19 21v-2ZM4 12h16V8H4v4Zm0 8q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v6h-3q-2.075 0-3.538 1.463T14 17v3H4Z"/></svg>',
                        heading:'Investment Banking',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis deleniti consectetur, suscipit ducimus molestias.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#224C75" d="M19 19h-2q-.425 0-.713-.288T16 18q0-.425.288-.713T17 17h2v-2q0-.425.288-.713T20 14q.425 0 .713.288T21 15v2h2q.425 0 .713.288T24 18q0 .425-.288.713T23 19h-2v2q0 .425-.288.713T20 22q-.425 0-.713-.288T19 21v-2ZM4 12h16V8H4v4Zm0 8q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v6h-3q-2.075 0-3.538 1.463T14 17v3H4Z"/></svg>',
                        heading:'Investment Banking',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis deleniti consectetur, suscipit ducimus molestias.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#224C75" d="M19 19h-2q-.425 0-.713-.288T16 18q0-.425.288-.713T17 17h2v-2q0-.425.288-.713T20 14q.425 0 .713.288T21 15v2h2q.425 0 .713.288T24 18q0 .425-.288.713T23 19h-2v2q0 .425-.288.713T20 22q-.425 0-.713-.288T19 21v-2ZM4 12h16V8H4v4Zm0 8q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v6h-3q-2.075 0-3.538 1.463T14 17v3H4Z"/></svg>',
                        heading:'Investment Banking',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis deleniti consectetur, suscipit ducimus molestias.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#224C75" d="M19 19h-2q-.425 0-.713-.288T16 18q0-.425.288-.713T17 17h2v-2q0-.425.288-.713T20 14q.425 0 .713.288T21 15v2h2q.425 0 .713.288T24 18q0 .425-.288.713T23 19h-2v2q0 .425-.288.713T20 22q-.425 0-.713-.288T19 21v-2ZM4 12h16V8H4v4Zm0 8q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v6h-3q-2.075 0-3.538 1.463T14 17v3H4Z"/></svg>',
                        heading:'Investment Banking',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis deleniti consectetur, suscipit ducimus molestias.'
                    },
                    {
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#224C75" d="M19 19h-2q-.425 0-.713-.288T16 18q0-.425.288-.713T17 17h2v-2q0-.425.288-.713T20 14q.425 0 .713.288T21 15v2h2q.425 0 .713.288T24 18q0 .425-.288.713T23 19h-2v2q0 .425-.288.713T20 22q-.425 0-.713-.288T19 21v-2ZM4 12h16V8H4v4Zm0 8q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v6h-3q-2.075 0-3.538 1.463T14 17v3H4Z"/></svg>',
                        heading:'Investment Banking',
                        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci corporis deleniti consectetur, suscipit ducimus molestias.'
                    }
                ]
            }
        }
    })
</script>

<style scoped>
.container:hover .icon{
    animation: shake 0.5s ease-in-out infinite;
}

@keyframes shake {
      0%, 100% {
        transform: translateY(0) rotateZ(0deg);
      }
      25%, 75% {
        transform: translateY(-7px) rotateZ(7deg);
      }
      50% {
        transform: translateY(7px) rotateZ(-7deg);
      }
    }
</style>