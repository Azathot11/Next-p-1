import sql from 'better-sqlite3'

const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000))
    // throw Error('Something went wrong')
    return db.prepare('SELECT * FROM meals').all()
}

// export function getMeal(slug) {
//     return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
// }