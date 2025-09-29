import dotenv from "dotenv";

import express from "express";
const app = express();

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });
connectDB()
  .then((res) => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`sever is running at port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!", error);
  });
