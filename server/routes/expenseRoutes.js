import express from 'express'
import { expense } from '../controllers/expenseControllers.js'

const expenseRoutes = express.Router()
expenseRoutes.post('/expense',expense)
export default expenseRoutes