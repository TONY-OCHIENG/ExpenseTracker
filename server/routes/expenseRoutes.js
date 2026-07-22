import express from 'express'
import { deleteExpense, expense, expenseDetails, totalExpense } from '../controllers/expenseControllers.js'

const expenseRoutes = express.Router()
expenseRoutes.post('/expense',expense)
expenseRoutes.get('/totalExpense/:id',totalExpense)
expenseRoutes.get('/expenseDetails/:id',expenseDetails)
expenseRoutes.delete('/deleteExpense/:id',deleteExpense)
export default expenseRoutes