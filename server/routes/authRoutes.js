import { login, logout, register, userDetails } from "../controllers/authControllers.js"
import express from 'express'
import { auth } from "../middlewares/auth.js"

const authRoute = express.Router()
authRoute.post('/register',register)
authRoute.post('/login',login)
authRoute.get('/user',auth,userDetails)
authRoute.get('/logout',logout)
export default authRoute  