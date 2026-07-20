import database from "../configs/database.js"

export const income = (request,response) => {
    const { userId, incomeDate, incomeDetails,incomePrice} = request.body
    if (!userId || !incomeDate || !incomeDetails || !incomePrice) {
        return response.status(200).json({status: false, message: "Please fill all fields"})
    }

    try {
        const sqlQuery = "INSERT INTO income(user_id,incomeDetails,incomePrice,incomeDate) VALUES(?,?,?,?)"
        database.query(sqlQuery,[userId,incomeDetails,incomePrice,incomeDate], (error,results) => {
            if (error) return response.status(200).json({status: false, error: error})
            if (results) {
                return response.status(201).json({status: true, message: "Income added successfully"})
            }
        })        
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const totalIncome = (request,response) => {
    try {
        const sqlQuerry = "SELECT SUM(incomePrince) as totalIncome FROM income WHERE user_id = ?"
        database.query(sqlQuerry,[id], (error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.lengt > 0) {
                return response.status(200).json({status: true, result: result[0].totalIncome})
            } else {
                return response.status(404).json({status: false, message: "user not found"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}