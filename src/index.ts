import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "./Routers/index.js"

dotenv.config();

const app = express();

app.use(json());

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor aberto na porta ${PORT}`);
})