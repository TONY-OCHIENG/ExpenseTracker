import express from 'express'
import { deleteIncome, income, incomeDetails, incomeTransaction, totalIncome } from '../controllers/incomeControllers.js'

const incomeRoutes = express.Router()
incomeRoutes.post('/income',income)
incomeRoutes.get('/totalIncome/:id',totalIncome)
incomeRoutes.get('/incomeTransaction/:id',incomeTransaction)
incomeRoutes.get('/incomeDetails/:id',incomeDetails)
incomeRoutes.delete('/deleteIncome/:id',deleteIncome)
export default incomeRoutes