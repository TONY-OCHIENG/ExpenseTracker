import express from 'express'
import { expense, totalExpense } from '../controllers/expenseControllers.js'

const expenseRoutes = express.Router()
expenseRoutes.post('/expense',expense)
expenseRoutes.get('/totalExpense/:id',totalExpense)
export default expenseRoutes