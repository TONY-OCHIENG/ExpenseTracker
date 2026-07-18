import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
import expenseRoutes from './routes/expenseRoutes.js'
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
app.use('/auth',expenseRoutes)
app.listen(process.env.PORT,() => {
    console.log("Server is running")
})