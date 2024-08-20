const express = require('express');
const server = express();
const morgan = require('morgan');
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const mongoose = require("mongoose");
require('dotenv').config();
const port = process.env.PORT
const mongo_url = process.env.MONGO_URL
console.log(mongo_url);


// Database Connection
mongoose.connect(mongo_url)
.then(() => console.log(`Database Connection Established SuccessFully`))
.catch(err => console.log(err))

// mongoose.connect(mongo_url)
//         .then(() => console.log(`Database Connection Established SuccessFully`))
//         .catch(err => console.log(err)) 

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

server.get('/', (req , res) =>{
    res.send("WelCome To Express Server!!!!");
});

server.use("/api/product" , productRoutes);
server.use("/api/user" , userRoutes);

server.listen(port , () =>{
   console.log(`Server Start At http://localhost:${port}`);
   
})



