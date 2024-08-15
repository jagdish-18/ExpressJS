const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName : String,
    title : String,
    price : {
        type : Number
    },
    discription : {
        type : String
    },
    rating : Number,
    othersProducts : [String]
})

module.exports = mongoose.model("product" , productSchema)