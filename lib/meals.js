import sql from 'better-sqlite3'
import slugify from "slugify";
import xss from 'xss'
import fs from 'node:fs'

const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000))
    // throw Error('Something went wrong')
    return db.prepare('SELECT * FROM meals').all()
}

export async  function saveMeals(meal){
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extension}`
    const stream = fs.createWriteStream(`public/images/${fileName}`)
    const bufferedImage =  await meal.image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage),(error)=>{
        if(error){
            throw new Error('Saving image failed')
        }})

    meal.image = `/images/${fileName}`

    const stmt = db.prepare('INSERT INTO meals (title, summary, instructions, creator, creator_email, image ,slug) VALUES (?, ?, ?, ?, ?, ?, ?)')
    const info = stmt.run(meal.title, meal.summary, meal.instructions, meal.creator, meal.creator_email, meal.image, meal.slug)
    console.log(info)
    return info
}

// export function getMeal(slug) {
//     return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
// }