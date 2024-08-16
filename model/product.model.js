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
    othersProducts : [String],
    image : [String]
})

module.exports = mongoose.model("product" , productSchema)