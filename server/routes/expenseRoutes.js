import express from 'express'
import { income, totalIncome } from '../controllers/expenseControllers.js'

const expenseRoutes = express.Router()
expenseRoutes.post('/income',income)
expenseRoutes.get('/totalIncome/:id',totalIncome)
export default expenseRoutes