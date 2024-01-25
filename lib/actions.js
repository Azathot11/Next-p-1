'use server';

import {saveMeals} from "@/lib/meals";
import {redirect} from "next/navigation";
import {dummyMeals} from "@/usefullData";
import {revalidatePath} from "next/cache";


export const createObjectFromFormData = (formData) => {
    const valuesArray = ['name', 'email', 'title', 'summary', 'instructions', 'image'];
    const renameMap = {'name': 'creator', 'email': 'creator_email'};
    const result = {};
    valuesArray.forEach((value) => {
        const key = renameMap[value] || value;
        result[key] = formData.get(value);
    });
    return result;
}


function isVlaidMeal(text) {
    return !text || text.trim() === '';
}

export const sharMeal = async (prevState,formData) => {
    const meal = createObjectFromFormData(formData);
    await saveMeals(meal)

    if (isVlaidMeal(meal.title) || isVlaidMeal(meal.summary) || isVlaidMeal(meal.instructions) || isVlaidMeal(meal.creator) || isVlaidMeal(meal.creator_email) || !meal.creator_email.includes('@') || !meal.image || meal.image.size === 0) {
        return {
            message: 'Please enter valid data',
        }
    }

    revalidatePath('/meals')

    redirect('/meals')
}


// export const shareMealsOnline = async (formData) => {
//     'use server';
//     const meal = createObjectFromFormData(formData);
//     console.log(meal)
//     dummyMeals.push(meal); // Add the new meal to dummyMeals
//     redirect('/meals')
// }