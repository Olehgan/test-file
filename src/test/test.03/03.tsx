import {StudentType} from "./03_02";
import {GovernmentBuildingType, HouseType} from "../test.02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill

    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true;
}


export const doesStudentLiveIn = (st: StudentType, cityName: string) => {

    return st.address.city.title === cityName;
}

export const  addMoneyToBudget = (building: GovernmentBuildingType, budget: number)=>{
building.budget+=budget;
}

export const  repairHouse = (houseType: HouseType)=>{
    houseType.repaired = true;
}

export const  toFireStaff=(building: GovernmentBuildingType, staffCountToFire: number)=>{
   building.staffCount -= staffCountToFire
}

export const  toHireStaff= (building: GovernmentBuildingType, staffCountToFire: number)=>{
    building.staffCount += staffCountToFire
}