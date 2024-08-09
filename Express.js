const express = require('express');
const server = express();
const product = require('./product.json');
const morgan = require('morgan');
const user = require('./user.json')

server.use(express.json());
server.use(express.urlencoded({extended: "true"}));
server.use(morgan('dev'));

server.get('/', (req , res) =>{
    res.json(product)
})

//CRUD

//Add New Product -Create
server.post("/product" , (req , res) =>{
    // console.log(req.body);
    product.push(req.body);
    res.json({product : req.body , message :`Product Added Success`})
    
})

// Get All Product  - Read
server.get("/product" , (req ,res) =>{
    res.json(product)
})

// Get Single Product -Read
// server.get("/product/:id" , (req ,res) =>{
//     let id = +req.params.id;
//     let item = product.find((product) => product.id === id);
//     res.json(item);
// })


server.listen(6000 , () =>{
     console.log(`server start at http://localhost:6000`);
        
    })


 server.get("/userdata" , (req ,res) =>{
    res.json(user);
 })   


 server.post('/user' , (req ,res) =>{
    user.push(req.body);
    res.json({user : req.body ,message: `user Added Succesfully`})
 })

 server.get('/user' , (req ,res) =>{
    res.json(user)
 })

 server.get("/user/:id" , (req ,res) =>{
    let id = +req.params.id;
    let item = user.find((user) => user.id === id);
    res.json(item)
 })

 server.listen(7000 , () =>{
    console.log(`server started at http://localhost:7000`);
    
 })


