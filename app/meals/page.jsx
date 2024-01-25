import React, {Suspense} from 'react';
import styles from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/components/meals/Meals-grid";
import {getMeals} from "@/lib/meals";
import LoadingOut from "@/app/meals/loading-out";
import {dummyMeals} from "@/usefullData";


export const metadata = {
    title: 'All meals',
    description: "Browse all meals that have been shared by our community",
};



const Meals=async()=>{
    if(process.env.ONLINE_OFFLINE_MODE==='ONLINE'){


        return <MealsGrid meals={dummyMeals}/>;
    }
    const meals = await getMeals();
    return   <MealsGrid meals={meals || []}/>;
}

const MealsPage = async () => {

    return (
        <>
            <header className={styles.header}>
                <h1>Delicious meals, created{''} <span className={styles.highlight}>by you </span></h1>
                <p>Choose you favourite recipe and cook it yourself. It is easy and fun</p>
                <p className={styles.cta}>
                    <Link href={'/meals/share'}>Share favorite recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<LoadingOut/>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    );
};

export default MealsPage;