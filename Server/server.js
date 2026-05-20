const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const dbConfig = require("./config/dbConfig");
const userRouter = require("./routes/userRouter");
const movieRouter = require("./routes/movieRouter");
const theatreRouter = require("./routes/theatreRouter");
console.log(dbConfig);

app.use(express.json());

app.use("/app/v1/users", userRouter);
app.use("/app/v1/users/admin", movieRouter);
app.use("/app/v1/users/theatres", theatreRouter);

// Serve React build
app.use(express.static(path.join(__dirname, "../client/build")));

// Catch-all route — must be LAST
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening to port no ${process.env.PORT}`);
});