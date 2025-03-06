const express = require("express");
require("dotenv").config();
const app =express();
const dbConfig = require("./config/dbConfig");
const userRouter = require("./routes/userRouter");

app.use(express.json());
//app/v1/users/registerUser

app.use("/app/v1/user",userRouter)

app.get("/", (req, res)=>{
    res.send("Hello world")
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port no ${process.env.PORT}`)
});