import express, { Application } from "express";
import "reflect-metadata";

const app: Application = express();
app.use(express.json());

export default app;
