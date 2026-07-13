import { register } from "../controllers/authControllers.js"
import express from 'express'

const authRoute = express.Router()
authRoute.post('/register',register)
export default authRoute  