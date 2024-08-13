const express = require('express');
const usersRoutes = express();


const {
    addNewUser,
    getAllUser,
    getSingleProduct,
    replaceUser,
    updateUser,
    deleteUser
} = require("../controller/users.controller");

// Get All Products - Read
usersRoutes.get("/" , getAllUser);

//  Get Single Product - Read
usersRoutes.get("/:id" , getSingleProduct);

// Add New Product - Create
usersRoutes.post("/" , addNewUser);

// Replcae Data  - Put
usersRoutes.put("/:id" , replaceUser);

// Update Data - Patch
usersRoutes.patch("/:id" , updateUser);

// // Delete Data - Delete
usersRoutes.delete("/:id" , deleteUser);

// Add New User


module.exports = usersRoutes;