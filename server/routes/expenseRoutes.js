import express from 'express'
import { income } from '../controllers/expenseControllers'

const expenseRoutes = express.Router()
expenseRoutes.post('/income',income)
export default expenseRoutes