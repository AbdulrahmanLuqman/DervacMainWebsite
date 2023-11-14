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
      ],
      services: [
        {
          heading: 'Information & Communication Technology',
          icon: '<svg class="w-fit mx-auto" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#253858" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-.175-.013-.363t-.012-.312q-.125.725-.675 1.2T18 13h-2q-.825 0-1.413-.587T14 11v-1h-4V8q0-.825.588-1.413T12 6h1q0-.575.313-1.012t.762-.713q-.5-.125-1.012-.2T12 4Q8.65 4 6.325 6.325T4 12h5q1.65 0 2.825 1.175T13 16v1h-3v2.75q.5.125.988.188T12 20Z"/></svg>',
          content: 'Dervac excels as an IT training leader, specializing in cutting-edge technologies. Our core competence lies in delivering expert-led programs, emphasizing practical skills, and instilling industry best practices for professionals success.',
          more: '/more',
        },        
        {
          heading: 'Software Development & Integration',
          icon: '<svg class="w-fit mx-auto" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#253858" d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"/></svg>',
          content: 'Dervac specializes in Software Development & Integration, showcasing a core competence in crafting seamless, efficient solutions. Our expertise ensures innovative, integrated software solutions aligned with industry best practices.',
          more: '/more',
        },
        {
          heading: 'Infrastructure & Support',
          icon: '<svg class="w-fit mx-auto" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#253858" d="M9 20q-3.35 0-5.675-2.325T1 12q0-3.35 2.325-5.675T9 4h6q3.35 0 5.675 2.325T23 12q0 3.35-2.325 5.675T15 20H9Zm3-6q.825 0 1.413-.588T14 12q0-.825-.588-1.413T12 10q-.825 0-1.413.588T10 12q0 .825.588 1.413T12 14Zm-1-5h2q.425 0 .713-.288T14 8q0-.425-.288-.713T13 7h-2q-.425 0-.713.288T10 8q0 .425.288.713T11 9Zm0 8h2q.425 0 .713-.288T14 16q0-.425-.288-.713T13 15h-2q-.425 0-.713.288T10 16q0 .425.288.713T11 17Zm5-3q.425 0 .713-.288T17 13v-2q0-.425-.288-.713T16 10q-.425 0-.713.288T15 11v2q0 .425.288.713T16 14Zm-8 0q.425 0 .713-.288T9 13v-2q0-.425-.288-.713T8 10q-.425 0-.713.288T7 11v2q0 .425.288.713T8 14Z"/></svg>',
          content: 'Dervac excels in Infrastructure & Support Services, providing robust systems and reliable support. Our core competence ensures seamless operations and optimal performance for your business infrastructure.',
          more: '/more',
        },
        {
          heading: 'Security Systems & Cybersecurity',
          icon: '<svg class="w-fit mx-auto" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#253858" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm-2-6h4q.425 0 .713-.288T15 15v-3q0-.425-.288-.713T14 11v-1q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10v1q-.425 0-.713.288T9 12v3q0 .425.288.713T10 16Zm1-5v-1q0-.425.288-.713T12 9q.425 0 .713.288T13 10v1h-2Z"/></svg>',
          content: 'Dervac leads in Security Systems and Cybersecurity, demonstrating core competence in fortifying digital landscapes. Our expertise ensures cutting-edge solutions, safeguarding against cyber threats with industry best practices.',
          more: '/more',
        },
        {
          heading: 'Business Solutions & Enterprise',
          icon: '<svg class="w-fit mx-auto" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#253858" d="M11 15v-2h2v2h-2Zm-1-9h4V4h-4v2ZM4 21q-.825 0-1.413-.588T2 19v-4h7v1q0 .425.288.713T10 17h4q.425 0 .713-.288T15 16v-1h7v4q0 .825-.588 1.413T20 21H4Zm-2-8V8q0-.825.588-1.413T4 6h4V4q0-.825.588-1.413T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v5h-7v-1q0-.425-.288-.713T14 11h-4q-.425 0-.713.288T9 12v1H2Z"/></svg>',
          content: '"Dervac excels in Business Solutions and Enterprises, showcasing core competence in tailoring strategic solutions. Our expertise drives business innovation, fostering growth and success with comprehensive enterprise solutions.',
          more: '/more',
        },
        {
          heading: 'Training Services & Customer Education',
          icon: '<svg class="w-fit mx-auto" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#253858" d="m16 10.6l4-2.3L16 6l-4 2.3l4 2.3Zm0 3.05l2.75-1.6v-2.1L16 11.55l-2.75-1.6v2.1l2.75 1.6ZM2 20v-3q1.25 0 2.125.875T5 20H2Zm5 0q0-2.075-1.463-3.538T2 15v-2q2.925 0 4.963 2.038T9 20H7Zm4 0q0-1.875-.713-3.513t-1.925-2.85q-1.212-1.212-2.85-1.924T2 11V9q2.275 0 4.275.863t3.5 2.362q1.5 1.5 2.363 3.5T13 20h-2Zm4 0q0-2.7-1.025-5.063t-2.788-4.124Q9.425 9.05 7.064 8.024T2 7V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20h-5Z"/></svg>',
          content: 'Dervac excels in Training Services & Customer Education, exhibiting core competence in fostering knowledge and skill development. Our expertise ensures impactful training programs, empowering individuals and enhancing customer education.',
          more: '/more',
        }
      ]
    })
  })()
}
