import express from 'express'
import { income, totalIncome } from '../controllers/incomeControllers.js'

const incomeRoutes = express.Router()
incomeRoutes.post('/income',income)
incomeRoutes.get('/totalIncome/:id',totalIncome)
export default incomeRoutes