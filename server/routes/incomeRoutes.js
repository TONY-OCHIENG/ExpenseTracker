import express from 'express'
import { income, incomeDetails, incomeTransaction, totalIncome } from '../controllers/incomeControllers.js'

const incomeRoutes = express.Router()
incomeRoutes.post('/income',income)
incomeRoutes.get('/totalIncome/:id',totalIncome)
incomeRoutes.get('/incomeTransaction/:id',incomeTransaction)
incomeRoutes.get('incomeDetails/:id',incomeDetails)
export default incomeRoutes