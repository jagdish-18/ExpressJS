const { use } = require("../routes/users.routes");
const users = require("../user.json");

// Get All users
exports.getAllUser = (req , res) =>{
  res.json(users)
}

// Get Single User
exports.getSingleProduct = (req ,res) =>{
  let id = +req.params.id;
  let item = users.find((users) => users.id === id);
  res.json(item);
}

// Add user - post
exports.addNewUser = (req , res) =>{
  // console.log(req.body);
  users.push(req.body);
  res.json({users : req.body , message:"New User Added Success"});
 
}

// Replace user - Put
exports.replaceUser = (req , res) =>{
  let id = +req.params.id;
  let userIndex = users.findIndex((users) => users.id === id);
  users.splice(userIndex , 1 , {...req.body});
  res.json({message : `User Replace Success`});
}

// Update user - patch
exports.updateUser = (req ,res) =>{
  let id = +req.params.id;
  let userIndex = users.findIndex((users) => users.id === id);
  const user = users[userIndex];
  users.splice(userIndex , 1 , {...user , ...req.body});
  res.json({message : `Product Update Success`});
}

// Delete User - Delete
exports.deleteUser = (req ,res) =>{
  let id = +req.params.id;
  let userIndex = users.findIndex((users) => users.id === id);
  users.splice(userIndex , 1);
  res.json({users , message : `User Delete Success`});
}


