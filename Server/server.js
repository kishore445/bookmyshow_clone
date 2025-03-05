const express = require("express");
require("dotenv").config();
const app =express();
const dbConfig = require("./config/dbConfig");


app.get("/", (req, res)=>{
    res.send("Hello world")
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port no ${process.env.PORT}`)
});