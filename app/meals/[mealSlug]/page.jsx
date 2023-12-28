import styles from './page.module.css';
import Image from "next/image";
import {getMeal} from "@/lib/meals";
import LoadingOut from "@/app/meals/loading-out";
import {Suspense} from "react";


const MealDetail= async ({params}) => {
    const {mealSlug} = params;
    const foundMeal= await  getMeal(mealSlug);

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