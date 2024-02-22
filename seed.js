import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

//create table for portraits
db.query(`CREATE TABLE IF NOT EXISTS portraits (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    url TEXT
)`);

//insert data in to table
db.query(`INSERT INTO portraits (title, author, url)
VALUES
('example title', 'example author', 'example url'), ('title2', 'author 2', 'url2'), ('example title3', 'example author2', 'example url')`);
