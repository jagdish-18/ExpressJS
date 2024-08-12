const express = require('express');
const server = express();
const morgan = require('morgan');
const productRoutes = require('./routes/product.routes');


server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

server.get('/', (req , res) =>{
    res.send("WelCome To Express Server!!!!");
});

server.use("/api/product" , productRoutes)

server.listen(7000 , () =>{
   console.log(`Server Start At http://localhost:7000/api/product`);
   
})

