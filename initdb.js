require('dotenv').config();

const sql = require('better-sqlite3');
const {dummyMeals} = require("@/usefullData");
const db = sql('meals.db');

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
    const stmt = db.prepare(`
      INSERT INTO meals (
         slug,
         title,
         image,
         summary,
         instructions,
         creator,
         creator_email
      ) VALUES (
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

    const getStmt = db.prepare("SELECT 1 FROM meals WHERE slug = ?");

    for (const meal of dummyMeals) {
        const row = getStmt.get(meal.slug);
        if (!row) {
            stmt.run(meal);
        }
    }
}

if (process.env.ONLINE_OFFLINE_MODE === "OFFLINE") {
    initData();
}