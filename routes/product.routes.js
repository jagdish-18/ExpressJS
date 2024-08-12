const express = require('express');
const productRoutes = express();


const {
    addNewProduct,
    getAllProducts,
    getProduct,
    replaceProduct,
    updateProduct,
    deleteProduct,
} = require("../controller/product.controller");

// Add New Product - Create
productRoutes.post("/" , addNewProduct);

// Get All Products - Read
productRoutes.get("/" , getAllProducts);

// Get Single Product - Read
productRoutes.get("/:id" , getProduct);

// Replcae Data  - Put
productRoutes.put("/:id" , replaceProduct);

// Update Data - Patch
productRoutes.patch("/:id" , updateProduct);

// Delete Data - Delete
productRoutes.delete("/:id" , deleteProduct);

module.exports = productRoutes;