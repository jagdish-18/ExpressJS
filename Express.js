const express = require('express');
const server = express();

//middleware

// Built-in middleware
//1-> express.json() ->raw / json formate
//2-> express.urlencoded() -> form
//3-> express.static()

//1-> express.json() ->raw / json formate
// server.use(express.json());
// function middleware(req, res, next) {
//     console.log(req.body);
//     if (req.body.age >= 18) {
//         console.log("success");
//         next();
//     } else {
//         return res.json({ message: "Inccorect Way!!!!" });
//     }
// }

// 2-> express.urlencoded() -> form
// server.use(express.urlencoded({extended : true}))
// function middleware(req, res, next) {
//     console.log(req.body);
//     if (req.body.age >= 18) {
//         console.log("success");
//         next();
//     } else {
//         return res.json({ message: "Inccorect Way!!!!" });
//     }
// }

//3-> express.static()
// server.use("/hey",express.static('public'));
// function middleware(req, res, next) {
//         console.log(req.body);
//         if (req.body.age >= 18) {
//             console.log("success");
//             next();
//         } else{
//             return res.json({ message: "Inccorect Way!!!!" });
//         }
//     }

// server.get('/', middleware ,(req,res)=>{
//     res.write("<h1>Welcome to server</h1>")
//     res.end()
// })

// server.get('/', (req , res) =>{
//     res.json({message:'hello'});
// })


 // third party middleware
 
//  let loggerfunction = (req , res , next) =>{
//     console.log(req.url , "\t" , req.method , '\t');
//     next();
//  }

//  server.use(loggerfunction)

const morgan = require('morgan');

// server.use(morgan('dev'))
// server.use(morgan('tiny'))
server.use(morgan('combined'))


server.get('/', (req , res) =>{
    res.json({message:'hello'});
})

server.post('/', (req , res) =>{
    res.json({message:'hello'});
})

server.listen(6000 , () =>{
     console.log(`server start at http://localhost:6000`);
        
    })



