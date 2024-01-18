'use server';

import {saveMeals} from "@/lib/meals";
import {redirect} from "next/navigation";

export const sharMeal= async (formData)=>{
    'use server';

    const createObjectFromFormData = (formData, valuesArray, renameMap = {}) => {
        const result = {};
        valuesArray.forEach((value) => {
            const key = renameMap[value] || value;
            result[key] = formData.get(value);
        });
        return result;
    }


    const valuesArray  = ['name','email','title','summary','instructions','image'];
    const renameMap = { 'name': 'creator', 'email': 'creator_email' };
    const meal = createObjectFromFormData(formData, valuesArray, renameMap);

    await saveMeals(meal)
    redirect('/meals' +
        '')
}

