const express = require("express");
const { registerUser, loginUser, getCurrentuserInfo } = require("../controller/userController");
const { validateJWTToken } = require("../middleware/authMiddleware");

const userRouter = express.Router();


userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
// protected route API
userRouter.get('/getCurrentuser', validateJWTToken, getCurrentuserInfo);

module.exports = userRouter;