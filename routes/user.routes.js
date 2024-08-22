const express = require('express');
const {registerUser , loginUser , userProfile} = require('../controller/user.controller');
const { verifyToken } = require('../helpers/tokenVerify');

const userRoutes = express.Router();

userRoutes.post("/register" , registerUser);
userRoutes.post("/login" , loginUser);

userRoutes.get("/me" , verifyToken ,  userProfile)

module.exports = userRoutes;
