import {StudentType} from "./03_02";
import {addSkill,  doesStudentLiveIn, makeStudentActive} from "./03";


let student: StudentType;
beforeEach(() => {
    student = {
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
})


test("new tech skill should be added,to student", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})

test("student should be made active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})


test("does student live in city?", () => {

    let result1= doesStudentLiveIn(student,"Moscow");
    let result2= doesStudentLiveIn(student,"Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})