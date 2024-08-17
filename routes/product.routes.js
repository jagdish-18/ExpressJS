
// Product add User ... connect with database;

const express = require('express');
const {addNewProduct , getAllProduct , getProduct , updateProduct , deleteProduct} = require('../controller/product.controller');
const ProductRoutes = express.Router();

ProductRoutes.post("/" , addNewProduct);
ProductRoutes.get("/" , getAllProduct);
ProductRoutes.get("/get-product" , getProduct);
ProductRoutes.put("/" , updateProduct);
ProductRoutes.delete("/" , deleteProduct);


module.exports = ProductRoutes;


