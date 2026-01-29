import express from "express"
import  type { Request, Response } from "express"
import dotenv from "dotenv"

import mongoose from "mongoose"
import DBConnect  from "./config/configDB/dbConnect.js"

import cors from "cors"
import corsOptions from "./config/configCors/corsOptions.js"



import { stripe } from "./config/stripe.js"
import type { Product } from "./types/Product.js"

dotenv.config()







const PORT = process.env.PORT || 5000
const ENV = process.env.NODE_ENV


const app = express()

DBConnect()

app.use(cors(corsOptions))
app.use(express.json())
//Routes
app.get("/" , (req:Request , res:Response) => {
    return res.status(200).json({success: true , message: "API" , version:"1.0.0"})
})


app.post("/checkout-payment" , async(req : Request , res:Response) => {
    try{

    const {cart} = req.body 
    const line_items = cart.map((item : Product) => (
         {
          price_data : {
                product_data : { name : item.name},
                currency : "eur",
                unit_amount : item.price *1000, // 30 euro 
            },
            quantity : item.quantity
    }
    ))

    
    const session = await stripe.checkout.sessions.create({
    mode : "payment",
    payment_method_types : ["card"],
    shipping_address_collection : {
        allowed_countries : ['US' ,'FR']
    },
    line_items,

    success_url : `${process.env.FRONT_URL}/payment/success`,
    cancel_url : `${process.env.FRONT_URL}/payment/cancel` ,
   
})

 return res.status(200).json({success : true , url : session.url })
   
    }catch(error){
      console.log(error)   
      return res.status(500).json({message : "Erreur de serveur"})
    
    }
})




app.post("/checkout-subscriptions" , async (req :Request , res : Response) => {
  
   try{
       const {priceId} = req.body
   const session = await stripe.checkout.sessions.create({
    mode : "subscription",
    payment_method_types : ["card"],
    line_items : [
        {
            price :priceId,
            quantity :1
        }
    ],
    success_url :`${process.env.FRONT_URL}/subscriptions/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.FRONT_URL}/subscriptions/cancel`
    
   })

   return res.status(200).json({success :true , url:session.url})
   }catch(error){
    console.log(error)
    return res.status(500).json({success: false , message : "Erreur de serveur"})
   }
  
})



//.Routes


mongoose.connection.once("open" , () => {
    console.log("Connected to MongoDB")
    app.listen(PORT , () => {
        console.log(`Server is running on port ${PORT}`)
        console.log(ENV)
    })
})

mongoose.connection.on("error" , (error) => {
  console.log(error)
})