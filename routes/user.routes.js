const express = require('express');
const {registerUser , loginUser , userProfile, updateUser , deleteUser , changePassword} = require('../controller/user.controller');
const { verifyToken } = require('../helpers/tokenVerify');

const userRoutes = express.Router();

userRoutes.post("/register" , registerUser);
userRoutes.post("/login" , loginUser);

userRoutes.get("/me" , verifyToken ,  userProfile);
userRoutes.put("/update-profile" , verifyToken ,  updateUser);
userRoutes.delete("/delete-profile" , verifyToken ,  deleteUser);
userRoutes.post("/change-password" , changePassword);


module.exports = userRoutes;
