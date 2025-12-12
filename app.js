const dotenv = require('dotenv') // Til at lave en .env fil, så vi kan have lokale variabler.
const mysql = require('mysql2/promise') // Til at importere data fra fra en MySQL database. Vi bruger promise for at kunne udnytte asynkronitet til flere MySQL kald.
const path = require('path') // Path som indbygget node.js modul, så vi kan lave en statisk public mappe til HTML filer.
const express = require('express')

dotenv.config(); // configure vores .env fil

const app = express();
const port = 8080;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

/*  -----------

    Forklaring af Express.static og path.join(process.cwd)
     1. Kombinationen er path.join og process.cwd returnere hvilken mappe som vores fil/express server kører fra.
     1. Kombinationen er path.join og process.cwd returnere hvilken mappe som vores fil/express app kører fra.
     2. express.static laver et middelware hvor filer er tilgængelige igennem HTTP.
     I dette tilfælde bruger vi mappen "public", som vores offentlig tilgængelige mappe via HTTP.

    ----------- */

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/data", async (req, res) => {
    const update = await pool.execute(`SELECT * FROM ek_kvalitet`)
    res.send(update)
});

app.get("/data/chart1", async (req, res) => {
    const [update] = await pool.execute(`SELECT * FROM employed_end_november`)
    res.send(update)
});


app.get("/events", async (req, res) => {
    const data = await pool.execute(`SELECT * FROM events`)
    res.send(data)
});


app.get("/data/chart2", async (req, res) => {
    const [update] = await pool.execute(`SELECT * FROM school_growth`)
    res.send(update)
});


app.get("/data/chart3", async (req, res) => {
    const [update] = await pool.execute(`SELECT
                                             COUNT(CASE WHEN Køn = 'Kvinde' THEN 1 END) AS Kvinder,
                                             COUNT(CASE WHEN Køn = 'Mand' THEN 1 END) AS Mænd
                                         FROM ek_kvalitet
                                         WHERE INSTITUTIONS_KATEGORI = 'IT & Digital'`)
    res.send(update)
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

