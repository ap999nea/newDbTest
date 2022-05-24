import express from "express";
import "dotenv/config";
import router from "./router";
import { dirname } from "path";

const app = express();

app.use("/radice", express.static(dirname + "../dist/public"));

app.use(express.json());

app.use("/", router);

export default app;
