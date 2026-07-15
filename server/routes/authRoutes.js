import { login, register, userDetails } from "../controllers/authControllers.js"
import express from 'express'

const authRoute = express.Router()
authRoute.post('/register',register)
authRoute.post('/login',login)
authRoute.get('/user',userDetails)
export default authRoute  