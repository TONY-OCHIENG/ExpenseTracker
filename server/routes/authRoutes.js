import { login, register } from "../controllers/authControllers.js"
import express from 'express'

const authRoute = express.Router()
authRoute.post('/register',register)
authRoute.post('/login',login)
export default authRoute  