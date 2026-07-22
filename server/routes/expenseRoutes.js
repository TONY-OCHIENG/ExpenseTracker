import express from 'express'
import { expense, expenseDetails, totalExpense } from '../controllers/expenseControllers.js'

const expenseRoutes = express.Router()
expenseRoutes.post('/expense',expense)
expenseRoutes.get('/totalExpense/:id',totalExpense)
expenseRoutes.get('/expenseDetails/:id',expenseDetails)
export default expenseRoutes