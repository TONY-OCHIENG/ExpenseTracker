import database from "../configs/database.js"

export const expense = (request,response) => {
    const {userId, expenseDetails, expenseDate, expensePrice} = request.body
    if (!userId || !expenseDetails || !expenseDate || !expensePrice) {
        return response.status(400).json({status: false, message: "Please fill all fields"})
    }
    try {
        const sqlQuerry = "INSERT INTO expense(user_id,expenseDetails,expensePrice,expenseDate) VALUES(?,?,?,?)"
        database.query(sqlQuerry,[userId,expenseDetails,expensePrice,expenseDate],(error,result) => {
            if ( error ) return response.status(200).json({status: false, message: error})
            if (result) {
                return response.status(201).json({status: true, message: "Expense added sucessfully"})
            } 
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }    
}

export const totalExpense = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "SELECT SUM(expensePrice) as totalExpense FROM expense WHERE user_id = ?"
        database.query(sqlQuerry,[id], (error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                return response.status(200).json({status: true, result: result[0].totalExpense})
            } else {
                return response.status(404).json({status: false, message: "user not found"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const expenseDetails = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "SELECT expense_id, expenseDetails as transactionDetail, expenseDate as transactionDate, expensePrice as transactionPrice FROM expense where user_id = ?"
        database.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                return response.status(200).json({status: true, result: result})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
}