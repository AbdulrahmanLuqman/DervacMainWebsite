import { defineStore } from 'pinia'

export default function store() {
  return defineStore('elements', {
    state: ()=>({
      inActiveMode: false,

      ourCompany: [
        {
          heading: "Mission and Vision",
          content: "To be a leading global provider of innovative, systematic, and goal-oriented quality services in Nigeria and Africa, offering efficient, cost-effective, and client-centric ICT solutions.",
          routeTo: "/mission-vision-and-values"
        },
        {
          heading: "Our Strategy",
          content: "At Dervac, we won't just plan your company's IT Solutions; we will , and <b>BUILD IT</b>, <b>MAINTAIN IT</b> and <b>HELP YOU GROW YOUR BUSINESS</b>.",
          routeTo: "/strategy"
        },
        {
          heading: "Our Promise and Dedication",
          content: "We are dedicated to serving, satisfying and making our valued clients stay ahead of today's technology by providing updated IT Solutions. And to win new ones through excellent performance.",
          routeTo: "/promise-and-dedication"
        },
        {
          heading: "Commitment",
          content: "We remain steadfast in your project, dedicated to fulfilling your entrusted tasks. We tirelessly commit resources to ensure timely project completion and delivery",
          routeTo: "/commitment"
        }
      ]
    })
  })()
}
