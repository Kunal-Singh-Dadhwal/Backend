import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
  path: "../.env",
});
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      text: "HAHAH very funnny",
    },
    {
      id: 2,
      text: "Aur jyada funny",
    }
  ];
  res.send(jokes);
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
  
});