
// Product add User ... connect with database;

const express = require('express');
const {addNewProduct , getAllProduct , getProduct} = require('../controller/product.controller');
const ProductRoutes = express.Router();

ProductRoutes.post("/" , addNewProduct);
ProductRoutes.get("/" , getAllProduct);
ProductRoutes.get("/get-product" , getProduct);


module.exports = ProductRoutes;


