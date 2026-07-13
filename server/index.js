import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './routes/authRoutes.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/auth",authRoute)
app.listen(process.env.PORT,() => {
    console.log("Server is running")
})