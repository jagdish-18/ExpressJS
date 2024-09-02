const Order = require("../model/order.model");
const Cart = require("../model/cart.model");

exports.addNewOrder = async (req ,res) =>{
    try {
        let carts = await Cart.find({
            user:req.user._id,
            isDelete : false,
        }).populate("productId");
        console.log(carts);
        
        let orderItems = carts.map((item) => ({
            productId : item.productId._id,
            quantity : item.quantity,
            price : item.productId.price,
            totalAmount : item.quantity * item.productId.price
        }));
        // console.log("order" , orderItems);
        
        let amount = orderItems.reduce((total , item) => (total += item.totalAmount), 0);
        // console.log("Amount------------>" , amount);
        
        let order = await Order.create({
            userId : req.user._id,
            items : orderItems,
            totalPrice : amount,
        })
        
        await Cart.updateMany(
            {
                user : req.user._id,
                isDelete : false
            },
            {isDelete : true}
        );
        res.json({message : "Order Placed" , order});
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Servar Error"})
    }
}

exports.orderCencel = async (req ,res) =>{
      try {
        const order = await Order.find({user : req.user.userId, isDelete : true})
        // console.log(order);

        if(!order){
            res.status(400).json({message : "Order Not Found"})     
        }

        const deleteOrder = await Order.findByIdAndDelete(Order._id);
        res.status(200).json({deleteOrder , message : "Order Delete Success"})

      } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Server Error..."})
      }
}