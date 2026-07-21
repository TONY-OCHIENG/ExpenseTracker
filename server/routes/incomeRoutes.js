import express from 'express'
import { income, incomeTransaction, totalIncome } from '../controllers/incomeControllers.js'

const incomeRoutes = express.Router()
incomeRoutes.post('/income',income)
incomeRoutes.get('/totalIncome/:id',totalIncome)
incomeRoutes.get('/incomeTransaction/:id',incomeTransaction)
export default incomeRoutes