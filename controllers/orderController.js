import { response } from "express";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"

// using Cod orders Method
const placeOrder = async (req , res) =>{
   try {
    
    const {userId , items , amount , address} = req.body;

    const orderData = {
        userId,
        address,
        items,
        amount,
        paymentMethod: "COD",
        payment: false,
        date : Date.now()
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId,{cartData : {}})

    res.json({success: true , message : "Order placed"})

   } catch (error) {
      console.log(error);
    res.json({success: false , message: error.message})

      
   }
}

//using stripe  Method
const placeOrderStripe = async (req , res) =>{

}

//using razorpay Method
const placeOrderRazorpay = async (req , res) =>{

}

//All orders data for admin pannel 
const allOrders = async (req , res) =>{
    
}

//User orders data for Frontend
const userOrders = async (req , res) =>{

}

//Update order status from Admin panel
const updateStatus = async (req , res) =>{

}

export{placeOrder , placeOrderStripe , placeOrderRazorpay , allOrders , userOrders , updateStatus}