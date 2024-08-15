const express = require('express');
const server = express();
const morgan = require('morgan');
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const mongoose = require("mongoose");

// Database Connection
// mongoose.connect("mongodb://127.0.0.1:27017/users")
// .then(() => console.log(`Database Connection Established SuccessFully`))
// .catch(err => console.log(err))

mongoose.connect("mongodb://127.0.0.1:27017/product")
        .then(() => console.log(`Database Connection Established SuccessFully`))
        .catch(err => console.log(err))
        

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

server.get('/', (req , res) =>{
    res.send("WelCome To Express Server!!!!");
});

server.use("/api/product" , productRoutes);
server.use("/api/user" , userRoutes);

server.listen(7000 , () =>{
   console.log(`Server Start At http://localhost:7000`);
   
})

