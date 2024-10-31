import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";
/*
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: resolve(__dirname, "../.env")
});
const app = express(); 

(async () => {
  try {
    mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERROR: ", error);
      throw err;
    })
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on http://localhost:${process.env.PORT}`);
      
    })
  } catch (error) {
    console.log("Error: ", error);
    throw err
  }
})();
*/

dotenv.config({
  path: "../.env",
});
console.log(process.env);

app.on("error", () => {
  console.log("ERROR: ", error);
  throw err;
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT);
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
  })
  .catch((err) => {
    console.log("MongoDB connection failed: ", err);
  });
