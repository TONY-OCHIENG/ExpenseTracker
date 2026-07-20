import express from 'express'
import { income } from '../controllers/expenseControllers.js'

const expenseRoutes = express.Router()
expenseRoutes.post('/income',income)
export default expenseRoutes