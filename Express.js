const express = require('express');
const server = express();
const morgan = require('morgan');
const user = require('./user.json');
const product = require('./product.json');

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

server.get('/product', (req , res) =>{
    res.json(product);
});

//CRUD

// Replace Data -PUT
server.put("/product/:id" , (req ,res) =>{
   let id = +req.params.id;
   let productIndex = product.findIndex((product) => product.id === id);
   // console.log(productIndex);
   product.splice(productIndex , 1 , {...req.body});
   res.json({message: `product Replaces Success..`});
});

// Update Data - PATCH
server.patch("/product/:id" , (req ,res) =>{
   let id = +req.params.id;
   let productIndex = product.findIndex((product) => product.id === id);
   // console.log(productIndex);
   const products = product[productIndex]
   // console.log(products);
   product.splice(productIndex , 1 , {...products , ...req.body});
   res.json({message : `Product Updated SuccessFully`})
   
})

//Delete Data - DELETE
server.delete("/product/:id" , (req , res) =>{
   let id = +req.params.id;
   let productIndex = product.findIndex((product) => product.id === id);
   const products = product[productIndex];
   product.splice(productIndex , 1);
   res.json({products , message : `Product Deleted SuccessFully`})
})

server.get("/user" , (req ,res) =>{
   res.json(user)
})

// Replace Data - PUT
server.put("/user/:id" , (req , res) =>{
   let id = +req.params.id;
   let userIndex = user.findIndex((user) => user.id === id);
   user.splice(userIndex , 1 , {...req.body});
   res.json({message : `User Replace Success`})
})

//  Update Data - PATCH
server.patch("/user/:id" , (req , res) =>{
   let id = +req.params.id;
   let userIndex = user.findIndex((user) => user.id === id);
   const users = user[userIndex];
   user.splice(userIndex , 1 ,{...users , ...req.body});
   res.json({message : `Update Data Success`});
})

// Delete Data - DELETE
server.delete("/user/:id" , (req ,res) =>{
   let id = +req.params.id;
   let userIndex = user.findIndex((user) => user.id === id);
   // const users = user[userIndex];
   user.splice(userIndex , 1);
   res.json({message : `User Deleted SuccesFully`});
})



server.listen(1234 , () =>{
   console.log(`Server Start at http://localhost:1234`);
});