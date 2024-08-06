// const express = require('express');

// const server = express();

// server.get('/' , (req , res) =>{
//     res.write('welcome to learn nodejs');
//     res.end();
// })

// server.get('/contact' , (req , res) =>{
//     res.setHeader('text-contant' , 'paragraph');
//     res.send('Hello World');
//     res.end();
// })

// server.get('/about' , (req , res) =>{
//     res.send("<h1>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. </h1>");
//     res.end();
// })

// server.listen('5000' , ()=>{
//     console.log('server started at http://localhost:5000');
    
// });

// const express = require('express');

// const server = express();

// server.get('/' , (req , res) =>{
//     res.setHeader('Content-type' , 'text/plain');
//     res.send('this is a server');
//     res.end();
// })

// server.listen('1234' , () =>{
//     console.log(`server start at http://localhost:1234`);
    
// })


// date 06-08-2024

const express = require('express');
const server = express();

server.get('/user' , (req , res) =>{
    res.status(200);
    res.json({message:'User Get Method'});
})

server.post('/user' , (req , res) =>{
    res.status(200);
    res.json({message:'User Post Method'});
})

server.put('/user' , (req , res)=>{
    res.json({message:'User Put Method'});
})

server.patch('/user' , (req , res) =>{
    res.json({message:'User Patch Method'});
})

server.delete('/user' , (req , res) =>{
    res.json({message:'User Delete Method'})
})

server.listen(8000 , ()=>{
    console.log(`server start at http://localhost:8000`);   
})