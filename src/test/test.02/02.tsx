 type LocalCityType = {
    title: string
    countyTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name:string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

 const student:StudentType = {
    id: 1,
    name: "Oleg",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countyTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "REACT",
        },
    ]
};
console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[2].title);

