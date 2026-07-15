import { login, register, userDetails } from "../controllers/authControllers.js"
import express from 'express'
import { auth } from "../middlewares/auth.js"

const authRoute = express.Router()
authRoute.post('/register',register)
authRoute.post('/login',login)
authRoute.get('/user',auth,userDetails)
export default authRoute  