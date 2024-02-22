import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const PORT = "7979";
app.listen(PORT, () => {
  console.log("port is listening on port 7979");
});

app.get("/", (request, response) => {
  response.send("amazing stuff");
});

//get route for info from database
app.get("/portraits", async (request, response) => {
  const result = await db.query("SELECT * FROM portraits");
  response.json(result.rows);
});

//add portraits
app.post();

//update portraits
app.put();

//delete portraits
app.delete();
