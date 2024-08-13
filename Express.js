const express = require('express');
const server = express();
const morgan = require('morgan');
const usersRoutes = require('./routes/users.routes');


server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(morgan('dev'));

server.get('/', (req , res) =>{
    res.send("WelCome To Express Server!!!!");
});

server.use("/api/user" , usersRoutes)

server.listen(8000 , () =>{
   console.log(`Server Start At http://localhost:8000/api/user`);
   
})

