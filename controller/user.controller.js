const User = require("../model/user.model");


// Add New user
exports.addNewUser = async (req , res) =>{
    try{
        // console.log(req.body);
        const {firstName , lastName , email , age ,hobbies , address} = req.body;
        let user = await User.findOne({email : email});
        if(user)
            return res.status(400).json({message : "User Aleready Exist....."});
        user = await User.create({
            firstName , lastName , email ,age,hobbies , address
        });
        user.save();
        res.status(201).json({message : "User Added"})
    }catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Server Error"})
    }
};

// Get All Users
exports.getAllUser = async (req , res) =>{
    try{
        let users = await User.find();
        res.status(200).json(users);
    }catch (error){
        console.log(error);
        res.status(500).json({message : "Internal Server Error"});
        
    }
};

//Get User 
exports.getUser = async (req ,res) =>{
    try{
        let user = await User.findOne({firstName:req.query.firstName});
        // console.log(user)
        // let user = await User.findById(req.query.userId);
        if(!user)
            return res.status(404).json({message : "User Not Found"});
        res.status(200).json(user);
    }catch(error) {
           console.log(error);
           res.status(500).json({message : "Internal Server Error"})
    }
}
