const User = require("../model/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Registration
exports.registerUser = async (req , res) =>{
    try {
        let user = await User.findOne({email : req.body.email , isDelete: false});
        if(user){
            return res.status(400).json({message : "User Alredy Exist....."});
        }
        let hashPassword = await bcrypt.hash(req.body.password , 10);
        // console.log(hashPassword);
        user = await User.create({...req.body , password : hashPassword});
        user.save();
        res.status(201).json({user , message : "User Registration Success"})
    } catch (error) {
        console.log(error);
        res.json(500).json({message : "Internal Server Error"})
    }
}

//Login
exports.loginUser = async (req ,res) =>{
  try {
    let user = await User.findOne({email : req.body.email , isDelete : false});
    if(!user){
       return res.status(404).json({message : "User Not Found"});
    }
    let matchPassword = await bcrypt.compare(req.body.password , user.password);
    // console.log(matchPassword);
    if(!matchPassword){
        return res.status(400).json({message : "Email Or Password Not metched...."})
    }
    let token = await jwt.sign({userId : user._id} , process.env.JWT_SECRET ,);
    res.status(200).json({message : "Login Success" , token})
  } catch (error) {
    console.log(error);
    res.status(500).json({message : "Internal Server Error"})
  }
}

exports.userProfile = async (req ,res) =>{
  try {
    res.status(200).json(req.user)
  } catch (error) {
    console.log(error);
    res.status(500).json({message : "Internal server Error"})
  }
}

// Update User
exports.updateUser = async (req ,res) =>{
  try {
    let user = req.user;
    user = await User.findByIdAndUpdate(user._id , {$set : req.body} , {new : true});
    res.status(202).json({user , message : "User Update Success"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message : "Internal Server Error"})
  }
}

// delete user
exports.deleteUser = async (req , res) =>{
  try {
    let user = req.user;
    user = await User.findByIdAndUpdate(user._id , {$set : {isDelete: true}} , {new : true});
    res.status(202).json({user , message : "User Delete Success"})
  } catch (error) {
    console.log(error);
    res.status(500).json({message : "Internal Server Error....."});
  }
}

// Change Password 
exports.changePassword = async (req, res) => {
  try {
      const { email, oldPassword, newPassword} = req.body;
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Incorrect old password' });
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      res.json({ message: 'Password changed successfully' });
  } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" })
  }
}