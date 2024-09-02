const express = require("express");

const orderRoutes = express.Router();

const {addNewOrder, orderCencel} = require("../controller/order.controller");

const {verifyToken} = require("../helpers/tokenVerify");

orderRoutes.post("/" , verifyToken , addNewOrder);
orderRoutes.delete("/" , verifyToken , orderCencel);


module.exports = orderRoutes;