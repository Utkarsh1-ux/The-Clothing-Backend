import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

configDotenv();
// App config
const app = express()
const port = process.env.PORT || 3000
connectDB();
connectCloudinary();

// middlewares

app.use(express.json())
app.use(cors())

// Api endpoints
app.use('/api/user' , userRouter)
app.use('/api/product' , productRouter)

app.get('/' , (req,res)=>{
    res.send("Api working")
})

app.listen(port , ()=> console.log("server started on port : " + port))