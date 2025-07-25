const express = require("express");
const { registerUser, loginUser, getCurrentuserInfo } = require("../controller/userController");
const { validateJWTToken } = require("../middleware/authMiddleware");

const userRouter = express.Router();


userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);

userRouter.get('/getCurrentUser', validateJWTToken, getCurrentuserInfo);

module.exports = userRouter;