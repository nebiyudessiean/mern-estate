import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const dbClient = new MongoClient(process.env.MONGO);

try {
  const database = dbClient.db("mern-estate");
} finally {
  await dbClient.close();
}

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
