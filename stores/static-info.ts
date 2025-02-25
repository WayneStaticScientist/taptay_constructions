export interface StaticInfo {
    email: string,
    city: string,
    place: string
    awards: number,
    addrees: string,
    experts: number,
    projects: number,
    startYear: number,
    companyName: string,
    assistants: number,
    officeWorkers: number,
    phoneNumber: string[],
}
export const CompanyInfo: StaticInfo = {
    email: "tapiwakwangwa@yahoo.com",
    startYear: 2010,
    phoneNumber: ["+263772952268", "+263718952268", '+263734061090'],
    addrees: "StandNo 11082",
    city: "Cnr Highfields Rd/Craster Rd",
    place: "Sourtherton Harare",
    companyName: "TapTay",
    projects: 250,
    awards: 12,
    officeWorkers: 5,
    assistants: 15,
    experts: 10,
}
export const ClientTestimonials: { name: string, rate: number, message: string, image: string }[] = [
    {
        name: "Wayne Takundwa",
        message:
            `TapTay Constructions did an excellent job on our home renovation. The team was professional, efficient, and the quality of work was outstanding. Highly recommend!`,
        image: "assets/img/testimonial/01.jpg",
        rate: 5,
    },
    {
        name: "Linon ArsDube",
        message:
            ` TapTay Constructions exceeded our expectations with their attention to detail and commitment to quality. The project was completed on time and within budget. `,
        image: "assets/img/testimonial/02.jpg",
        rate: 5,
    },
    {
        name: "Wananai Badza",
        message:
            `TapTay Constructions provided exceptional service from start to finish. Their team was knowledgeable, courteous, and delivered high-quality results.`,
        image: "assets/img/testimonial/03.jpg",
        rate: 5,
    },
    {
        name: "Sibothile Xuma",
        message:
            ` TapTay Constructions transformed our vision into reality. Their craftsmanship and dedication were evident in every aspect of the project. We couldn't be happier with the results.
       `,
        image: "assets/img/testimonial/04.jpg",
        rate: 5,
    }
]