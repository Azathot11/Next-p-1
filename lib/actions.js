'use server';

import {saveMeals} from "@/lib/meals";
import {redirect} from "next/navigation";
import {dummyMeals} from "@/usefullData";


export const createObjectFromFormData = (formData) => {
    const valuesArray  = ['name','email','title','summary','instructions','image'];
    const renameMap = { 'name': 'creator', 'email': 'creator_email' };
    const result = {};
    valuesArray.forEach((value) => {
        const key = renameMap[value] || value;
        result[key] = formData.get(value);
    });
    return result;
}


export const sharMeal= async (formData)=>{
    'use server';

    const meal = createObjectFromFormData(formData);
    await saveMeals(meal)
    redirect('/meals')
}


// export const shareMealsOnline = async (formData) => {
//     'use server';
//     const meal = createObjectFromFormData(formData);
//     console.log(meal)
//     dummyMeals.push(meal); // Add the new meal to dummyMeals
//     redirect('/meals')
// }