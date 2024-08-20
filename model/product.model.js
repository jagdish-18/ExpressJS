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
    image : [String],
    isDelete : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model("product" , productSchema)