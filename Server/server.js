const express = require("express");
require("dotenv").config();
const app =express();
const dbConfig = require("./config/dbConfig");
const userRouter = require("./routes/userRouter");
const movieRouter = require("./routes/movieRouter");
const theatreRouter = require("./routes/theatreRouter");
console.log(dbConfig);

app.use(express.json());

app.use("/app/v1/users",userRouter);
app.use("/app/v1/users/admin",movieRouter);
app.use("/app/v1/users/admin",theatreRouter);

app.get("/", (req, res)=>{
    res.send("Hello world")
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port no ${process.env.PORT}`);
});