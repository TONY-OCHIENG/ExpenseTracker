import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    methods:['PUT','GET','POST','DELETE'],
    credentials:true,
}))
app.use("/auth",authRoute)
app.listen(process.env.PORT,() => {
    console.log("Server is running")
})