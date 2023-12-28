import styles from './page.module.css';
import Image from "next/image";
import {getMeal} from "@/lib/meals";
import {notFound} from "next/navigation";


const MealDetail = ({params}) => {
    const {mealSlug} = params;
    const foundMeal = getMeal(mealSlug);

    if (!foundMeal) {
        notFound();
    }
    foundMeal.instructions = foundMeal.instructions.replace(/\n/g, '<br/>');
    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image src={foundMeal.image} alt={foundMeal.title} fill/>
                </div>
                <div className={styles.headerText}>
                    <h1>{foundMeal.title}</h1>
                    <p className={styles.creator}>by <a
                        href={`mailto:${foundMeal.creator_email}`}>{foundMeal.creator}</a></p>
                    <p className={styles.summary}>SUMMARY</p>
                </div>
            </header>
            <main>
                <p className={styles.instructions} dangerouslySetInnerHTML={{
                    __html: foundMeal.instructions
                }}></p>
            </main>
        </>
    );
};

export default MealDetail;