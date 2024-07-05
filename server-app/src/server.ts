// this is an entry point to run your app and you should mention this entry point at time of installing node into your project

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
dotenv.config(); //this is for fetching data from dotenv
connectDb();
const port = process.env.PORT || 5001;

const app = express();

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(port,()=>{
    console.log(`Server running on port : ${port}`);
});