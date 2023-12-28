import styles from './page.module.css';
import Image from "next/image";
import {getMeal, getMeals} from "@/lib/meals";
import {notFound} from "next/navigation";


const MealDetail= async ({params}) => {
    const isOnline = process.env.ONLINE_OFFLINE_MODE
    const {mealSlug} = params;

    let foundMeal;

    if(isOnline ==='OFFLINE'){
        foundMeal= await  getMeal(mealSlug);
    }else{
        const meals = await getMeals();
         foundMeal= meals.find(meal=>meal.slug===mealSlug);
    }
    if(!foundMeal){
        notFound();
    }

    foundMeal.instructions = foundMeal.instructions.replace(/\n/g, '<br/>');
    return (
        <>
            <header  className={styles.header}>
                <div className={styles.image}>
                    <Image src={foundMeal.image} alt={foundMeal.title} fill/>
                </div>
                <div className={styles.headerText}>
                    <h1>{foundMeal.title}</h1>
                    <p className={styles.creator}>by <a href={`mailto:${foundMeal.creator_email}`}>{foundMeal.creator}</a></p>
                    <p className={styles.summary}>SUMMARY</p>
                </div>
            </header>
            <main>
                <p className={styles.instructions} dangerouslySetInnerHTML={{
                    __html:foundMeal.instructions
                }}></p>
            </main>
        </>
    );
};

export default MealDetail;